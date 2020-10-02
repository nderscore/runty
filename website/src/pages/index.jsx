import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import { runty } from 'runty';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const runt = runty({
  asArray: true,
  fns: {
    link: ([label, url]) => <Link to={useBaseUrl(url)}>{label}</Link>
  }
});

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
    title: 'Optional Array output',
    description:`
      Drop React components in the middle of a string —
      or use it for fine-grained control of the stringification of your template.
    `,
  },
  {
    title: 'Parse once, execute multiple times',
    description: `
      Templates are parsed and compiled into re-usable functions.
    `,
  },
  {
    title: 'Bundle-bloat friendly',
    description: `
      Small, tree-shakeable JavaScript library with zero dependencies.
    `,
  },
];

function Feature({ title, description }) {
  const desc = runt(description)();
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{desc}</p>
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
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
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
