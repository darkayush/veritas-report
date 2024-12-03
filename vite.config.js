import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES Module compatibility
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "generate-headers",
      closeBundle() {
        const headers = `
/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: no-referrer
  Permissions-Policy: geolocation=(), microphone=(), camera=()
`;
        fs.writeFileSync(path.resolve(__dirname, "dist/_headers"), headers);
      },
    },
  ],
});
