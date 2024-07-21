import { readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env');

function parseEnv(filePath){
    const env = {};
    const data = readFileSync(filePath, 'utf8');
    data.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            env[key.trim()] = value.trim();
        }
    });
    return env;
};

const env = parseEnv(envPath);

const requiredEnv = 'VITE_MODE';
const requiredEnvValue = 'prod';

if (env[requiredEnv] !== requiredEnvValue) {
    console.error(`Error: Environment variable ${requiredEnv} is set to "${env[requiredEnv]}". Change to "${requiredEnvValue}" before building.`);
    process.exit(1);
}

console.log(`Environment variable ${requiredEnv} is correctly set.`);