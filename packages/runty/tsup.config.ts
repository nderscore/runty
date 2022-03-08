import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: ['es2020', 'node14'],
  clean: true,
  dts: true,
  sourcemap: true,
});
