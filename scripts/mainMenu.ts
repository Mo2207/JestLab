
import inquirer from 'inquirer';
import chalk from 'chalk';
import { runTest } from './runTest';
import { buttonMenu } from './buttonMenu';

export async function mainMenu() {
  let keepGoing = true;

  while (keepGoing) {
    const answers = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Welcome to JestLab 🧪\nWhat would you like to test?',
          choices: [
            { name: '🧪 Run All Tests', value: 'all' },
            { name: '🔘 Button Tests', value: 'button' },
            { name: '❌ Exit', value: 'exit' }
          ]
        }
      ])

    // EXIT
    if (answers.choice === 'exit') {
      keepGoing = false;
      return;
    }

    // RUN ALL TESTS
    if (answers.choice === 'all') {
      console.log(chalk.cyan('Running all tests...'));
      await runTest('_tests_');
    }

    // GO TO BUTTON MENU
    if (answers.choice === 'button') {
      await buttonMenu();
    }
  }
}

mainMenu();
