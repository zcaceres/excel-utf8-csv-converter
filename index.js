/* Adds a BOM for UTF-8 to a CSV. */

const fs = require('fs');
const path = require('path');
const UTF8_BOM = '\ufeff';

if (process.argv[2]) {
  const originalFile = fs.readFileSync(path.resolve(process.argv[2]));
  const outputPath = './output/' + process.argv[2].replace('.csv', '') + '-utf8.csv';
  const newFile = fs.createWriteStream(outputPath);
  newFile.write(UTF8_BOM);
  newFile.write(originalFile);
  console.log('Converted new file at', outputPath);
} else {
  console.error('Must specify a file after npm convert');
}
