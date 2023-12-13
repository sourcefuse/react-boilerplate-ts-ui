/* eslint-env node */
import dotenv from 'dotenv';
import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import yargs from 'yargs';

// Get the directory name and filename
const currentDir = dirname(fileURLToPath(import.meta.url));
const envFilePath = path.join(currentDir, '.env');

try {
  // Read the environment variables from .env file
  const envFile = fs.readFileSync(envFilePath);
  const envVariables = dotenv.parse(envFile);

  // Ensure required environment variables are present
  const requiredEnvVars = ['CLIENT_ID', 'APP_API_BASE_URL']; // Load from a config file for flexibility
  for (const varName of requiredEnvVars) {
    if (!(varName in envVariables)) {
      handleError(`Required environment variable "${varName}" not found.`);
    }
  }

  // Read the command line arguments
  const argv = yargs(process.argv).argv;
  const {templateFileName, outConfigPath, configFileName = 'config.json'} = argv;

  // Validate and construct file paths
  if (!templateFileName || !outConfigPath) {
    handleError(`Missing required command line arguments.`);
  }

  const templateFilePath = path.join(currentDir, templateFileName);
  const outConfigFilePath = path.join(outConfigPath, configFileName);
  const currentConfigFilePath = path.join(currentDir, configFileName);

  // Check if template file exists
  if (!fs.existsSync(templateFilePath)) {
    handleError(`Template file "${templateFileName}" does not exist.`);
  }

  // Read the template file
  const templateData = fs.readFileSync(templateFilePath, 'utf-8');

  // Replace the placeholders with environment variables
  const substitutedData = templateData.replace(/\$(\w+)/g, (_, key) => {
    return envVariables[key] || '';
  });

  // Write the substituted data to config.json
  try {
    fs.writeFileSync(currentConfigFilePath, substitutedData, 'utf-8');
    // eslint-disable-next-line no-console
    console.log('Configuration file written in current directory.'); // NOSONAR

    // Copy config.json to the public directory
    try {
      fs.copyFileSync(currentConfigFilePath, outConfigFilePath);
      // eslint-disable-next-line no-console
      console.log('Configuration file copied to public directory.'); // NOSONAR
    } catch (copyError) {
      handleError(`Error copying config file: ${copyError.message}`);
    }
  } catch (writeError) {
    handleError(`Error writing config file: ${writeError.message}`);
  }
} catch (error) {
  handleError(`An error occurred: ${error.message}`);
}

function handleError(message) {
  console.error(message); // NOSONAR
  process.exit(1);
}
