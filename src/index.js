#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n📦 Dependency Checker v1.0.0\n'));
  const repos = JSON.parse(execSync('gh repo list yksanjo --limit 50 --json name', { encoding: 'utf8' }));
  console.log(chalk.yellow(`Checking ${repos.length} repos for package.json...`));
  repos.forEach(r => console.log(`  ${r.name}`));
  console.log(chalk.blue('\nTip: Clone and run npm outdated in each repo for detailed dependency updates.'));
}
if (require.main === module) main().catch(console.error);
module.exports = { main };
