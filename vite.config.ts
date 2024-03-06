import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import simpleVars from 'postcss-modules-values';

import tokens from '@salutejs/sdds-themes/tokens';

// console.log(tokens)

console.log(simpleVars());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        simpleVars({
          variables: () => {
            console.log('wtf');
            // throw new Error('www')
            return { textAccent: tokens.textAccent };
          },
          onVariables(variables: any) {
            console.log('CSS Variables');
            console.log(JSON.stringify(variables, null, 2));
          },
          unknown(node: any, name: any, result: any) {
            node.warn(result, 'Unknown variable ' + name);
          },
        }),
      ],
    },
  },
});
