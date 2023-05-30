/** Listens for changes in the src directory and builds the docs */

import chokidar from 'chokidar';
import { exec } from 'child_process';

// Directory to watch
const directoryPath = 'src';

// NPM command to run on file change
const npmCommand = 'npm run build';

// Initialize chokidar to watch for file changes
const watcher = chokidar.watch(directoryPath, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 200,
    pollInterval: 500
  }
});

console.log(`Watching directory: ${directoryPath}`);

// Run NPM command on file change
watcher.on('all', (event, filePath) => {
  console.log(`File ${event}: ${filePath}`);
  console.log(`Running NPM command: ${npmCommand}`);

  // Run the NPM command using child_process.exec
  exec(npmCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running NPM command: ${error.message}`);
    } else {
      console.log(stdout);
    }
  });
});

// Handle errors
watcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
});
