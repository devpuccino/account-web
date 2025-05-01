import { defineConfig } from "cypress";
import webpackConfig from './cypress/webpack.config';
export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
  },
});
