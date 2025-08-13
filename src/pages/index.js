/*import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Jim Gillespie"
      description="Technical Writing Portfolio">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
*/
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SimpleTextRotator from '../components/SimpleTextRotator';

export default function Home() {
return (
<Layout
title="Jim's Portfolio"
description="Technical Writing Portfolio"
>
<main style={{ padding: '2rem' }}>
<header>
<h1 style={{ fontSize: '2.5rem', color: '#007acc' }}>Jim Gillespie</h1>
<p style={{ fontSize: '1.00rem' }}>
Technical Writer | Information Developer | Documentation Specialist
</p>
</header>

<section style={{ marginTop: '2rem' }}>
<h2>About Me</h2>
<p>I am a technical writer based in Austin, Texas. I have 20+ years of experience creating documentation for leading technology companies like IBM Global Services, Tivoli Software, Reddwerks, AMD, TippingPoint, and National Instruments. I've also documented statewide financial systems at the Texas Comptroller of Public Accounts and a payment processing system for the Texas Office of the Attorney General.</p>

<p>My work spans a number of technical domains, from fiscal management systems and IT service management tools to supply chain management platforms, semiconductor technology, network security, and test and measurement systems.</p>
</section>

<section style={{ marginTop: '2rem' }}>
<h2>Writing Samples</h2>
<ul>
<li>
<Link to="/api-docs">API Documentation</Link>
</li>
<li>
<Link to="/user-docs">User Documentation</Link>
</li>
<li>
<Link to="/hardware-docs">Hardware Documentation</Link>
</li>
</ul>
</section>

<section style={{ marginTop: '2rem' }}>
<h2>Testimonials</h2>
<SimpleTextRotator />
</section>

</main>
</Layout>
);
}
