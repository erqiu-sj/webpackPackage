/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:18:57
 * @LastEditTime: 2021-08-15 13:29:30
 * @LastEditors: 邱狮杰
 * @Description:
 * @FilePath: /webpackPackage/src/types/entry.ts
 * @email: 1695415918@qq.com
 */

export type entryTypes = string[] | string | entryObjTypes;
export interface entryResult {
  entry: entryTypes;
}
interface entryObjTypes {
  [key: string]:
    | string
    | {
        dependOn?: string; // 当前入口所依赖的入口，它们必须在该入口被加载前被加载
        filename?: string; // 指定要输入的文件名称
        import?: string; // 启动时所需加载的模块
        libray?: string;
        runtime?: string | boolean; // 运行时chunk名字，如果设置了，就会创建一个新的运行时chunk,在webpack5.43.0后可将其设置false以避免一个新的运行时chunk
        publicPath?: string; // 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共的URL地址 === output.publichPath
      };
}
