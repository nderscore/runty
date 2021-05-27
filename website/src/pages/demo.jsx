import React, { useEffect, useMemo, useRef } from 'react';
import { fns, runty } from 'runty';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './demo.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePersistState } from '../hooks/use-persist-state';

const defaultTemplate = '{%track?{$pl(%track,2,0)}. }{%artist?{%artist} - }{%title}{%album? ({%album})} [{$pl(%minutes,2,0)}:{$pl(%seconds,2,0)}]';

const defaultValues = `{
  // "album": "Running With Scissors", // uncomment this and see how the result changes
  "artist": "'Weird Al' Yankovic",
  "minutes": 11,
  "title": "Albuquerque",
  "seconds": 5,
  "track": 11
}`;

const errorStyles = {
  color: 'var(--ifm-color-danger)',
};

const inputStyles = {
  backgroundColor: 'var(--ifm-pre-background)',
  borderRadius: 'var(--ifm-pre-border-radius)',
  border: 0,
  color: 'var(--ifm-pre-color)',
  fontFamily: 'var(--ifm-font-family-monospace)',
  fontSize: 'var(--ifm-code-font-size)',
  lineHeight: 'var(--ifm-pre-line-height)',
  marginBottom: 'var(--ifm-spacing-vertical)',
  padding: 'var(--ifm-pre-padding)',
  width: '100%',
};

const runt = runty({ fns });

const Demo = () => {
  const templateRef = useRef();
  const valuesRef = useRef();
  const [templateString, setTemplate] = usePersistState('t', defaultTemplate);
  const [valueString, setValues] = usePersistState('v', defaultValues);
  const initialTemplate = useRef(templateString).current;
  const initialValues = useRef(valueString).current

  const [template, templateError] = useMemo(() => {
    try {
      return [runt(templateString)];
    } catch (e) {
      return [, e];
    }
  }, [templateString]);

  const [values, valueError] = useMemo(() => {
    try {
      return [JSON.parse(valueString.replace(/\/\/.*$/gm, ''))]
    } catch (e) {
      return [{}, e];
    }
  }, [valueString]);

  const result = useMemo(() => {
    return template && template(values) || '';
  }, [template, values]);

  useEffect(() => {
    templateRef.current.value = initialTemplate;
    valuesRef.current.value = initialValues;
  }, [initialTemplate, initialValues]);

  return (
    <main className={clsx('container', styles.main)}>
      <h1>Demo</h1>
      <p>
        Try out runty live in your browser. All of the <Link to={useBaseUrl('docs/fns')}>standard library fns</Link> are available on this demo page.
      </p>
      <p>
        The variable dictionary input supports JSON syntax and <code>//</code> for line comments.
      </p>
      <div>
        <h3>Template</h3>
        <textarea
          className={styles.input}
          onInput={({ target }) => setTemplate(target.value)}
          ref={templateRef}
          rows="1"
        />
        {templateError && <p className={styles.error}>{templateError.message}</p>}
      </div>
      <div>
        <h3>Variable Dictionary</h3>
        <textarea
          className={styles.input}
          onInput={({ target }) => setValues(target.value)}
          ref={valuesRef}
          rows="10"
        />
        {valueError && <p className={styles.error}>{valueError.message}</p>}
      </div>
      <h3>Result</h3>
      <pre>
        {result}
      </pre>
    </main>
  );
};

const DemoPage = () => {
  return (
    <Layout title="Demo">
      <Demo />
    </Layout>
  );
};

export default DemoPage;
