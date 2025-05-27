"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import Hero from "@/components/hero";
import { Poppins } from "next/font/google";
import Spinner from "@/components/spinner";
import { Button } from "@/components/button";
import { useCallback } from "react";
import { sendContactDetails } from "@/services";
import pin from "@/assets/images/contact-us/pin.png";
import GradientText from "@/components/gradient-text";
import { emailPattern, phoneRegex } from "@/utils/lib";
import call from "@/assets/images/contact-us/call.png";
import mail from "@/assets/images/contact-us/mail.png";
import tele from "@/assets/images/contact-us/tele.webp";
import hours from "@/assets/images/contact-us/hours.png";
import banner from "@/assets/images/contact-us/banner.webp";
import Alert from "@/components/alert";
import { useDispatch, useSelector } from "react-redux";
import { setContactMessage } from "@/store/slices/commonSlice";
import { useAlertTimeout } from "@/utils/hooks";
import ContactCard from "@/components/contact-card";
import Image from "next/image";
import {
  companyAddress,
  companyPhoneNo,
  locationUrl,
  clientEmail,
} from "@/utils/environments";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inputClassName =
  "peer block w-full rounded-3xl p-3 md:p-4 text-[14px] lg:text-base placeholder:text-slate placeholder:text-opacity-70 sm:text-sm bg-baseblack border border-gray-900";

const Contact = () => {
  const dispatch = useDispatch();

  const { contactLoading, contactMessage } = useSelector(
    ({ common }) => common
  );

  useAlertTimeout(contactMessage, () =>
    dispatch(setContactMessage({ requirement: "", type: "" }))
  );

  const onSubmit = useCallback(async (val, { resetForm }) => {
    const res = await dispatch(sendContactDetails(val));
    if (res) resetForm();
  }, []);

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        requirement: "",
      },
      validationSchema: yup.object({
        name: yup.string().trim().required("First Name is required"),
        email: yup
          .string()
          .matches(emailPattern, "Email is not valid")
          .required("Email is required"),
        phoneNumber: yup
          .string()
          .matches(phoneRegex, "Phone number is not valid")
          .required("Phone number is required"),
        requirement: yup.string().trim().notRequired(),
      }),
      enableReinitialize: true,
      onSubmit,
    });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full">
      <Hero
        title="CONTACT US"
        imageSrc={banner}
        imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
      />
      <section className="pt-8 md:pt-0">
        <h2
          className={`opacity-75 text-[45px] xs:text-5xl md:text-[4.5em] lg:text-[6em] xl:text-[8em] 2xl:text-[8.5em] translate-y-5  md:translate-y-6 xl:translate-y-10  tracking-tight  font-bold text-center
    bg-gradient-to-b from-[#BB454575] via-[#bb454535] md:via-[#BB454535] lg:via-[#BB454530] xl:via-[#bb45453b] to-transparent text-transparent bg-clip-text ${poppins.className}`}
        >
          Contact us today
        </h2>

        <h3 className="text-center px-4 md:px-0 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase mb-4 z-10 relative">
          Let us know if we <GradientText text="can help" /> you
        </h3>
        <p className="text-center text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto px-4 mb-8">
          Looking to buy, sell, or trade? 💰✨ Contact us today and let us help
          you make the most of your valuables!
        </p>
      </section>
      <section className=" w-full lg:max-w-[85%] 4xl:max-w-[70%] mx-auto rounded-[30px] mb-20 lg:mb-32 gradient-border-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-20 rounded-[30px] service-card-bg">
          <div className="col-span-3 p-5  lg:pr-0 lg:p-8 2xl:p-10">
            <h2 className="text-lightgold font-bold text-2xl lg:text-4xl">
              Send Us a Message
            </h2>
            <p className="text-sm sm:text-base md:text-lg mt-2 md:mt-0">
              Please fill out this short form and we&apos;ll contact you
              shortly.
            </p>
            <form
              onSubmit={handleSubmit}
              onKeyDown={handleKeyPress}
              className="flex flex-col gap-3 lg:gap-4 sm:gap-3 mt-7 lg:mt-10"
            >
              <div>
                <input
                  className={inputClassName}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="First Name*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.name || ""}
                />
                {touched?.name && errors?.name && (
                  <p className="text-left text-sm text-rose-500 ml-4">
                    {errors?.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClassName}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.email || ""}
                />
                {touched?.email && errors?.email && (
                  <p className="text-left text-sm text-rose-500 ml-4">
                    {errors?.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  className={inputClassName}
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number*"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.phoneNumber || ""}
                />
                {touched?.phoneNumber && errors?.phoneNumber && (
                  <p className="text-left text-sm text-rose-500 ml-4">
                    {errors?.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  rows="6"
                  className={inputClassName}
                  id="requirement"
                  name="requirement"
                  placeholder="Your Requirements"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.requirement || ""}
                />
              </div>
              {contactMessage?.message ? (
                <Alert
                  message={contactMessage?.message}
                  type={contactMessage.type}
                />
              ) : null}

              <Button
                type="submit"
                title={"Submit"}
                variant="outlined"
                disabled={contactLoading}
                className={`w-fit my-2 lg:mt-3 !py-2 ${
                  contactLoading
                    ? "!border-yellow-600/30 bg-yellow-600/20 hover:bg-yellow-600/20 pointer-events-none"
                    : "!border-white/60"
                }`}
              >
                {contactLoading ? <Spinner /> : "Send a Message"}
              </Button>
            </form>
          </div>
          <div className="col-span-2">
            <Image
              priority
              src={tele}
              title="National Gold and Pawn | Diamonds, Watches, Jewelry"
              alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
              className="object-cover h-[380px] md:h-[500px] lg:w-full lg:h-full !rounded-[30px] lg:!rounded-l-none lg:!  -r-3xl"
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-3 2xl:gap-6 px-4 md:px-8 lg:px-24 xl:px-12 mb-12 mt-6 2xl:mt-10">
        <ContactCard
          icon={pin}
          title="Location"
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          content={companyAddress}
          linkText="Get Direction"
          linkHref={locationUrl}
        />
        <ContactCard
          icon={mail}
          title="Email"
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          content={clientEmail}
        />
        <ContactCard
          icon={call}
          title="Contact"
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          content={`Main: ${companyPhoneNo}`}
        />
        <ContactCard
          icon={hours}
          title="Business Hours"
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        >
          <div className="w-full text-center">
            <div className="inline-block">
              <div className="flex justify-between space-x-4">
                <div className="text-left">
                  <p>Tue - Fri</p>
                  <p>Sat</p>
                  <p>Mon</p>
                  <p>Sun</p>
                </div>
                <div className="text-right">
                  <p>9:00 am - 7:00 pm</p>
                  <p>10:00 am - 3:00 pm</p>
                  <p>Closed</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </ContactCard>
      </section>
      <section className="px-4 md:px-8 lg:px-24 xl:px-12 relative bottom-[-50px] lg:bottom-[-80px] z-50">
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1456.7420325739952!2d-75.22791822056533!3d43.09434109340956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d946df02c51485%3A0xce25d601dda711c7!2sJohanne&#39;s%20Coffee%20%26%20Coin%20Shop!5e0!3m2!1sen!2sin!4v1732881881415!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] md:h-[380px] 2xl:h-[555px] rounded-xl 2xl:rounded-[30px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
