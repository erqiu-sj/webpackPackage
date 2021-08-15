/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 14:04:57
 * @LastEditTime: 2021-08-15 14:11:39
 * @LastEditors: 邱狮杰
 * @Description: desc
 * @FilePath: /webpackPackage/src/index.d.ts
 * @email: 1695415918@qq.com
 */
import { devServerResult, devServerTypes } from "./types/devServer";
import { entryResult, entryTypes } from "./types/entry";
import { loaderResultTypes, loaderTypes } from "./types/loader";
import { outputResult, outputTypes } from "./types/output";
import { resolveTypes, resolveResult } from "./types/resolve";
import { createDevServer } from "./core/createDevServer";
import { createEntry } from "./core/createEntry";
import { createLoader } from "./core/createLoader";
import { createOutput } from "./core/createOutput";
import { createResolve } from "./core/createResolve";

export declare function createDevServer(
  options: devServerTypes
): devServerResult;

export declare function createEntry(options: entryTypes): entryResult;
export declare function createLoader<O extends object>(
  loaderList: loaderTypes<O>[],
  oneOf?: boolean | undefined
): loaderResultTypes<O>;

export declare function createOutput(options: outputTypes): outputResult;

export declare function createResolve(
  options?: resolveTypes | undefined
): resolveResult;
