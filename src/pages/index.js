import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Tons of helpful features',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Currencies, Settings, Saving, Upgrades, Statistics, Requirements, Achievements, and much more included!
      </>
    ),
  },
  {
    title: 'Modern Web Development',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Typescript, ESLint, and Jest testing to ensure code quality.
      </>
    ),
  },
  {
    title: 'Decoupled UI',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        UI and Game Logic are completely separated. You can use whatever frontend framework you like, or none at all!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A collection of useful scripts to help you develop incremental games!">
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
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.demo,
              )}
              to={"https://123ishatest.github.io/incremental-game-template"}>
              Demo
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
