// src/pages/hardware-docs.js
import React from 'react';
import Layout from '@theme/Layout';

export default function HardwareDocs() {
return (
<Layout title="Hardware Documentation">
<div style={{ padding: '2rem' }}>
<h1>Hardware Documentation</h1>

<h2>PXIe-8521 User Manual</h2>
<p>This 12-page document is the <a href="pixe-8521_um.pdf">user manual</a> for the PXIe-8521 4-port, 100BASE-T1 PXI Automotive Ethernet Interface Module, NI’s first Automotive Ethernet PXI Express module. The manual covers installation, configuration, and basic operation, guiding the user from unpacking the kit through connecting and preparing the device for use. I authored the manual using Oxygen Author to develop structured DITA content and Adobe Illustrator to create SVG illustrations. I delivered a PDF and print specifications to the print shop for printed copies to be included in the hardware kits, and I prepared the PDF for publication on the NI website, integrating appropriate product codes and metadata.</p>

</div>
</Layout>
);
}