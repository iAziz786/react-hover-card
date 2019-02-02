const path = require("path")
const resolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")
const babel = require("rollup-plugin-babel")

const extensions = [".js", ".jsx", ".ts", ".tsx", ".ejs"]

module.exports = {
  input: path.join(__dirname, "src", "index.tsx"),
  output: {
    dir: "dist",
    exports: "named",
    format: "umd",
    globals: { react: "React", "styled-components": "styled" },
    name: "HoverCard"
  },
  external: ["react", "styled-components"],
  plugins: [
    resolve({
      extensions
    }),
    babel({
      extensions
    }),
    commonjs()
  ]
}
