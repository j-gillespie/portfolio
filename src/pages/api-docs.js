// src/pages/api-docs.js
import React from 'react';
import Layout from '@theme/Layout';

export default function APIDocs() {
return (
<Layout title="API Documentation">
<div style={{ padding: '2rem' }}>
<h1>API Documentation</h1>

<h2>C API Reference (Excerpt)</h2>
<p>As lead technical writer for National Instruments’ automotive test hardware and driver software, I edited, updated, and maintained LabVIEW and C API reference content for NI-XNET, Automotive Diagnostic Command Set, and ECU Measurement &amp; Calibration software. These are customer-facing APIs designed for NI customers who integrate XNET-compatible interfaces into their own systems and applications.</p>

<p><a href="xnet-api-sample.pdf" target="_blank" rel="noopener noreferrer">This sample</a> is from the NI-XNET API for C programming language. The "Getting Started" topic provides information required to use Automotive Ethernet Socket API for C. The "nxIpStackCreate" topic describes a single function that enables the customer to programmatically create an IP stack independent from the limitations of the operating system’s native IP stack. Ultimately, this enables customers to use multiple XNET interfaces with the same static IP address, making ECU testing more flexible and productive.</p>

<p>The NI-XNET API reference was created in HTML and delivered in compiled HTML Help format.</p>

<figure style={{ textAlign: 'left' }}>
<a href="xnet-api-sample.pdf" target="_blank" rel="noopener noreferrer">
<img
  src={require('@site/static/img/nxIpStackCreate.png').default}
  alt="API Sample Thumnbnail"
  style={{ maxWidth: '300px', height: 'auto', cursor: 'pointer' }}
  />
</a>
<figcaption style={{ marginTop: '0.3rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
Click to view excerpt from NI-XNET C API reference (PDF)
</figcaption>
</figure>

</div>
</Layout>
);
}