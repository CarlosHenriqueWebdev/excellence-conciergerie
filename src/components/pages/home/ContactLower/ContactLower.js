import { useState } from "react";
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PrivacyModalManager from "@/components/pages/home/ContactLower/components/PrivacyModalManager";
import {
  formFields,
  additionalForms,
  initialValues,
} from "@/components/pages/home/ContactLower/components/formFieldsConfig";
import { getValidationSchema } from "@/components/pages/home/ContactLower/components/validationSchemas";

export default function ContactLower() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [submissionError, setSubmissionError] = useState("");
  const legalLinks = t("legalLinks", { returnObjects: true });

  const prevButton = () => {
    setStep(1);
    setSubmissionError("");
    setSelectedFormType(null);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = {
      ...values,
      isOwnersForm: selectedFormType === "owners",
      isSubscriptionsForm: selectedFormType === "subscriptions",
      isOthersForm: selectedFormType === "others",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          // Trigger GTM event here after successful form submission
          if (window && window.dataLayer) {
            window.dataLayer.push({
              event: "form_submission", // The event name we configured in GTM
            });
          }

          setStep(3);
          setSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmissionError(t("submissionError"));
          setSubmitting(false);
        }
      )
      .catch((error) => {
        console.log("ERROR...", error);
        setSubmissionError(t("submissionError"));
        setSubmitting(false);
      });
  };

  const renderFormFields = (fields, formType) => {
    return fields?.map((field, index) => (
      <div key={index} className="flex flex-col gap-[12px]">
        <label className="text-[1rem]" htmlFor={field.name}>
          {t(field.label)}{" "}
          {field.required && (
            <span aria-hidden={true} className="text-[#FF4C4C]">
              *
            </span>
          )}
        </label>
        {field.type === "text" ||
        field.type === "email" ||
        field.type === "number" ||
        field.type === "tel" ||
        field.type === "date" ? (
          <Field
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-none focus-visible:outline-golden-yellow"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : field.type === "select" ? (
          <Field
            as="select"
            name={field.name}
            id={field.name}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-r-[16px] border-transparent border-solid focus-visible:outline-golden-yellow"
            aria-live="assertive"
            aria-required={field.required}
          >
            <option value="" disabled>
              {t("blankOption")}
            </option>
            {t(field.options, { returnObjects: true })?.map((option, idx) => (
              <option key={idx} value={option.value || option.DO_NOT_CHANGE}>
                {t(option.label)}
              </option>
            ))}
          </Field>
        ) : field.type === "textarea" ? (
          <Field
            as="textarea"
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-none focus-visible:outline-golden-yellow h-[150px] resize-none"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : null}
        <ErrorMessage
          name={field.name}
          className="text-[#FF4C4C]"
          render={(msg) => (
            <p role="alert" className="text-[#FF4C4C]">
              {msg}: &quot;{t(field.label)}&quot;
            </p>
          )}
        />

        {field.helperText && (
          <span className="text-[#FFD84C] text-[0.875rem]">
            {t(field.helperText)}
          </span>
        )}
      </div>
    ));
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] pt-[64px] w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(selectedFormType, t)}
        onSubmit={(values, actions) => {
          if (step === 1) {
            setSelectedFormType(values.formType);
            setStep(2);
            actions.setSubmitting(false);
          } else {
            handleSubmit(values, actions);
          }
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form className="w-full bg-[#14161C] p-[24px] border-solid border-golden-sunbeam border-[2px] rounded-[4px] flex flex-col gap-[32px]">
            {step === 1 && (
              <div className="flex flex-col gap-[32px]">
                {renderFormFields(formFields)}
                <button
                  type="submit"
                  className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit self-end"
                  disabled={isSubmitting}
                >
                  {t("nextStep")}
                </button>
              </div>
            )}
            {step === 2 && selectedFormType && (
              <div className="flex flex-col gap-[32px]">
                {renderFormFields(additionalForms[selectedFormType])}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[16px] md:flex-row justify-between">
                    <button
                      type="button"
                      className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit"
                      onClick={() => prevButton()}
                    >
                      {t("previousStep")}
                    </button>
                    <button
                      type="submit"
                      className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit"
                      disabled={isSubmitting}
                    >
                      {t("submit")}
                    </button>
                  </div>
                </div>

                <PrivacyModalManager legalLinks={legalLinks} />

                {submissionError && (
                  <p className="text-[#FF4C4C]">{submissionError}</p>
                )}
              </div>
            )}
            {step === 3 && (
              <div className="flex flex-col gap-[16px] items-center">
                <h2 className="text-[1.5rem] text-white">
                  {t("formSubmittedSuccessfully")}
                </h2>
                <p className="text-[#FFD84C] text-[1rem]">
                  {t("thankYouForYourSubmission")}
                </p>
                <button
                  type="button"
                  className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit"
                  onClick={() => setStep(1)}
                >
                  {t("backToStart")}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
