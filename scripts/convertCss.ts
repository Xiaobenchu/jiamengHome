/**
 *  views 页面快速生成脚本
 *
 *  npm run tem '文件名‘
 */
const fs = require('fs');
const path = require('path');

function listFile(dir: string) {
  let fileList: string[] = [];
  const arr = fs.readdirSync(dir);
  arr.forEach((item: string) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      const res = listFile(fullPath);
      fileList = fileList.concat(res);
    } else {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

convert();

async function convert(): Promise<void> {
  const fileList = listFile('./src/styles');
  // console.log(fileList);
  // eslint-disable-next-line no-restricted-syntax
  for (const file of fileList) {
    console.log('start convert file', file);

    const fileName = path.basename(file);
    const fileDir = path.dirname(file);
    const content = fs.readFileSync(file, { encoding: 'utf-8' });
    if (!content) {
      continue;
    }

    if (fileName.endsWith('module.css')) {
      const newContent = content.replace(
        /([-.\d]+)rem/g,
        (substring: string, matchNumber: string) => {
          let num = parseFloat(matchNumber);
          num = Math.round(((num * 100) / 1080) * 750) / 100;
          return `${num}rem`;
        },
      );
      const cssName = fileName.replace(/.css/, '.scss');
      const cssFilePath = path.resolve(fileDir, cssName);
      fs.writeFileSync(cssFilePath, newContent);
    }

    // break;
  }
  console.log('end convert');
}

// fs.mkdirSync(`./src/views/${dirName}`); // mkdir $1
// process.chdir(`./src/views/${dirName}`); // cd $1

// fs.writeFileSync('index.tsx', indexTemp); //tsx

// fs.writeFileSync('services.ts', serviceTemp); // service
// fs.writeFileSync('styles.ts', styleTemp); // styles

process.exit(0);

export {};
