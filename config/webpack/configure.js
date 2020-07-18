const build = require('./targets/build')
const start = require('./targets/start')

module.exports = () => {
  const options = {
    ci: Boolean(process.env.CI)
  }

  switch (process.env.npm_lifecycle_event) {
    case 'build':
      return build({
        ...options,
        stats: true
      })

    case 'start':
      return start({
        ...options,
        hot: true
      })

    default:
      throw new Error('Unknown build target')
  }
}
