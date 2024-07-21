import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env');

const setEnvVariable = (filePath, key, value) => {
    let data = readFileSync(filePath, 'utf8');
    const envVarRegex = new RegExp(`^${key}=.*$`, 'm');

    if (envVarRegex.test(data)) {
        data = data.replace(envVarRegex, `${key}=${value}`);
    } else {
        data += `\n${key}=${value}`;
    }

    writeFileSync(filePath, data, 'utf8');
};

const requiredEnvVar = 'VITE_MODE';
const newValue = 'dev';

setEnvVariable(envPath, requiredEnvVar, newValue);

console.log(`Environment variable ${requiredEnvVar} set to ${newValue}`);