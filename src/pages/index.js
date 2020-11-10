import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headContent } from '../content';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headContent;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'co.act'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  );
};
