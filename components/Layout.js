import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/css/reset.css" key="resetCss" />
      </Head>
      <Header />
      <div className="container">{props.content}</div>
      <style jsx global>{`
        html {
          font-size: 10px;
          font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3,
            Arial, メイリオ, Meiryo, sans-serif;
        }
        body {
          font-size: 1.6rem;
          line-height: 1.5;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        p {
          margin-top: 10px;
        }
      `}</style>
      <style jsx>{`
        .container {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

Layout.propTypes = {
  content: PropTypes.element.isRequired
};
