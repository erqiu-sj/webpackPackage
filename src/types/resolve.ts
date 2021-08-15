/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:40:42
 * @LastEditTime: 2021-08-15 13:43:04
 * @LastEditors: 邱狮杰
 * @Description: desc
 * @FilePath: /webpackPackage/src/types/resolve.ts
 * @email: 1695415918@qq.com
 */

export interface resolveTypes {
  alias?: {
    // 别名
    [key: string]: string;
  };
  extensions?: string[]; // 忽略的文件后缀
  // 解析文件模块去找哪个目录，如果当前目录没找到会向上查找
  modules?: string[];
}

export interface resolveResult {
  resolve: resolveTypes;
}
