
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
            { name: '💥 Run fail test (example)', value: 'fail-example' },
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
      await runTest('_tests_ --testPathIgnorePatterns=fail');
    }

    // GO TO BUTTON MENU
    if (answers.choice === 'button') {
      await buttonMenu();
    }

    // GO TO INPUT MENU
    if (answers.choice === 'input') {
      await inputMenu();
    }

    // FAIL TEST
    if (answers.choice === 'fail-example') {
      await runTest('_tests_/fail/ExampleFail.test.tsx');
    }

  }
}

mainMenu();
