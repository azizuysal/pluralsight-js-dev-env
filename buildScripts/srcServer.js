import express from 'express'
import path from 'path'
import open from 'open'
import middleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

/* eslint-disable no-console */

app.use(middleware(compiler, {
  stats: 'errors-only',
  publicPath: config.output.publicPath
}))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
