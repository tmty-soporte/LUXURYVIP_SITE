const sharp = require('sharp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(__dirname, 'public', 'uploaded-logo-raw.jpg');
  const outputPath = path.join(__dirname, 'public', 'logo-transparent-1.png');

  try {
    // Read the image, change black to transparent, save as PNG
    const meta = await sharp(inputPath).metadata();
    
    // We can extract an alpha channel by looking at the lightness or simply thresholding the black.
    // However, the best way using sharp natively to convert black to transparent:
    // We can use a thresholded mask of the grayscale image and use it as an alpha channel?
    // Let's use `unflatten` or `removeAlpha`?
    // Sharp's `ensureAlpha` doesn't remove black. A known technique for sharp to make a color transparent is not native easily without a pixel array.
    
    // Let's modify pixels by hand or just use a canvas library...
    // Actually, sharp can perform mathematical operations using composite on a pre-multiplied image, or we can use the `lightness` channel of HSL:
    // If we just use `negate()`, it inverts. 
    // It is simpler to use `jimp` because we can iterate over pixels in JS. Let's install jimp for a second.
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
