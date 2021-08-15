/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 12:58:44
 * @LastEditTime: 2021-08-15 13:17:15
 * @LastEditors: 邱狮杰
 * @Description:  createOutput
 * @FilePath: /webpackPackage/src/core/createOutput.ts
 * @email: 1695415918@qq.com
 */

import { outputTypes, outputResult } from "../types/output";

export function createOutput(options: outputTypes): outputResult {
  return {
    output: {
      ...options,
    },
  };
}
