import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';

const execAsync = promisify(exec);

const input = 'sample.pdf';
const imagePrefix = 'raster_page';
const output = 'rasterized_compressed.pdf';

const compressPDF = async () => {
  try {
    const inputStats = await fs.stat(input);
    console.log(`📄 Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);

    console.log('🌀 Converting PDF pages to grayscale JPEGs...');
    await execAsync(`pdftoppm "${input}" ${imagePrefix} -jpeg -gray -jpegopt quality=40`);

    console.log('🧙 Rebuilding PDF from rasterized images...');
    await execAsync(`convert ${imagePrefix}-*.jpg -resize 1500x -colorspace Gray -compress JPEG -quality 40 -density 100 "${output}"`);

    const outputStats = await fs.stat(output);
    console.log(`✅ Final PDF created: ${output}`);
    console.log(`📦 Final size: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);

    console.log('🧹 Cleaning up temporary images...');
    const files = await fs.readdir('.');
    const imageFiles = files.filter(f => f.startsWith(imagePrefix) && f.endsWith('.jpg'));
    await Promise.all(imageFiles.map(f => fs.unlink(f)));

    console.log('🎉 Done!');
  } catch (err) {
    console.error('❌ Error:', err.message || err.stderr);
  }
};

compressPDF();
