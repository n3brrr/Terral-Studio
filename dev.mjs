import { dev } from 'astro';
import config from './astro.config.mjs';

const server = await dev({ config });
const port = server.address?.port ?? 4321;

console.log(`\n  http://localhost:${port}/\n`);
