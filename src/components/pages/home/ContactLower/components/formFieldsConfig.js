export const formFields = [
  {
    type: "text",
    name: "fullName",
    label: "fullNameLabel",
    placeholder: "fullNamePlaceholder",
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

export const additionalForms = {
  owners: [
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
  others: [
    {
      type: "textarea",
      name: "otherInfo",
      label: "otherInfoLabel",
      placeholder: "otherInfoPlaceholder",
      required: true,
    },
  ],
};

export const initialValues = {
  fullName: "",
  email: "",
  formType: "",
  propertyLocation: "",
  propertyRoomAmount: "",
  services: "",
  propertyType: "",
  propertyMessage: "",
  subscriptionsChoices: "",
  subscriptionPhone: "",
  otherInfo: "",
  isOwnersForm: false,
  isSubscriptionsForm: false,
  isOthersForm: false,
};
