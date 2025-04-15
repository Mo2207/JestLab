
import inquirer from 'inquirer';
import { mainMenu } from './mainMenu';
import { runTest } from './runTest';

export async function buttonMenu() {
  let keepGoing = true;

  while (keepGoing) {
    const { choice } = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: '🔘 Button Tests',
          choices: [
            { name: 'Run all button tests', value: 'all' },
            { name: 'Run render test', value: 'Render test' },
            { name: 'Run click test', value: 'Clitck test' },
            { name: 'Run disabled test', value: 'Disabled test' },
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

    // RUN ALL BUTTON TESTS
    if (choice === 'all') {
      await runTest('_tests_/Button.test.tsx');
    }

    // RUN RENDER TEST
    if (choice === 'Render test') {
      await runTest('_tests_/Button.test.tsx -t="Render test"');
    }

    // RUN CLICK TEST
    if (choice === 'Click test') {
      await runTest('_tests_/Button.test.tsx -t="Click test"');
    }

    // DISABLED TEST
    if (choice === 'Disabled test') {
      await runTest('_tests_/Button.test.tsx -t="Disabled test"');
    }
  }
}
