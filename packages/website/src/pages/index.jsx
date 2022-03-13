import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import { array } from 'runty';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const opts = {
  fns: {
    link: ([label, url]) => (<Link to={useBaseUrl(url)} key={`${url}/${label}`}>{label}</Link>)
  }
};

const features = [
  {
    title: 'Simple, but powerful',
    description: `
      Runty's {$link(template syntax,docs/syntax)} is simple and easy to learn,
      but powerful enough to handle almost any complex string formatting needs.
    `
  },
  {
    title: 'Built to be extended',
    description: `
      Define your own {$link(custom functions,docs/custom-fns)} or
      try {$link(some of ours,docs/fns)}!
      Use runty as the foundation for your project's string formatting engine.
    `,
  },
  {
    title: 'Bundle-bloat friendly',
    description: `
      Small, tree-shakeable library with zero dependencies.
    `,
    extra: <>
      <p>
        <strong>Runty engine only:</strong> (estimated)<br />
        10.1kB / 4.11kB minified / 1.77kB min+gzip
      </p>
      <p>
        <strong>Runty with fns standard library:</strong> (estimated)<br />
        15.4kB / 6.55kB minified / 2.48kB min+gzip
      </p>
    </>
  },
  {
    title: 'Parse once, execute multiple times',
    description: `
      Templates are parsed and compiled into re-usable functions.
    `,
  },
  {
    title: 'Optional Array output',
    description:`
      Drop React components in the middle of a string —
      or use it for fine-grained control of the stringification of your template.
    `,
  },
  {
    title: 'TypeScript-friendly',
    description: `
      Built with TypeScript, so it comes with types!
    `,
  },
];

function Feature({ extra, title, description }) {
  const desc = array(description, opts)();
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{desc}</p>
      {extra}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description="Extensible conditional string templates.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl('img/logo.svg')} className="logo" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--info button--lg"
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
            <Link
              className="button button--info button--lg"
              to={useBaseUrl('demo/')}
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
