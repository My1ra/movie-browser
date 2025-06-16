const fs = require('fs');
const path = './src/environments/environment.prod.ts';

const file = fs.readFileSync(path, 'utf8');
const result = file.replace('TMDB_API_KEY_FROM_ENV', process.env.TMDB_API_KEY);

fs.writeFileSync(path, result);
