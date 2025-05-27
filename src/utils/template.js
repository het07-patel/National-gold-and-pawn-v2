import { callIconUrl, clientEmail, companyLogo, companyPhoneNo, facebookIconUrl, facebookUrl, instagramIconUrl, instagramUrl, locationIconUrl, locationUrl, WebsiteUrl } from "./environments";

export const contactUsEmail = (userName) => {
  const subject = "Thank You for Reaching Out! We're Here to Help";
  const description = html("Contact Us", contactBody(userName));
  return { subject, description };
};

export const contactDetailsReceivedEmail = (params) => {
  const subject = "We Have Received Your Details";
  const description = html("Contact Us", contactDetailReceivedBody(params));
  return { subject, description };
};

const html = (headingContent, bodyContent) => {
  return `
      <!DOCTYPE html>
      <html lang="en" style="padding: 0; margin: 0; border: 0;">
        ${header(headingContent)}
        ${bodyContent}
      </html>`;
};

const header = (heading) => {
  return `
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${heading}</title>
  </head>`;
};
const contactBody = (data) => {

  return `<body>
  <div style="
      color: #d9d9d9;
      font-family: 'Inter', Arial, sans-serif;
    ">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('https://fonts.gstatic.com/s/inter/v3/4F2vD9F5A3uOKK1Oe65GOCr5AVlpFEiD.woff2') format('woff2');
      }
    </style>
    <div
      style="
        width: 100%;
        margin: 0 auto;
        max-width: 900px;
        border-radius: 0.5rem;
        background-color: #000107;
        border: 1px solid #413c3c50;
        overflow:hidden;
      "
    >
      
      <article style="border-radius: 1rem; margin-top:2rem; text-align: center">
       <a href=${WebsiteUrl} target="_blank">
         <img
          src="${companyLogo}"
          alt="Thank you"
          title="Thank you"
          width="170px" 
          height="60px"
        />
        </a>
        <div style="max-width: 85%; padding: 1.5em; margin: auto">
          <p
            class="name"
            style="color: white; font-size: 30px; font-weight: 600; font-family: 'Inter', Arial, sans-serif;"
          >
            ${data} 🎉
          </p>

          <p style="font-family: 'Inter', Arial, sans-serif;">
            We deeply appreciate your kind words and unwavering support! It has
            been an absolute pleasure collaborating with you and being a part of
            your journey. Your trust and confidence in our work mean the world
            to us, and we are truly grateful for the opportunity to serve you.
          </p>
          <p style="font-family: 'Inter', Arial, sans-serif;">
            Your satisfaction is our greatest reward, and we look forward to
            continuing this wonderful partnership.We’re excited about the chance
            to work with you again and bring even more value to your experience.
            Thank you for choosing us!
          </p>
        </div>
      </article>

      <footer
        style="
          padding: 1em;
          margin: auto;
          text-align: center;
          background-color: #1e1e1e;
          font-family: 'Inter', Arial, sans-serif;
        "
      >
        <div style="max-width: 85%; margin: auto">
          <p>
            If you have any questions, feel free message us at
            <a
              href="mailto:${clientEmail}"
              class="green-text"
              style="text-decoration: none; color: #c2963a; font-family: 'Inter', Arial, sans-serif;"
            >
              ${clientEmail}
            </a>
            All right reserved. Update email preferences or unsubscribe.
          </p>
          <div style="text-align: center">
            <p style="display: inline-block; margin: 0">Follow Us:</p>
            <a href=${facebookUrl} style="margin-left: 3px; text-decoration: none">
              <img
               src=${facebookIconUrl}
                alt="Facebook"
                title="Facebook"
                style="
                  vertical-align: middle;
                  border: none;
                  display: inline-block;
                "
              />
            </a>
            <a href=${instagramUrl} style="margin-left: 3px; text-decoration: none">
              <img
                 src=${instagramIconUrl}
                alt="Instagram"
                title="Instagram"
                style="
                  vertical-align: middle;
                  border: none;
                  display: inline-block;
                "
              />
            </a>
          </div>
          <table style="margin:auto">
            <tbody>
              <tr>
              <td>
              <img
              width="20"
              height="auto"
                  alt="Call"
                  title="Call"
                  src=${callIconUrl}
                  
                  />
              </td>
              <td>
                <a
              target="_blank"
              href='tel:315-3359274'
              class="text-slate"
              style="text-decoration: none; color: #d9d9d9"
              >
               ${companyPhoneNo}
              </a>
              </td>
              <td>
              <img
              width="20"
              height="auto"
                  alt="Location"
                  title="Location"
                  src=${locationIconUrl}
                    
                  />
              </td>
              <td>
               <a
                target="_blank"
                href=${locationUrl}
                class="text-slate"
                style="text-decoration: none; color: #d9d9d9"
              >
                400 south street, Utica, NY, 13501
              </a>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    </div>
  </div>
</body>
`
};

const contactDetailReceivedBody = (params) => {
  const { name, email, phoneNumber, requirement } = params;

  return `<body style="border: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Inter', Arial, sans-serif; width: 100%;">
  <!-- Embed Inter font -->
  <style>
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr46A8LsEZjSkpC8uxVN4.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr46A8LsEZjSkpC9CqVN4.woff2') format('woff2');
    }
  </style>
  <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0; margin: 0; border: 0; border-spacing: 0; border-collapse: collapse; width: 100%; table-layout: fixed; background-color: #f5f5f5; padding-bottom: 40px;" bgcolor="#f5f5f5">
    <tr style="padding: 0; margin: 0; border: 0;">
      <td align="center" style="padding: 0; margin: 0; border: 0;">
        <table class="main" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding: 0; border: 0; border-spacing: 0; border-collapse: collapse; background-color: #ffffff; margin: 5rem auto; width: 100%; max-width: 600px; border-radius: 8px;" bgcolor="#ffffff">
          <tr style="padding: 0; margin: 0; border: 0; background: rgb(17, 17, 17);">
            <td class="logo" style="margin: 0; border: 0; text-align: center; padding: 1rem;" align="center">
              <img
                src="${companyLogo}"  
                alt="Thank you"
                width="170px"
                height="60px"
                title="Thank you"
              />
            </td>
          </tr>
          <tr style="padding: 0; margin: 0; border: 0;">
            <td class="content" style="margin: 0; border: 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #333333; padding: 20px;">
              <p style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;">Dear Admin,</p>
              <p style="padding: 0; margin: 0; border: 0;">You have received a <b>new response</b> from the website's "Contact Us" form. Please review the details below:</p>
              <b style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;">Contact Form Submission Details:</b>
              <ul>
                <li><b>Name:</b> ${name}</li>
                <li><b>Email:</b> ${email}</li>
                <li><b>Phone Number:</b> ${phoneNumber}</li>
                ${requirement
      ? `<li><b>Requirement:</b> ${requirement}</li>`
      : ""
    }
              </ul>
              <p style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;">Please follow up with the inquiry at your earliest convenience. If you have any questions, feel free to let me know.</p>
              <p style="padding: 0; margin: 0; border: 0; margin-bottom: 16px;">Best Regards,<br style="padding: 0; margin: 0; border: 0;">National Gold Buyer Team</p>
              <div style="text-align: center;">
                <a href=${WebsiteUrl} class="button" style="border: 0; text-decoration: none; background-color: #000; color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block; font-size: 16px; font-weight: 600; text-align: center; margin: 20px 0; cursor: pointer;">Visit Our Website</a>
              </div>
            </td>
          </tr>
          <tr style="padding: 0; margin: 0; border: 0; border-top: 1px dashed #8080806b;">
            <td class="footer" style="margin: 0; border: 0; text-align: center; font-family: 'Inter', Arial, sans-serif; font-size: 12px; line-height: 18px; color: #999999; padding: 20px;" align="center">
              <p style="padding: 0; margin: 0; border: 0;">&copy; 2024 National Gold Buyer All rights reserved.<br style="padding: 0; margin: 0; border: 0;">
              400 south street, Utica, NY, 13501</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
`
};
