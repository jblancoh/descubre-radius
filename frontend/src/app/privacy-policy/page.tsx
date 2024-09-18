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
      <Paragraph>This document constitutes the Privacy Notice for the purposes of the Federal Law on the Protection of Personal Data Held by Private Parties (the “LFPDP”) and the provisions that stem from it or relate to it. This Privacy Notice applies to the personal information collected about the holder by LEE & MILLER, S.C. (hereinafter referred to as “RADIUS”) located at Av. Junco de La Vega No. Ext. 108-B, Col. Roma, Monterrey, Nuevo León, C.P. 64700, in its capacity as Responsible Party. This Privacy Notice has the following terms and conditions:</Paragraph>
      
      <Subtitle>1. DEFINED TERMS.</Subtitle>
      <Paragraph>For the purposes of this Privacy Notice, the following terms shall have the following meanings, provided that unless defined otherwise in this Privacy Notice, the terms used herein that are not defined will have the meanings attributed to them in the LFPDP:</Paragraph>
      <Paragraph><strong>{"Personal Data"}</strong> Any information concerning an identified or identifiable natural person.</Paragraph>
      <Paragraph><strong>{"ARCO Rights"}</strong> Refers to the rights of access, rectification, cancellation, and opposition, which in accordance with the provisions of the LFPDP and subject to the exceptions established therein and in this Privacy Notice, each Holder has concerning the Personal Data collected by {"RADIUS"} and/or its Data Processors, as described below:</Paragraph>
      <Paragraph><strong>{"Right of Access"}</strong> The right of the Holder to know about the Personal Data related to them held by {"RADIUS"} or its Data Processors, as well as to whom they have been shared and for what purpose. Download the Access Right request.</Paragraph>
      <Paragraph><strong>{"Right to Rectification"}</strong> Each Holder has the right to have their Personal Data rectified when it is inaccurate or incomplete.</Paragraph>
      <Paragraph><strong>{"Right of Cancellation"}</strong> Each Holder has the right to request at any time that their Personal Data be deleted, which will occur once the blocking period has elapsed. The blocking implies identifying and preserving the Personal Data once the purpose for which it was collected has been fulfilled, aiming to determine possible liabilities related to its processing, until the legal or contractual statute of limitations for these has passed. During this period, their Personal Data will not be subject to processing, and after this period, it will be canceled from the corresponding database or file. Once the corresponding data is canceled, {"RADIUS"} will notify the Holder accordingly. If the Personal Data has been transmitted before the rectification or cancellation date and is still being processed by third parties, {"RADIUS"} will inform the third party in question of the rectification or cancellation request so that they can also proceed with it.</Paragraph>
      <Paragraph><strong>{"Right of Opposition"}</strong> The Holder has the right to request at any time, whenever they have a legitimate cause, that {"RADIUS"} stop processing their Personal Data.</Paragraph>
      <Paragraph><strong>{"Responsible Party"}</strong> Refers to the natural or legal person who decides on the processing of the Holder's Personal Data, in this case, LEE & MILLER, S.C.</Paragraph>
      <Paragraph><strong>{"Data Processor"}</strong> Refers to the natural or legal person who, alone or jointly with others, processes Personal Data on behalf of the Responsible Party.</Paragraph>
      <Paragraph><strong>{"Holder"}</strong> Refers to the natural person who is the owner of the Personal Data, or authorized to provide Personal Data of a third party in accordance with applicable laws, who provides such Personal Data to the Responsible Party.</Paragraph>

      <Subtitle>2. HOLDER'S CONSENT.</Subtitle>
      <Paragraph>For the purposes of the LFPDP, particularly its Article 17, the Holder states (i) that this Privacy Notice has been made known to them by the Responsible Party, (ii) that they have read, understood, and agreed to the terms stated in this Privacy Notice, thereby granting their consent for the processing of their Personal Data for the purposes of the LFPDP and other applicable legislation. In the event that the collected Personal Data includes sensitive or financial Personal Data, by signing the corresponding contract, whether in printed format or using electronic means, the corresponding processes for obtaining consent will constitute the Holder's express consent under the second paragraph of Article 8 of the LFPDP and other applicable legislation and (iii) that they grant their consent for LEE & MILLER, S.C. or its Data Processors to transfer Personal Data to national or foreign third parties, understanding that the processing that such third parties carry out on their Personal Data must comply with the provisions established in this Privacy Notice.</Paragraph>
      <Paragraph>If the Holder does not oppose the terms of this Privacy Notice within the following 30 days after it has been made available to them, it will be considered agreed and consented to its content, according to the third paragraph of Article 8 of the LFPDP. The Holder's consent may be revoked at any time without retroactive effects, in the terms and according to the procedures established later for this purpose in this Privacy Notice.</Paragraph>     

      <Subtitle>3. PERSONAL DATA WE COLLECT.</Subtitle>
      <Paragraph><strong>{"RADIUS"}</strong> may collect personal data from the Holder through direct and/or personal delivery by any means of contact between the Holder and {"RADIUS"} or its Data Processors. It may also collect personal data indirectly through publicly available sources and other market sources.</Paragraph>
      <Paragraph>{"RADIUS"} collects and processes identification, financial and/or asset, academic, and employment Personal Data, as well as data related to consumption and browsing preferences when using the web services we provide.</Paragraph>
      <Paragraph>We collect data when browsing the websites and web pages of LEE & MILLER, S.C. The automatic data capture tools used by LEE & MILLER, S.C. on its website include cookies, web beacons, and links in emails.</Paragraph>
      <Paragraph><strong>Use of Cookies.</strong> – The proper functioning of LEE & MILLER, S.C.'s sites and those of its Data Processors requires enabling {"cookies"} in your Internet browser. Cookies are small data files transferred by the website to the hard drive of your computer when you browse the site. Cookies can be session or permanent. Session cookies do not remain on your computer after you close your browser session, while permanent cookies stay on the computers until they are deleted or expire. You can adjust your browser preferences to accept or reject cookies. Disabling cookies may disable various functions of LEE & MILLER, S.C.'s websites, or they may not display correctly.</Paragraph>
      <Paragraph><strong>Use of Web Beacons</strong> (also known as Internet tags, pixel tags, and clear GIFs).- LEE & MILLER, S.C. may use web beacons on its websites and in HTML emails, either alone or in combination with cookies, to collect information about the use of the websites and your interaction with the email.</Paragraph>
      <Paragraph><strong>Links in LEE & MILLER, S.C. Emails.</strong>- Emails that include links allow LEE & MILLER, S.C. to know if you activated that link and visited the destination webpage, and this information may be included in your profile. If you prefer that LEE & MILLER, S.C. does not collect information about your interaction with those links, you may choose to modify the format of LEE & MILLER, S.C.'s communications or may ignore the link and not access its content.</Paragraph>
      <Paragraph>Only for the case of job applicants and employees, sensitive data regarding health and origin are requested.</Paragraph>
      <Paragraph>The Holder's Personal Data are collected and processed by the Responsible Party or its Data Processors to enable the Holder to carry out the following activities with the Responsible Party:</Paragraph>

      <Subtitle>4. PURPOSE OF PERSONAL DATA.</Subtitle>
      <Paragraph><strong>PRIMARY PURPOSES.</strong> {"RADIUS"} will process the Holder's personal data to carry out activities and management focused on fulfilling obligations arising from any legal and commercial relationship established due to the provision of our services; invoicing; collections; credit; customer service; granting guarantees; managing value-added services and content; administering applications and websites; managing domains, email accounts through the {"RADIUS"} mail service; contacting the customer; and providing, changing, or canceling the services requested by the Holder, conducting studies on demographic data, interests, and behaviors of its clients, consumers, suppliers, and other third parties with whom it interacts, conducting market and consumption studies to acquire and offer personalized products and services, preparing internal statistics indicating the services and products most appreciated by the different segments of its clients, consumers, suppliers, and other users of the services provided by {"RADIUS"}, verifying copyright; managing domains; managing prizes; maintaining a record of operations and information reviewed in the various sections of the services provided by {"RADIUS"} and collected through automatic data capture tools; controlling physical and logical access to the premises and systems of {"RADIUS"}; and fulfilling all obligations imposed by laws, regulations, and official provisions related to the activities of {"RADIUS"}.</Paragraph>
      <Paragraph><strong>SECONDARY PURPOSES.</strong> In addition, {"RADIUS"} may process the Holder's Personal Data to carry out activities related to commercial prospecting and to promote products and services from {"RADIUS"} and/or its affiliates, if the Holder consents to the treatment of their Personal Data for this purpose.</Paragraph>
      <Paragraph>Both primary and secondary purposes will be the basis for the processing of the Holder's Personal Data. In any case, the Holder may express their opposition to the processing of their Personal Data for secondary purposes. </Paragraph>

      <Subtitle>5. PERSONAL DATA TRANSFER.</Subtitle>
      <Paragraph>The Responsible Party may transfer the Holder's Personal Data to its Data Processors to comply with the purposes set out in this Privacy Notice. The Holder expressly consents to such transfers. The Responsible Party will inform the Holder of any transfer of their Personal Data outside of Mexico. If you do not wish for your Personal Data to be transferred, you must communicate this in accordance with the procedures established later in this Privacy Notice.</Paragraph>
      <Paragraph>Additionally, {"RADIUS"} may transfer the Holder's Personal Data to third parties in the following cases:</Paragraph>
      <Paragraph>(i) When required by applicable law or a competent authority;</Paragraph>
      <Paragraph>(ii) When necessary to comply with contractual obligations undertaken by the Responsible Party with the Holder;</Paragraph>
      <Paragraph>(iii) When the transfer is necessary to protect the interests of the Responsible Party or of the Holder;</Paragraph>
      <Paragraph>(iv) When the transfer is for purposes that do not violate applicable law.</Paragraph>
      
      <Subtitle>6. HOLDER'S RIGHTS.</Subtitle>
      <Paragraph>In accordance with the LFPDP, the Holder has the right to access, rectify, cancel, or oppose the processing of their Personal Data. To exercise such rights, the Holder must submit their request via email to the following address: <a href="mailto:info@radius.com">info@radius.com</a>, indicating the following information:</Paragraph>
      <Paragraph>1. Name of the Holder.</Paragraph>
      <Paragraph>2. Description of the Personal Data for which the request is made.</Paragraph>
      <Paragraph>3. Nature of the request (access, rectification, cancellation, or opposition).</Paragraph>
      <Paragraph>4. Any additional information that facilitates the processing of the request.</Paragraph>
      <Paragraph>The request will be processed within a period of 20 working days from receipt of the request, informing the Holder of the response via email. The procedure to address requests for ARCO Rights will be available at the email address mentioned above.</Paragraph>
      <Paragraph>As a precautionary measure, the Holder must prove their identity, whether by presenting an official identification document or providing a digital signature.</Paragraph>

      <Subtitle>7. CHANGES TO THIS PRIVACY NOTICE.</Subtitle>
      <Paragraph>{"RADIUS"} reserves the right to make modifications or updates to this Privacy Notice at any time, informing the Holder through the website of any changes. The Holder will be notified of any changes by posting the updated Privacy Notice on the website of {"RADIUS"}.</Paragraph>
      <Paragraph>This Privacy Notice is effective from the date of publication.</Paragraph>
      
      <Subtitle>8. CONTACT.</Subtitle>
      <Paragraph>If you have any questions about this Privacy Notice or the way we handle your Personal Data, please contact us at:</Paragraph>
      <Paragraph>Email: <a href="mailto:info@radius.com">info@radius.com</a></Paragraph>
      <Paragraph>Phone: +52 (81) 1938-8200</Paragraph>
    </div>
  );
};

export default PrivacyPolicy;
