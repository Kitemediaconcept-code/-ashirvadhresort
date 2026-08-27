const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, 'public');
const MAX_WIDTH = 1920;

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      // Only process png, jpg, jpeg if they are larger than 300KB
      if (['.png', '.jpg', '.jpeg'].includes(ext) && stat.size > 300 * 1024) {
        console.log(`Processing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
        
        try {
          const tempPath = fullPath + '.tmp';
          const image = sharp(fullPath);
          const metadata = await image.metadata();

          let pipeline = image;
          
          if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
          }

          if (ext === '.png') {
            await pipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
          } else {
            await pipeline.jpeg({ quality: 80 }).toFile(tempPath);
          }

          const newStat = fs.statSync(tempPath);
          console.log(`  -> Saved as: ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
          
          // Replace original
          fs.renameSync(tempPath, fullPath);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

processDirectory(PUBLIC_DIR)
  .then(() => console.log('Compression complete.'))
  .catch(err => console.error(err));
