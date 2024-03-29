/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*.css"],
  server: "./server/index.ts",
  watchPaths: ["./server/**/*.ts"],
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["worker"],
  // serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverNodeBuiltinsPolyfill: { modules: {} },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};
