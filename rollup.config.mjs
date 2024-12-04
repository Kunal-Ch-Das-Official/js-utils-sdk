import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.jsx",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extensions: [".css"],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
