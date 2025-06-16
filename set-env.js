// const fs = require('fs');
// const path = './src/environments/environment.prod.ts';

// const file = fs.readFileSync(path, 'utf8');
// const result = file.replace('TMDB_API_KEY_FROM_ENV', process.env.TMDB_API_KEY);

// fs.writeFileSync(path, result);

const fs = require('fs');
const envPath = './src/environments/environment.prod.ts';

const content = `
export const environment = {
  production: true,
  tmdbApiKey: '${process.env.TMDB_API_KEY}'
};
`;

fs.writeFileSync(envPath, content);
console.log(`✅ Created ${envPath}`);

