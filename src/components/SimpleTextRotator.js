import React, { useState, useEffect } from 'react';

export default function SimpleTextRotator() {
const messages = [
<>"Jim was super to work with. He had a great attitude, worked well with the team, found answers when he didn't have them, and helped release the project on one CCA revision and before an aggressive CKSD."  -- Project Manager (Automotive Ethernet Media Converter), National Instruments</>,
<>"Jim is a successful writer who can independently onboard to a new product or project and who can successfully negotiate project details with stakeholders. His peer feedback repeatedly calls out his knowledgeability and reliable competence as a writer."  -- Group Manager, National Instruments</>,
<>"He quickly and effectively catches even the most difficult to notice errors and provides excellent feedback, which saves me a great deal of turnaround time. On multiple occasions he has gone the extra mile to help the team as a whole function more efficiently. Arguably the best technical writer I have worked with."  -- Product Support Engineer, National Instruments</>,
<>"Jim is very responsive and his good communication with my team makes him very effective. Jim is very thorough in his documentation reviews. He has an eye for details and his skill level for creating documentary from scratch is remarkable."  -- Project Manager (Semikron Interface Board), National Instruments</>,
<>"Just wanted to let you know that Gloria and Howard used your SDU comparison chart for legislative planning this week & it was just what they needed. Thank for coordinating all the information and putting it into a useful format."  -- Office Manager, Office of the Attoney General, Child Support Division</>,
<>"Just wanted to praise your Project Managment skills. I think you did a great job organizing and directing us through this final project."  -- Classmate, Technical Communication, ACC</>,
<>"Thank you for all the support and help with the latest revision of e-ESM... without your abilities, thoughtfulness, filling in my gaps, and vigilance to detail, this project would have failed."  -- Fellow Writer, IBM</>,
<>"Thank you for all of your help and direction over the last few months. My transition to Team Lead would not have been successful without your help."  -- Colleague, IBM</>,
<>"Thank you for the excellent presentation you gave our department about your experience with and general knowledge about IBM strategic documentation tools. We enjoyed having you with us again and, as always, profited from your willingness to share."  -- Former Manager, IBM</>
];

const [index, setIndex] = useState(0);

useEffect(() => {
const timer = setInterval(() => {
setIndex((prev) => (prev + 1) % messages.length);
}, 7000); // 7 seconds
return () => clearInterval(timer);
}, []);

return (
<div style={{ fontSize: "1.0rem", fontWeight: "normal", textAlign: "left" }}>
{messages[index]}
</div>
);
}