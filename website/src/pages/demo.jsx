import React, { useEffect, useMemo, useRef } from 'react';
import { fns, runty } from 'runty';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import debounce from 'lodash/debounce';
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

const containerStyles = {
  paddingTop: 'var(--ifm-spacing-vertical)',
};

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
  const [templateString, _setTemplate] = usePersistState('t', defaultTemplate);
  const [valueString, _setValues] = usePersistState('v', defaultValues);
  const initialTemplate = useRef(templateString).current;
  const initialValues = useRef(valueString).current
  const setTemplate = useMemo(() => debounce(_setTemplate, 300), [_setTemplate]);
  const setValues = useMemo(() => debounce(_setValues, 300), [_setValues]);

  const [template, templateError] = useMemo(() => {
    try {
      return [runt(templateString)];
    } catch (e) {
      return [, e];
    }
  });

  const [values, valueError] = useMemo(() => {
    try {
      return [JSON.parse(valueString.replace(/\/\/.*$/gm, ''))]
    } catch (e) {
      return [{}, e];
    }
  });

  const result = useMemo(() => {
    return template && values && template(values) || '';
  }, [template, values]);

  useEffect(() => {
    templateRef.current.value = initialTemplate;
    valuesRef.current.value = initialValues;
  }, [initialTemplate, initialValues]);

  return (
    <div className="container" style={containerStyles}>
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
          onInput={({ target }) => setTemplate(target.value)}
          ref={templateRef}
          rows="1"
          style={inputStyles}
        />
        {templateError && <p style={errorStyles}>{templateError.message}</p>}
      </div>
      <div>
        <h3>Variable Dictionary</h3>
        <textarea
          onInput={({ target }) => setValues(target.value)}
          ref={valuesRef}
          rows="10"
          style={inputStyles}
        />
        {valueError && <p style={errorStyles}>{valueError.message}</p>}
      </div>
      <h3>Result</h3>
      <pre>
        {result}
      </pre>
    </div>
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
