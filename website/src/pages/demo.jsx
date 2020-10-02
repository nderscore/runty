import React, { useEffect, useMemo, useRef, useState } from 'react';
import { fns, runty } from 'runty';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import debounce from 'lodash/debounce';
import useBaseUrl from '@docusaurus/useBaseUrl';

const initialTemplate = '{%track?{$pl(%track,2,0)}. }{%artist?{%artist} - }{%title}{%album? ({%album})} [{$pl(%minutes,2,0)}:{$pl(%seconds,2,0)}]';

const initialValues = `{
  "album": "Running With Scissors",
  "artist": "'Weird Al' Yankovic",
  "track": 11,
  "title": "Albuquerque",
  "minutes": 11,
  "seconds": 5
}`;

const containerStyles = {
  paddingTop: 'var(--ifm-spacing-vertical)',
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
  width: '100%'
};

const runt = runty({ fns });

const Demo = () => {
  const templateRef = useRef();
  const valuesRef = useRef();
  const [templateString, _setTemplate] = useState(initialTemplate);
  const [valueString, _setValues] = useState(initialValues);
  const setTemplate = useMemo(() => debounce(_setTemplate), [_setTemplate]);
  const setValues = useMemo(() => debounce(_setValues), [_setValues]);

  const [template, templateError] = useMemo(() => {
    try {
      return [runt(templateString)];
    } catch (e) {
      return [, e];
    }
  });

  const [values, valueError] = useMemo(() => {
    try {
      return [JSON.parse(valueString)]
    } catch (e) {
      return [, e];
    }
  });

  const result = useMemo(() => {
    return template && values && template(values) || '';
  }, [template, values]);

  useEffect(() => {
    templateRef.current.value = initialTemplate;
    valuesRef.current.value = initialValues;
  }, []);

  return (
    <div className="container" style={containerStyles}>
      <h1>Demo</h1>
      <p>
        Try out runty for yourself!
        All of the <Link to={useBaseUrl('docs/fns')}>standard library fns</Link> are available on this live demo page.
        Not sure where to start? 
      </p>
      <div>
        <h3>Template</h3>
        <textarea onInput={({ target }) => setTemplate(target.value)} ref={templateRef} rows="1" style={inputStyles} />
        {templateError && <div>{`Syntax Error: ${templateError.message}`}</div>}
      </div>
      <div>
        <h3>Variables</h3>
        <textarea onInput={({ target }) => setValues(target.value)} ref={valuesRef} rows="10" style={inputStyles} />
        {valueError && <div>{valueError.message}</div>}
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
