
import { exec } from 'child_process';
import chalk from 'chalk';

export async function runTest(filePath: string, testName?: string): Promise<string> {
  
  const test = testName
    ? `jest ${filePath} -t="${testName}" --verbose`
    : `jest ${filePath} --verbose`;

  return new Promise<string>((resolve, reject) => {
    exec(test, (error, stdout, stderr) => {

      if (stderr.includes('PASS')) {
        console.log(chalk.green('✅ Success'));
        console.log(chalk.green(stderr));
      }
      if (error) {
        console.log(chalk.red('❌ Failure'));
        console.log(chalk.red(stderr || error.message));
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }  
    });
  });
}