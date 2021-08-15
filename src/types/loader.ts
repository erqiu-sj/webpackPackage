/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 11:21:04
 * @LastEditTime: 2021-08-15 13:34:18
 * @LastEditors: 邱狮杰
 * @Description: loader 用于对模块的源代码进行转换
 * loader可以使你在import或者"load(加载)"模块文件
 * 因此，loader专用其他构建工具中的"任务(task)"，并提供了处理前端构建步骤的得力方式.
 * loader可以将文件从不同语言转换到javascriot或将内联图像转换为数据URL。
 * loader甚至允许你在javascript文件中import css文件
 * @FilePath: /webpackPackage/src/types/loader.ts
 * @email: 1695415918@qq.com
 */

interface loaderTypesUse<O extends object> {
  loader: string;
  options?: O;
}
export interface loaderTypes<O extends object> {
  test: RegExp;
  use?: string | string[] | loaderTypesUse<O>[];
  exculude?: RegExp | string[];
  include?: string;
  enforce?: "pre" | "post" | string;
}

export interface loaderResultTypes<O extends object> {
  module: {
    rules: loaderTypes<O>[] | { oneOf: loaderTypes<O>[] };
  };
}
