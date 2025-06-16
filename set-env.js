const fs = require('fs');

const tmdbApiKey = process.env.TMDB_API_KEY || '';
if (!tmdbApiKey) {
  console.warn('WARNING: TMDB_API_KEY is not set in environment variables.');
}

const environmentDev = `
export const environment = {
  production: false,
  tmdbApiKey: '${tmdbApiKey}'
};
`;

const environmentProd = `
export const environment = {
  production: true,
  tmdbApiKey: '${tmdbApiKey}'
};
`;

const devPath = './src/environments/environment.ts';
const prodPath = './src/environments/environment.prod.ts';

// Write dev environment
fs.writeFileSync(devPath, environmentDev.trim(), { encoding: 'utf8' });
console.log(`✅ Created ${devPath}`);

// Write prod environment
fs.writeFileSync(prodPath, environmentProd.trim(), { encoding: 'utf8' });
console.log(`✅ Created ${prodPath}`);
