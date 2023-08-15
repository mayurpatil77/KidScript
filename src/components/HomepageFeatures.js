import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What is KidScript',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        KidScript: Where Computers Listen to Your Commands, Write code which tells computers what to do
      </>
    ),
  },
  {
    title: 'Learn KidScript',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn KidScript: Your Adventure in Talking to Computers!  Like teaching computers your language!
      </>
    ),
  },
  {
    title: 'For Parents',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Unlock coding joy with KidScript! Easy, creative, future-ready. Explore together, ignite their tech passion. Your child's coding journey begins!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
