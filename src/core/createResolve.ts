/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:43:48
 * @LastEditTime: 2021-08-15 13:45:04
 * @LastEditors: 邱狮杰
 * @Description:  createResolve
 * @FilePath: /webpackPackage/src/core/createResolve.ts
 * @email: 1695415918@qq.com
 */
import type { resolveTypes, resolveResult } from "../types/resolve";

export function createResolve(options?: resolveTypes): resolveResult {
  return {
    resolve: {
      ...options,
    },
  };
}
