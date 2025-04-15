
import inquirer from 'inquirer';
import { mainMenu } from './mainMenu';
import { runTest } from './runTest';

export async function inputMenu() {
  let keepGoing = true;

  while (keepGoing) {
    const { choice } = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: '⌨️ Input Tests',
          choices: [
            { name: 'Run all input tests', value: 'all' },
            { name: 'Run render test', value: 'Render test' },
            { name: 'Run change test', value: 'Change test' },
            { name: 'Run disabled test', value: 'Disabled test' },
            { name: 'Run placeholder test', value: 'Placeholder test' },
            { name: '⬅️ Go back', value: 'back' },
            { name: '❌ Exit', value: 'exit' }
          ]
        }
      ]);

    // EXIT
    if (choice === 'exit') {
      keepGoing = false;
      return;
    }

    // GO BACK
    if (choice === 'back') {
      return await mainMenu();
    }

    // RUN ALL INPUT TESTS
    if (choice === 'all') {
      await runTest('_tests_/Input.test.tsx');
    }

    // RUN RENDER TEST
    if (choice === 'Render test') {
      await runTest('_tests_/Input.test.tsx -t="Render test"');
    }

    // RUN CHANGE TEST
    if (choice === 'Change test') {
      await runTest('_tests_/Input.test.tsx -t="Change test"');
    }

    // RUN DISABLED TEST
    if (choice === 'Disabled test') {
      await runTest('_tests_/Input.test.tsx -t="Disabled test"');
    }

    // RUN PLACEHOLDER TEST
    if (choice === 'Placeholder test') {
      await runTest('_tests_/Input.test.tsx -t="Placeholder test"');
    }

  }
}
