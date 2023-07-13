import { glob } from "glob";
import fs from "fs/promises";
import { build } from "esbuild";

//build这个方法是一个promise
// 1.获取到所有的测试脚本 *.spec.js
// 2.执行这些脚本
const files = glob.sync("*.spec.js");
// console.log(files);

for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  // console.log(fileContent);
  await runModule(fileContent + ";import {run} from './core.js';run();");
}

async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent, //文件的内容
      resolveDir: process.cwd(), //获取当前文件路径
    },
    write: false, //写入文件里，默认true，但是目前只拿对象去接收
    bundle: true, //将js spec打包到一起
    target: "esnext",
  });
  //   console.log(result);
  //   console.log(result.outputFiles[0].text);
  new Function(result.outputFiles[0].text)();
}

//import不能在函数内执行
//解决去掉import，打包器 babel / es build都可以
