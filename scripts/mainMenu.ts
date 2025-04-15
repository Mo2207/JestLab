
import inquirer from 'inquirer';
import chalk from 'chalk';
import { runTest } from './runTest';
import { buttonMenu } from './buttonMenu';
import { inputMenu } from './InputMenu';

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
            { name: '⌨️ Input Tests', value: 'input' },
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
      await runTest('_tests_');
    }

    // GO TO BUTTON MENU
    if (answers.choice === 'button') {
      await buttonMenu();
    }

    // GO TO INPUT MENU
    if (answers.choice === 'input') {
      await inputMenu();
    }
  }
}

mainMenu();
