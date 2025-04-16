
import { exec } from 'child_process';
import chalk from 'chalk';

export async function runTest(filePath: string, testName?: string): Promise<{ passed: boolean; output: string }> {
  
  const test = testName
    ? `jest ${filePath} -t="${testName}" --verbose`
    : `jest ${filePath} --verbose`;

  return new Promise((resolve) => {
    exec(test, (error, stdout, stderr) => {

      if (error) {
        console.log(chalk.red('❌ Failure'));
        console.log(chalk.red(stderr));
        return resolve({ passed: false, output: stdout });
      }

      console.log(chalk.green('✅ Success'));
      console.log(chalk.green(stderr));
      resolve({ passed: true, output: stdout });
    });
  });
}