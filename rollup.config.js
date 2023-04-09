import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import terser from "@rollup/plugin-terser"

import filesize from "rollup-plugin-filesize"

import packageJson from "./package.json" assert { type: "json" }

const config = [
  {
    input: "lib/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      commonjs(),
      terser(),
      filesize(),
    ],
  },
]

export default config
