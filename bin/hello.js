const chalk = require('chalk')
const pkg = require('../package.json')

console.log(`
${chalk.yellow('Yo, 👋🏽')}
Thanks for checking out ${chalk.yellow(pkg.name)}!
To get you going really quickly this project includes a setup step.
${chalk.yellow.bold('yarn setup')} automates the following steps for you:
  - connects you to your Contentful space
  - generates .env files
  - imports ${chalk.green(
    'a predefined content model'
  )} along with sample content
When this is done run:
${chalk.yellow.bold(
  'yarn start'
)} to start a development environment at ${chalk.green('localhost:8000')} or

${chalk.yellow.bold(
  'yarn build'
)} to create a production ready static site in ${chalk.green('./public')}
For further information check the readme of the project
(https://github.com/arturoalviar/gatsby-contentful-starter-console-ui)
`)
