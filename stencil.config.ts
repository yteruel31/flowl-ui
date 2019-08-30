import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'owl-ui',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    })
  ],
  globalStyle: 'src/styles/owl.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'demo-components', dest: 'demo-components' }
      ]
    }
  ]
};
