import prompts from 'prompts';
import os from 'os';
import chalk from 'chalk';

const entryQuestion:Array<prompts.PromptObject> = [
  {
    type: 'select',
    name: 'action',
    message: 'Select one of the action to continue',
    choices: [
      {title: 'check', value: 'check', description: 'showcase cli status or current install game version or server status'},
      {title: 'download', value: 'download', description: 'download game or editor or server'},
      {title: 'update', value: 'update', description: 'update the game and editor and server'},
      {title: 'plugin', value: 'plugin', description: 'to the plugin manager command set'},
      {title: 'about', value: 'about', description: 'show the info about CLI tools'},
    ]
  },
];

const checkType:Array<prompts.PromptObject> = [

]


async function check() {
  
}

async function about() {
  console.log(chalk.white("OS: ") + os.type);
  console.log(chalk.white("Release: ") + os.release);
  console.log(chalk.white("Platform: ") + os.platform);
  console.log(chalk.white("CLI Version: ") + process.env.npm_package_version);
}

async function command() {
  let response:prompts.Answers<string> = await prompts(entryQuestion);
  if(response['action'] == 'check') await check();
  if(response['action'] == 'about') await about();
}


command();
