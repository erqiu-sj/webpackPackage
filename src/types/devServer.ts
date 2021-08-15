/*
 * @Author: 邱狮杰
 * @Date: 2021-08-15 13:45:34
 * @LastEditTime: 2021-08-15 14:00:38
 * @LastEditors: 邱狮杰
 * @Description: devServer
 * @FilePath: /webpackPackage/src/types/devServer.ts
 * @email: 1695415918@qq.com
 */
type devServerWriteToDisk = (filePath: string) => boolean;
type devServerProxy =
  | {
      [key: string]: {
        target: string;
        pathRewrite?: {
          [key: string]: string;
        };
        changeOrigin?: boolean;
        secure?: boolean;
      };
    }
  | { content: string[]; target: string }[];
export interface devServerTypes {
  // 运行代码的目录
  contentBase?: string;
  // 监视运行代码的目录是否更新，更新就会重载
  watchContentBase?: true;
  // 忽略文件
  watchOptions?: {
    [key: string]: string;
  };
  // 开启gzip压缩
  compress?: boolean;
  post?: number;
  host?: string;
  // 自动打开浏览器
  open?: boolean;
  // 开启HMR功能
  hot?: boolean;
  //除了基本的启动信息之外的信息都不要log
  quiet?: boolean;
  // 不要显示启动服务器日志信息
  clientLogLevel?: boolean;
  // 如果报错不要全屏提示
  overlay?: boolean;
  // 告诉 devServer 将产生的文件写入硬盘。 写入位置为 output.path 配置的目录。
  writeToDisk?: boolean | devServerWriteToDisk;
  proxy?: devServerProxy;
}
export interface devServerResult {
  devServer: devServerTypes;
}
