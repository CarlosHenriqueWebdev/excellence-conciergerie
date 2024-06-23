import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function ContactLower({ translations }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      type: "text",
      name: "fullName",
      label: "fullNameLabel",
      placeholder: t("fullNamePlaceholder"),
      required: true,
    },
    {
      type: "email",
      name: "email",
      label: "emailLabel",
      placeholder: "emailPlaceholder",
      required: true,
    },
    {
      type: "select",
      name: "formType",
      label: "formTypeLabel",
      options: "formTypeOptions",
      required: true,
      helperText: "formTypeHelperText",
    },
  ];

  const additionalForms = {
    proprietaires: [
      {
        type: "text",
        name: "propertyLocation",
        label: "propertyLocationLabel",
        placeholder: "propertyLocationPlaceholder",
        required: true,
      },
      {
        type: "number",
        name: "propertyRoomAmount",
        label: "propertyRoomAmountLabel",
        placeholder: "propertyRoomAmountPlaceholder",
        required: true,
      },
      {
        type: "select",
        name: "services",
        label: "servicesLabel",
        options: "servicesOptions",
        required: true,
      },
      {
        type: "select",
        name: "propertyType",
        label: "propertyTypeLabel",
        options: "propertyTypeOptions",
        required: true,
      },
      {
        type: "textarea",
        name: "propertyMessage",
        label: "propertyMessageLabel",
        placeholder: "propertyMessagePlaceholder",
        required: false,
      },
    ],
    subscriptions: [
      {
        type: "select",
        name: "subscriptionsChoices",
        label: "subscriptionsChoicesLabel",
        options: "subscriptionsChoicesOptions",
        required: true,
      },
      {
        type: "tel",
        name: "subscriptionPhone",
        label: "subscriptionPhoneLabel",
        placeholder: "subscriptionPhonePlaceholder",
        required: false,
      },
    ],
    autres: [
      {
        type: "textarea",
        name: "otherInfo",
        label: "otherInfoLabel",
        placeholder: "otherInfoPlaceholder",
        required: true,
      },
    ],
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    const formType = formData.formType;
    setSelectedFormType(formType);
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const backToStart = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API
    console.log("Form submitted:", formData);
    setStep(3);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFormFields = (fields) => {
    return fields.map((field, index) => (
      <div key={index} className="flex flex-col gap-[12px]">
        <label className="text-[16px]">
          {t(field.label)}{" "}
          {field.required && <span className="text-[#FF4C4C]">*</span>}
        </label>
        {field.type === "text" ||
        field.type === "email" ||
        field.type === "number" ||
        field.type === "tel" ||
        field.type === "date" ? (
          <input
            type={field.type}
            name={field.name}
            placeholder={t(field.placeholder)}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-none focus-visible:outline-golden-yellow"
          />
        ) : field.type === "select" ? (
          <select
            name={field.name}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-r-[16px] border-transparent border-solid focus-visible:outline-golden-yellow"
          >
            <option value="" disabled>
              {t("blankOption")}
            </option>
            {t(field.options, { returnObjects: true }).map((option, idx) => (
              <option key={idx} value={option.value}>
                {t(option.label)}
              </option>
            ))}
          </select>
        ) : field.type === "textarea" ? (
          <textarea
            name={field.name}
            placeholder={t(field.placeholder)}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-none focus-visible:outline-golden-yellow h-[150px] resize-none"
          />
        ) : null}
        {field.helperText && (
          <span className="text-[#FFD84C] text-[14px]">
            {t(field.helperText)}
          </span>
        )}
      </div>
    ));
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] pt-[64px] w-full">
      <form
        className="w-full bg-[#14161C] p-[24px] border-solid border-golden-sunbeam border-[2px] rounded-[4px] flex flex-col gap-[32px]"
        onSubmit={step === 1 ? handleNextStep : handleSubmit}
      >
        {step === 1 && (
          <div className="flex flex-col gap-[32px]">
            {renderFormFields(formFields)}
            <button className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-full md:w-fit self-end">
              {t("nextStep")}
            </button>
          </div>
        )}
        {step === 2 && selectedFormType && (
          <div className="flex flex-col gap-[32px]">
            {renderFormFields(additionalForms[selectedFormType])}
            <div className="flex flex-col gap-[16px] md:flex-row justify-between">
              <button
                type="button"
                className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-full md:w-fit"
                onClick={handlePreviousStep}
              >
                {t("previousStep")}
              </button>
              <button
                type="submit"
                className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-full md:w-fit"
              >
                {t("submit")}
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className="text-[24px] text-white">
              {t("formSubmittedSuccessfully")}
            </h2>
            <p className="text-[#FFD84C] text-[16px]">
              {t("thankYouForYourSubmission")}
            </p>
            <button
              type="button"
              className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-full md:w-fit"
              onClick={backToStart}
            >
              {t("backToStart")}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
