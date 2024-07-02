import * as Yup from "yup";

export const getValidationSchema = (formType, t) => {
  const baseValidationSchema = Yup.object().shape({
    fullName: Yup.string().required(t("requiredField")),
    email: Yup.string().email(t("invalidEmail")).required(t("requiredField")),
    formType: Yup.string().required(t("requiredField")),
  });

  const validationSchemas = {
    owners: Yup.object().shape({
      propertyLocation: Yup.string().required(t("requiredField")),
      propertyRoomAmount: Yup.number().required(t("requiredField")),
      services: Yup.string().required(t("requiredField")),
      propertyType: Yup.string().required(t("requiredField")),
      propertyMessage: Yup.string(),
    }),
    subscriptions: Yup.object().shape({
      subscriptionsChoices: Yup.string().required(t("requiredField")),
      subscriptionPhone: Yup.string(),
    }),
    others: Yup.object().shape({
      otherInfo: Yup.string().required(t("requiredField")),
    }),
  };

  return formType
    ? baseValidationSchema.concat(validationSchemas[formType])
    : baseValidationSchema;
};
