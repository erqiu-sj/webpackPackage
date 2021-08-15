/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:59:10
 * @LastEditTime: 2021-08-15 14:00:19
 * @LastEditors: 邱狮杰
 * @Description: createDevServer
 * @FilePath: /webpackPackage/src/core/createDevServer.ts
 * @email: 1695415918@qq.com
 */
import { devServerResult, devServerTypes } from "../types/devServer";
export function createDevServer(options: devServerTypes): devServerResult {
  return {
    devServer: {
      ...options,
    },
  };
}
