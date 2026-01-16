const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Image optimization configuration
const imageConfigs = {
  'logo_square.png': {
    width: 128,
    height: 128,
    quality: 90,
    createWebP: true, // Also create WebP version
  },
  'vaultbubbles-icon-48.png': {
    width: 48,
    height: 48,
    quality: 90,
    createWebP: true,
  },
  'VB_screenshot.png': {
    width: 1200,
    quality: 85,
    createWebP: true,
  },
  'logo_round.png': {
    width: 128,
    height: 128,
    quality: 90,
    createWebP: true,
  },
};

async function optimizeImage(filename, config) {
  const inputPath = path.join(publicDir, filename);
  
  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${filename} - file not found`);
    return;
  }

  try {
    // Get original size
    const originalSize = fs.statSync(inputPath).size;
    
    // Create backup of original (only first time)
    const backupPath = path.join(publicDir, `${filename}.backup`);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    let sharpInstance = sharp(inputPath);
    
    // Resize if dimensions specified
    if (config.width || config.height) {
      sharpInstance = sharpInstance.resize(config.width, config.height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Optimize PNG to temporary file first
    const tempPNGPath = path.join(publicDir, `${filename}.tmp`);
    await sharpInstance
      .png({ 
        quality: config.quality, 
        compressionLevel: 9,
        adaptiveFiltering: true,
      })
      .toFile(tempPNGPath);

    // Replace original with optimized version
    const optimizedPNGPath = path.join(publicDir, filename);
    fs.renameSync(tempPNGPath, optimizedPNGPath);

    const optimizedSize = fs.statSync(optimizedPNGPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${filename} (PNG optimized)`);
    console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);

    // Create WebP version if requested
    if (config.createWebP) {
      const webpPath = path.join(publicDir, filename.replace(/\.png$/i, '.webp'));
      await sharp(inputPath)
        .resize(config.width, config.height, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: config.quality })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const webpSavings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      
      console.log(`   📦 WebP: ${(webpSize / 1024).toFixed(1)}KB (${webpSavings}% smaller)`);
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  console.log('📝 Note: Original images backed up with .backup extension\n');

  const promises = Object.entries(imageConfigs).map(([filename, config]) =>
    optimizeImage(filename, config)
  );

  await Promise.all(promises);

  console.log('\n✨ Image optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   • PNG files have been optimized in place');
  console.log('   • WebP versions created for even better compression');
  console.log('   • Update image paths in page.tsx to use .webp for best performance');
  console.log('   • Remove .backup files once confirmed: npm run clean-backups');
}

// Run optimization
optimizeAllImages().catch(console.error);
