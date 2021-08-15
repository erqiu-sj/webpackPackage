/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 11:37:38
 * @LastEditTime: 2021-08-15 13:40:07
 * @LastEditors: 邱狮杰
 * @Description: createLoader
 * @FilePath: /webpackPackage/src/core/createLoader.ts
 * @email: 1695415918@qq.com
 */

import { loaderResultTypes, loaderTypes } from "../types/loader";

export function createLoader<O extends object>(
  loaderList: loaderTypes<O>[],
  oneOf?: boolean
): loaderResultTypes<O> {
  return {
    module: {
      rules: oneOf ? { oneOf: [...loaderList] } : [...loaderList],
    },
  };
}
