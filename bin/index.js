"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = __importDefault(require("prompts"));
const os_1 = __importDefault(require("os"));
const chalk_1 = __importDefault(require("chalk"));
const entryQuestion = [
    {
        type: 'select',
        name: 'action',
        message: 'Select one of the action to continue',
        choices: [
            { title: 'check', value: 'check', description: 'showcase cli status or current install game version or server status' },
            { title: 'download', value: 'download', description: 'download game or editor or server' },
            { title: 'update', value: 'update', description: 'update the game and editor and server' },
            { title: 'plugin', value: 'plugin', description: 'to the plugin manager command set' },
            { title: 'about', value: 'about', description: 'show the info about CLI tools' },
        ]
    },
];
const checkType = [];
function check() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function about() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.white("OS: ") + os_1.default.type);
        console.log(chalk_1.default.white("Release: ") + os_1.default.release);
        console.log(chalk_1.default.white("Platform: ") + os_1.default.platform);
        console.log(chalk_1.default.white("CLI Version: ") + process.env.npm_package_version);
    });
}
function command() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield (0, prompts_1.default)(entryQuestion);
        if (response['action'] == 'check')
            yield check();
        if (response['action'] == 'about')
            yield about();
    });
}
command();
