const { argv } = require('process')
const { build } = require('esbuild')
const glob = require('glob')
const entryPoints = glob.sync('./src/index.ts')

const options = {
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints,
  minify: argv[2] === 'production',
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: 'dist',
  tsconfig: 'tsconfig.json'
}

build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})