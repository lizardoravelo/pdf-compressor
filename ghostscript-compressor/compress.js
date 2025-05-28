import { execa } from 'execa';
import fs from 'fs/promises';

const args = process.argv.slice(2);
const mode = args.find(arg => arg.startsWith('--mode='))?.split('=')[1] || 'basic';

const input = 'sample.pdf';
const output = `compressed_${mode}.pdf`;
const quality = '/screen'; // Options: /screen, /ebook, /printer, /prepress

const compressPDF = async () => {
  try {
    const inputStats = await fs.stat(input);
    console.log(`📄 Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🔧 Compression mode: ${mode}`);

    const baseFlags = [
      '-sDEVICE=pdfwrite',
      '-dCompatibilityLevel=1.4',
      '-dNOPAUSE',
      '-dQUIET',
      '-dBATCH',
      `-sOutputFile=${output}`,
      input
    ];

    const flagSets = {
      basic: [
        `-dPDFSETTINGS=${quality}`,
      ],
      mega: [
        `-dPDFSETTINGS=${quality}`,

        // Aggressive image compression
        '-dDownsampleColorImages=true',
        '-dColorImageResolution=50',
        '-dAutoFilterColorImages=false',
        '-dColorImageFilter=/DCTEncode',

        '-dDownsampleGrayImages=true',
        '-dGrayImageResolution=50',
        '-dAutoFilterGrayImages=false',
        '-dGrayImageFilter=/DCTEncode',

        '-dDownsampleMonoImages=true',
        '-dMonoImageResolution=50',
        '-dMonoImageFilter=/CCITTFaxEncode',

        // Font and duplicate compression
        '-dDetectDuplicateImages=true',
        '-dCompressFonts=true',
        '-dSubsetFonts=true',

        // Grayscale
        '-sColorConversionStrategy=Gray',
        '-dProcessColorModel=/DeviceGray',

        // Strip metadata
        '-dPreserveAnnots=false',
        '-dPreserveOPIComments=false',
        '-dPreserveEPSInfo=false',
      ]
    };

    const flags = [...(flagSets[mode] || flagSets.basic), ...baseFlags];

    await execa('gs', flags);

    const outputStats = await fs.stat(output);
    console.log(`✅ Compressed PDF saved to: ${output}`);
    console.log(`📦 New size: ${(outputStats.size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error('❌ Compression failed:', err.stderr || err.message);
  }
};

compressPDF();
