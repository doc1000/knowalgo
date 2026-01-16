const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Find all .backup files
const files = fs.readdirSync(publicDir);
const backupFiles = files.filter(file => file.endsWith('.backup'));

if (backupFiles.length === 0) {
  console.log('✨ No backup files found to clean');
  process.exit(0);
}

console.log(`🗑️  Found ${backupFiles.length} backup file(s):\n`);

backupFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  console.log(`   ${file} (${(stats.size / 1024).toFixed(1)}KB)`);
});

console.log('\n⚠️  These backup files will be deleted.');
console.log('   Press Ctrl+C to cancel, or wait 3 seconds to continue...\n');

setTimeout(() => {
  let deleted = 0;
  backupFiles.forEach(file => {
    try {
      fs.unlinkSync(path.join(publicDir, file));
      deleted++;
      console.log(`✅ Deleted ${file}`);
    } catch (error) {
      console.error(`❌ Error deleting ${file}:`, error.message);
    }
  });
  
  console.log(`\n✨ Cleaned up ${deleted} backup file(s)`);
}, 3000);
