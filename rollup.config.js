import nodePolyfill from "rollup-plugin-polyfill-node";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./main.js",
  output: [
    {
      file: "./dist/eslint4b.js",
      format: "umd",
      name: "ESLint",
    },
    {
      file: "./dist/eslint4b.es.js",
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    commonjs({
      requireReturnsDefault: "preferred",
    }),
    nodePolyfill(),
    json(),
  ],
};
