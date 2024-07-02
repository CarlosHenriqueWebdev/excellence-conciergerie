/* eslint-disable react/prop-types */
import { useState } from "react";
import LegalModal from "@/components/shared/LegalModal";
import { useTranslation } from "next-i18next";

export default function PrivacyModalManager({ legalLinks }) {
  const { t } = useTranslation();
  const [modalItem, setModalItem] = useState(null);

  const handleModalOpen = (targetId) => {
    const privacyPolicyItem = legalLinks.find(
      (item) => item.DO_NOT_CHANGE === "privacy",
    );
    if (privacyPolicyItem) {
      setModalItem(privacyPolicyItem);
    }

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.tabIndex = -1;
        targetElement.focus();
      }
    }, 500);
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <div>
      {modalItem && <LegalModal item={modalItem} onClose={handleCloseModal} />}
      <span className="text-[#FFD84C] text-[0.875rem]">
        {t("privacyPolicyWarningText")}{" "}
        <button
          type="button"
          onClick={() => handleModalOpen("legal-title")}
          className="text-[#4C68FF] hover:underline"
        >
          {t("privacyPolicyWarningLink")}
        </button>
        .
      </span>
    </div>
  );
}
