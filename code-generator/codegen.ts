import * as path from 'path';
import * as cp from 'child_process';
import * as fs from 'fs';
import * as rimraf from 'rimraf';
const file = require("file");

let transformMultiple = false;
let doGoTransform = false;
let doGrpcWebTransform = false;

let transformCount = 0;
for (let i = 1; i <  process.argv.length; i++) {
  if (process.argv[i] === 'grpc-web') {
    doGrpcWebTransform = true;
    transformCount++;
  }
  if (process.argv[i] === 'go') {
    doGoTransform = true;
    transformCount++;
  }
}

transformMultiple = transformCount > 1;

// Root directory of the git repo
var sourceRoot = "/source";

const filesToTransform: string[] = [];
file.walkSync(sourceRoot, (dir: string, subDirs: string[], files: string[]) => {
  if (typeof(files) !== "object") {
    return;
  }
  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i])  === ".proto") {
      filesToTransform.push(path.join(dir, files[i]));
    }
  }
});

var outputPath = '/output/';
var jsOutputPath = transformMultiple ? outputPath + 'grpc-web/' : outputPath;
var goOutputPath = transformMultiple ? outputPath + 'go/' : outputPath;


if (!fs.existsSync(jsOutputPath)) {
  fs.mkdirSync(jsOutputPath);
} else {
  rimraf.sync(jsOutputPath);
}

if (!fs.existsSync(goOutputPath)) {
  fs.mkdirSync(goOutputPath);
} else {
  rimraf.sync(goOutputPath);
}

function transformToGRPCWeb(inputPath: string) {
  return cp.spawnSync(
      'protoc', [
      `--proto_path=${sourceRoot}`,
      `--js_out=import_style=commonjs:${jsOutputPath}`,
      `--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${jsOutputPath}`,
      inputPath
    ], {cwd: sourceRoot}
  );  
}

function transformToGo(inputPath: string) {
  return cp.spawnSync(
      'protoc', [
      `--proto_path=${sourceRoot}`,
      //`--go_out=import_style=commonjs:${goOutputPath}`,
      `--go_out=plugins=grpc:${goOutputPath}`,
      inputPath
    ], {cwd: sourceRoot}
  );  
}


function reportError(process: cp.SpawnSyncReturns<Buffer>, fileName: string) {
  try {
    if (process.status !== 0) {
      console.log("Failed while converting file " + fileName);
      console.log('-------------------------------------------------------------');
      console.log(process.stderr.toString('utf8'));
      console.log('-------------------------------------------------------------');
      console.log('\n\n\n');
    }
  } catch (e) {
    console.log("Fatal error while converting file " + fileName);
    console.log(e);
    console.log('-------------------------------------------------------------');
    return;
  }
}

for (let i = 0; i< filesToTransform.length; i++){
  const filePath = filesToTransform[i];
  if (doGoTransform) {
    reportError(transformToGo(filePath), filePath);
  }
  if (doGrpcWebTransform) {
    reportError(transformToGRPCWeb(filePath), filePath);
  }
}
