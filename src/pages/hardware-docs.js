// src/pages/hardware-docs.js
import React from 'react';
import Layout from '@theme/Layout';

export default function HardwareDocs() {
return (
<Layout title="Hardware Documentation">
<div style={{ padding: '2rem' }}>
<h1>Hardware Documentation</h1>

<p><em>PXIe-8521 User Manual</em></p>
<p>This <a href="pixe-8521_um.pdf" target="_blank" rel="noopener noreferrer">hardware user manual</a> provides information for the PXIe-8521, NI’s first Automotive Ethernet PXI Express module. The manual covers installation, configuration, and basic operation, guiding the user from unpacking the kit through connecting and preparing the device for use. I authored the manual using Oxygen Author to develop structured DITA content and Adobe Illustrator to create SVG illustrations. I delivered a PDF and print specifications to the print shop for printed copies to be included in the hardware kits, and I prepared the PDF for publication on the NI website, integrating appropriate product codes and metadata.</p>

<figure style={{ textAlign: 'center' }}>
<a href="pixe-8521_um.pdf" target="_blank" rel="noopener noreferrer">
<img
  src={require('@site/static/img/8521um.png').default}
  alt="Hardware User Manual Sample Thumnbnail"
  style={{ maxWidth: '200px', height: 'auto', cursor: 'pointer' }}
  />
</a>
<figcaption style={{ marginTop: '0.3rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
View sample (PDF)
</figcaption>
</figure>

<p><em>sbRIO-9687 Specifications</em></p>
<p>The sbRIO-9687 is a universal interface board designed to be stacked with an sbRIO general purpose inverter controller (GPIC) to enable direct cable connectivity to Semikron power inverters. I collaborated with with the lead engineer and our safety/compliance team to ensure the <a href="sbrio-9687_specs.pdf" target="_blank" rel="noopener noreferrer">hardware specifications</a> were technically accurate and met all relevant regulatory standards. The content combines reused DITA topics from the CMS with new material created using Oxygen Author. The final deliverable was the PDF, which was published to the ni.com website. The document supported marketing and sales initiatives and served as a key resource for field engineers and system integrators.</p>

<figure style={{ textAlign: 'center' }}>
<a href="sbrio-9687_specs.pdf" target="_blank" rel="noopener noreferrer">
<img
  src={require('@site/static/img/9687specifications.png').default}
  alt="Hardware Specifications Sample Thumnbnail"
  style={{ maxWidth: '200px', height: 'auto', cursor: 'pointer' }}
  />
</a>
<figcaption style={{ marginTop: '0.3rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
View sample (PDF)
</figcaption>
</figure>

</div>
</Layout>
);
}