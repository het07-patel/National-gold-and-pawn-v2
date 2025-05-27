import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { NextResponse } from "next/server";
import { emailPattern, message } from "@/utils/lib";
import { contactDetailsReceivedEmail, contactUsEmail } from "@/utils/template";
import { sendMail } from "@/utils/mailer";
import { companyEmail } from "@/utils/environments";

const window = new JSDOM("").window;
const DOMPurifyInstance = DOMPurify(window);

const sanitizeValue = (value) => {
  return DOMPurifyInstance.sanitize(value);
};

export async function POST(request) {
  try {
    const bodyData = await request.json();
    let { name, email, phoneNumber, requirement } = bodyData;

    name = sanitizeValue(name) ? name.trim() : null;
    email = sanitizeValue(email) ? email.trim() : null;
    phoneNumber = sanitizeValue(phoneNumber) ? Number(phoneNumber) : null;
    requirement = sanitizeValue(requirement) ? requirement.trim() : null;

    if (name && email && phoneNumber) {
      const emailResult = emailPattern.test(email);
      if (emailResult) {
        // Send Mail to company owner
        const { subject: cdSubject, description: cdDesc } =
          contactDetailsReceivedEmail({
            name,
            email,
            phoneNumber,
            requirement,
          });
        const cdMailPayload = {
          toMail: companyEmail,
          subject: cdSubject,
          body: cdDesc,
        };

        await sendMail(cdMailPayload);
        const response = NextResponse.json({
          status: 200,
          message: message.SUCCESS,
        });

        // Send Mail to customer
        try {
          const { subject, description } = contactUsEmail(name);
          const mailPayload = {
            toMail: email,
            subject,
            body: description,
          };

          sendMail(mailPayload);
        } catch (error) {
          console.log("Error sending email", error);
        }

        return response;
      } else {
        return NextResponse.json({
          status: 400,
          message: message.EMAIL_VALIDATION,
        });
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: message.INVALID_DATA,
      });
    }
  } catch (error) {
    // console.log(error?.message, "e");
    return NextResponse.json({
      status: 500,
      message: message.SERVER_ERROR,
    });
  }
}
