/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:26:48
 * @LastEditTime: 2021-08-15 13:29:34
 * @LastEditors: 邱狮杰
 * @Description: desc
 * @FilePath: /webpackPackage/src/core/createEntry.ts
 * @email: 1695415918@qq.com
 */
import { entryResult, entryTypes } from "../types/entry";

export function createEntry(options: entryTypes): entryResult {
  return {
    entry: options,
  };
}
