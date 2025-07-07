const path = require("path");

/* 
  __dirname: 执行脚本所在的绝对路径，我们一般通过 build 文件夹下的脚步打包
  root: 项目根目录
*/
const root = path.resolve(__dirname, "..");

// 源代码目录
const src = path.join(root, "/src");

// 打包配置文件夹
const build = path.join(root, "/build");

// 打包输出文件夹
const dist = path.join(root, "/dist");

// 静态资源文件夹
const static = path.join(root, "/static");

const env = process.env.NODE_ENV?.trim();
const analyze = process.env.ANALYZE === "true";

const CONTEXT_PATH = "";

module.exports = {
  CONTEXT_PATH,
  PUBLIC_PATH: env === "development" ? "/" : "./",

  root,
  src,
  dist,
  static,
  build,

  env,
  analyze,
};
