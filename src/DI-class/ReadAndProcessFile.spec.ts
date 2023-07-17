import { it, expect, describe } from "vitest";
import { FileReader, ReadAndProcessFile } from "./ReadAndProcessFile";

describe("di - class", () => {
  // it("构造器", () => {
  //   class StubFileReader implements FileReader {
  //     read(filePath: string): string {
  //       return "zc";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile(new StubFileReader());

  //   expect(readAndProcessFile.run("./test")).toBe("zc->unit test");
  // });
  // it("属性", () => {
  //   class StubFileReader implements FileReader {
  //     read(filePath: string): string {
  //       return "zc";
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile();
  //   readAndProcessFile.fileReader = new StubFileReader();

  //   expect(readAndProcessFile.run("./test")).toBe("zc->unit test");
  // });

  it("方法", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "zc";
      }
    }

    const readAndProcessFile = new ReadAndProcessFile();
    readAndProcessFile.setFileReader(new StubFileReader());

    expect(readAndProcessFile.run("./test")).toBe("zc->unit test");
  });
});
