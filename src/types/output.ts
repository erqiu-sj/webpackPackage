/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 12:25:44
 * @LastEditTime: 2021-08-15 13:02:05
 * @LastEditors: 邱狮杰
 * @Description: 告知webpack如何向硬盘写入编译文件，可以有多个entry起点，但只能指定一个output配置
 * @FilePath: /webpackPackage/src/types/output.ts
 * @email: 1695415918@qq.com
 */
export interface outputTypes {
  filename: string;
  path?: string;
  // 如果在编译时，不知道最终输入文件的publicPath是什么地址，可以将其留空，并且在运行时通过入口起点文件的__webpack_public_path__ = xxx 来动态设置
  publicPath?: string;
  chunkFilename?: string; // 一般是用来异步加载和publicPath配合
  libary?: string; // define package name
  libaryTarget?: "umd" | "commonjs" | "amd" | string; // package format
}

export interface outputResult {
  output: outputTypes;
}
