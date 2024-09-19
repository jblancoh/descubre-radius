import React, { ReactNode } from 'react';

const PrivacyPolicy = () => {
  const Subtitle = ({ children }: { children: ReactNode }) => {
    return (
      <h2 className="text-xl font-bold mt-8 mb-2">{children}</h2>
    );
  };

  const Paragraph = ({ children }: { children: ReactNode }) => {
    return (
      <p className="mb-3">{children}</p>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Privacy Notice</h1>
      <Paragraph>
        This document constitutes the Privacy Notice for the purposes of the Federal Law on the Protection of Personal Data Held by Private Parties (the “LFPDP”) and the provisions that stem from it or relate to it. This Privacy Notice applies to the personal information collected about the holder by LEE & MILLER, S.C. (hereinafter referred to as “RADIUS”) located at Av. Junco de La Vega No. Ext. 108-B, Col. Roma, Monterrey, Nuevo León, C.P. 64700, in its capacity as Responsible Party. This Privacy Notice has the following terms and conditions:
      </Paragraph>
      
      <Subtitle>1. DEFINED TERMS.</Subtitle>
      <Paragraph>For the purposes of this Privacy Notice, the following terms shall have the following meanings...</Paragraph>
      <Paragraph><strong>{"Personal Data"}</strong> Any information concerning an identified or identifiable natural person.</Paragraph>
      <Paragraph><strong>{"ARCO Rights"}</strong> Refers to the rights of access, rectification, cancellation, and opposition...</Paragraph>
      <Paragraph><strong>{"Right of Access"}</strong> The right of the Holder to know about the Personal Data related to them held by {"RADIUS"}...</Paragraph>
      <Paragraph><strong>{"Right to Rectification"}</strong> Each Holder has the right to have their Personal Data rectified...</Paragraph>
      <Paragraph><strong>{"Right of Cancellation"}</strong> Each Holder has the right to request at any time that their Personal Data be deleted...</Paragraph>
      <Paragraph><strong>{"Right of Opposition"}</strong> The Holder has the right to request at any time, whenever they have a legitimate cause...</Paragraph>
      <Paragraph><strong>{"Responsible Party"}</strong> {`Refers to the natural or legal person who decides on the processing of the Holder's Personal Data...`}</Paragraph>
      <Paragraph><strong>{"Data Processor"}</strong> Refers to the natural or legal person who, alone or jointly with others, processes Personal Data on behalf of the Responsible Party...</Paragraph>
      <Paragraph><strong>{"Holder"}</strong> Refers to the natural person who is the owner of the Personal Data...</Paragraph>

      <Subtitle>{`2. HOLDER'S CONSENT.`}</Subtitle>
      <Paragraph>For the purposes of the LFPDP, particularly its Article 17, the Holder states (i) that this Privacy Notice has been made known to them by the Responsible Party...</Paragraph>
      <Paragraph>If the Holder does not oppose the terms of this Privacy Notice within the following 30 days...</Paragraph>     

      <Subtitle>3. PERSONAL DATA WE COLLECT.</Subtitle>
      <Paragraph><strong>{"RADIUS"}</strong> may collect personal data from the Holder through direct and/or personal delivery by any means of contact...</Paragraph>
      <Paragraph>{"RADIUS"} collects and processes identification, financial and/or asset, academic, and employment Personal Data...</Paragraph>
      <Paragraph>We collect data when browsing the websites and web pages of LEE & MILLER, S.C. The automatic data capture tools...</Paragraph>
      <Paragraph><strong>Use of Cookies.</strong> {`– The proper functioning of LEE & MILLER, S.C.'s sites...`}</Paragraph>
      <Paragraph><strong>Use of Web Beacons</strong>...</Paragraph>
      <Paragraph><strong>Links in LEE & MILLER, S.C. Emails.</strong>...</Paragraph>
      <Paragraph>Only for the case of job applicants and employees, sensitive data regarding health and origin are requested...</Paragraph>
      <Paragraph>{`The Holder's Personal Data are collected and processed by the Responsible Party...`}</Paragraph>

      <Subtitle>4. PURPOSE OF PERSONAL DATA.</Subtitle>
      <Paragraph><strong>PRIMARY PURPOSES.</strong> {`"RADIUS" will process the Holder's personal data to carry out activities and management...`}</Paragraph>
      <Paragraph><strong>SECONDARY PURPOSES.</strong> {`In addition, "RADIUS" may process the Holder's Personal Data to carry out activities related to commercial prospecting...`}</Paragraph>

      <Subtitle>5. PERSONAL DATA TRANSFER.</Subtitle>
      <Paragraph>{`The Responsible Party may transfer the Holder's Personal Data to its Data Processors to comply with the purposes set out in this Privacy Notice...`}</Paragraph>
      <Paragraph>{`Additionally, "RADIUS" may transfer the Holder's Personal Data to third parties in the following cases:`}</Paragraph>
      <Paragraph>(i) When required by applicable law or a competent authority...</Paragraph>
      
      <Subtitle>{`6. HOLDER'S RIGHTS.`}</Subtitle>
      <Paragraph>In accordance with the LFPDP, the Holder has the right to access, rectify, cancel, or oppose the processing of their Personal Data...</Paragraph>

      <Subtitle>7. CHANGES TO THIS PRIVACY NOTICE.</Subtitle>
      <Paragraph>{"RADIUS"} reserves the right to make modifications or updates to this Privacy Notice at any time...</Paragraph>
      <Paragraph>This Privacy Notice is effective from the date of publication: [Fecha de publicación].</Paragraph>
      
      <Subtitle>8. CONTACT.</Subtitle>
      <Paragraph>If you have any questions about this Privacy Notice or the way we handle your Personal Data, please contact us at:</Paragraph>
      <Paragraph>Email: <a href="mailto:info@radius.com">info@radius.com</a></Paragraph>
      <Paragraph>Phone: +52 (81) 1938-8200</Paragraph>

      <h1 className="text-3xl font-bold mt-10 mb-4 text-red-500">Terms of Use</h1>
      <Paragraph><strong>Effective Date: September 26, 2024</strong></Paragraph>
      <Paragraph>Welcome to the Radius USA website (the “Site”). By accessing and using our Site, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use the Site.</Paragraph>
      
      <Subtitle>1. Use of the Site</Subtitle>
      <Paragraph>You may use the Site for lawful purposes and in accordance with these Terms of Use. You agree not to:</Paragraph>
      <Paragraph>• Use the Site in any way that violates any applicable local, state, federal, or international laws or regulations.</Paragraph>
      <Paragraph>• Engage in any conduct that restricts or inhibits anyone’s use or enjoyment of the Site...</Paragraph>
      <Paragraph>• Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site...</Paragraph>

      <Subtitle>2. Intellectual Property Rights</Subtitle>
      <Paragraph>All content, features, and functionality on the Site—including text, graphics, logos, images, and software—are the exclusive property of Radius USA or its licensors...</Paragraph>

      <Subtitle>3. User Content</Subtitle>
      <Paragraph>If you submit, post, or otherwise provide content to the Site, you agree that:</Paragraph>
      <Paragraph>• You are solely responsible for the content you submit...</Paragraph>

      <Subtitle>4. Disclaimer of Warranties</Subtitle>
      <Paragraph>The information provided on this Site is for general informational purposes only...</Paragraph>

      <Subtitle>5. Limitation of Liability</Subtitle>
      <Paragraph>In no event shall Radius USA, its affiliates, or their licensors be liable for any direct, indirect, incidental, special, or consequential damages...</Paragraph>

      <Subtitle>6. Links to Third-Party Websites</Subtitle>
      <Paragraph>The Site may contain links to third-party websites that are not operated or controlled by Radius USA...</Paragraph>

      <Subtitle>7. Changes to the Terms of Use</Subtitle>
      <Paragraph>We may modify these Terms of Use from time to time at our sole discretion...</Paragraph>

      <Subtitle>8. Governing Law</Subtitle>
      <Paragraph>These Terms of Use and any disputes arising from your use of the Site shall be governed by...</Paragraph>

      <Subtitle>9. Termination</Subtitle>
      <Paragraph>We reserve the right to terminate or suspend your access to the Site...</Paragraph>

      <Subtitle>10. Contact Us</Subtitle>
      <Paragraph>If you have any questions or concerns regarding these Terms of Use, please contact us at:</Paragraph>
      <Paragraph>Radius USA</Paragraph>
      <Paragraph>Email: <a href="mailto:info@radius.com">info@radius.com</a></Paragraph>
    </div>
  );
};

export default PrivacyPolicy;

