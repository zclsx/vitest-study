// 接口
// import { readFileSync } from "fs";
export interface FileReader {
  read(filePath: string): string;
}

export function readAndProcessFile(
  filePath: string,
  fileReader: FileReader
): string {
  //原本是用fs模块中，readFileSync(filePath, {encoding: "utf-8"});
  //下面是依赖注入的方式:这样就不用强依赖于fs模块了
  const content: string = fileReader.read(filePath);
  // 在实际的场景下可能 process 的过程会更复杂一点
  return content + "-> test unit";
}
