const sharp = require('sharp');
const path = 'public/rhino-logo-transparent.png';
const outPath = 'public/rhino-logo-transp-v2.png';

async function removeWhite() {
    const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Check if pixel is white-ish
        if (r > 240 && g > 240 && b > 240) {
            if (Math.max(r, g, b) - Math.min(r, g, b) < 15) {
                // Smooth alpha transition: pure white (255) gets 0 alpha, 240 gets 255 alpha.
                const lightness = (r + g + b) / 3;
                let alpha = Math.floor((255 - lightness) * (255 / 15));
                if (alpha < 0) alpha = 0;
                if (alpha > 255) alpha = 255;

                data[i + 3] = Math.min(data[i + 3], Math.max(alpha, 0)); // only decrease alpha
            }
        }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
        .png()
        .toFile(outPath);
}

removeWhite().then(() => console.log('Done v2')).catch(console.error);
