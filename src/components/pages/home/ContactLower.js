import { useState } from "react";
import { useTranslation } from "next-i18next";

const formFields = [
  {
    type: "text",
    name: "fullName",
    label: "Nom complet",
    placeholder: "Votre nom complet",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Your Email",
    required: true,
  },
  {
    type: "select",
    name: "formType",
    label: "Choisissez un type de formulaire",
    options: [
      { value: "proprietaires", label: "Propriétaires" },
      { value: "locataires", label: "Locataires" },
      { value: "autres", label: "Autres" },
    ],
    required: true,
    helperText:
      "Si vous avez des questions générales, remplissez ce formulaire. Si vous êtes propriétaire, veuillez choisir l'option 'Propriétaires' dans le menu déroulant. Si vous souhaitez acheter un forfait, sélectionnez l'option 'Acheteurs de forfaits' dans le menu déroulant.",
  },
];

const additionalForms = {
  proprietaires: [
    {
      type: "text",
      name: "propertyName",
      label: "Nom de la propriété",
      placeholder: "Nom de la propriété",
      required: true,
    },
    {
      type: "number",
      name: "propertyValue",
      label: "Valeur de la propriété",
      placeholder: "Valeur de la propriété",
      required: true,
    },
  ],
  locataires: [
    {
      type: "text",
      name: "tenantName",
      label: "Nom du locataire",
      placeholder: "Nom du locataire",
      required: true,
    },
    {
      type: "date",
      name: "leaseStart",
      label: "Date de début du bail",
      required: true,
    },
  ],
  autres: [
    {
      type: "textarea",
      name: "otherInfo",
      label: "Autres informations",
      placeholder: "Autres informations",
      required: true,
    },
  ],
};

export default function ContactLower({ translations }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [formData, setFormData] = useState({});

  const handleNextStep = (e) => {
    e.preventDefault();
    const formType = formData.formType;
    setSelectedFormType(formType);
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
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
        {field.type === "text" || field.type === "email" || field.type === "number" || field.type === "date" ? (
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
            className="w-full px-[16px] py-[12px] bg-[#31343C] text-white placeholder-white-75 rounded-[4px] border-none focus-visible:outline-golden-yellow"
          >
            <option value="" disabled>{t("Select an option")}</option>
            {field.options.map((option, idx) => (
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
          <div className="flex flex-col gap-[16px]">
            {renderFormFields(formFields)}
            <button className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit self-end">
              Next Step
            </button>
          </div>
        )}
        {step === 2 && selectedFormType && (
          <div className="flex flex-col gap-[16px]">
            {renderFormFields(additionalForms[selectedFormType])}
            <div className="flex justify-between">
              <button
                type="button"
                className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit"
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-[16px] items-center">
            <h2 className="text-[24px] text-white">Form Submitted Successfully!</h2>
            <p className="text-[#FFD84C] text-[16px]">Thank you for your submission. We will get back to you soon.</p>
          </div>
        )}
      </form>
    </div>
  );
}
