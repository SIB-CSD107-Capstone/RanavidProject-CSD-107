/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/img');
const destination = path.resolve(__dirname, 'dist/img');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 992px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(992)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.png`));

    // mengubah ukuran gambar dengan lebar 768px, dengan prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(768)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-medium.png`));

    // mengubah ukuran gambar dengan lebar 576px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(576)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.png`));
  });
