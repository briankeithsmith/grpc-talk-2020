var path = require('path');
var fs = require('fs');
var resizeImg = require('resize-img');

const originalFilePath = path.resolve(__dirname, '..', 'src', 'assets', 'slides', 'logo_transparent-crop.png');
const outputIconsFolder = path.resolve(__dirname, '..', 'public', 'img', 'icons');



const datafile = {
    input: [originalFilePath],
    output: [
        [path.join(outputIconsFolder, 'android-chrome-192x192.png'), 192, 192],
        [path.join(outputIconsFolder, 'android-chrome-512x512.png'), 512, 512],
        [path.join(outputIconsFolder, 'apple-touch-icon-60x60.png'), 60, 60],
        [path.join(outputIconsFolder, 'apple-touch-icon-76x76.png'), 76, 76],
        [path.join(outputIconsFolder, 'apple-touch-icon-120x120.png'), 120, 120],
        [path.join(outputIconsFolder, 'apple-touch-icon-152x152.png'), 152, 152],
        [path.join(outputIconsFolder, 'apple-touch-icon-180x180.png'), 180, 180],
        [path.join(outputIconsFolder, 'apple-touch-icon.png'), 64, 64],
        [path.join(outputIconsFolder, 'favicon-16x16.png'), 16, 16],
        [path.join(outputIconsFolder, 'favicon-32x32.png'), 32, 32],
        [path.join(outputIconsFolder, 'msapplication-icon-144x144.png'), 144, 144],
        [path.join(outputIconsFolder, 'mstile-150x150.png'), 150, 150],
        [path.join(outputIconsFolder, '..', 'favicon.png'), 32, 32]
    ]
};

(async() => {
    for (let i = 0; i < datafile.output.length; i++) {
        if (fs.existsSync(datafile.output[i][0])) {
            fs.unlinkSync(datafile.output[i][0])
        }
        const image = await resizeImg(fs.readFileSync(originalFilePath), {
            width: datafile.output[i][2],
            height: datafile.output[i][1]
        });
     
        fs.writeFileSync(datafile.output[i][0], image);
    }
  
})();