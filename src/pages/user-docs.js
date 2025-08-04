// src/pages/user-docs.js
import React from 'react';
import Layout from '@theme/Layout';

export default function UserDocs() {
return (
<Layout title="User Documentation">
<div style={{ padding: '2rem' }}>
<h1>User Documentation</h1>

<h2>Getting Started Guide (Excerpt)</h2>
<p>This <a href="vsms-user-sample.pdf" target="_blank" rel="noopener noreferrer">excerpt from the <em>HP TippingPoint vSMS Getting Started Guide v4.1</em></a> provides instructions for configuring the virtual client to log into the HP TippingPoint Security Management System (SMS). As an information developer at HP TippingPoint, I developed documentation to support network security professionals integrating these solutions into their environments. I created documentation for software and hardware, including intrusion prevention system (IPS) devices and the platform’s first next-generation firewall system. I authored content in FrameMaker, used Illustrator and Visio for images and diagrams, and published documents in PDF format for enterprise distribution.</p>

</div>
</Layout>
);
}