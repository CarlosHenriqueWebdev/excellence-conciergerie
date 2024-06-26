import { useState } from "react";
import LegalModal from "@/components/shared/LegalModal";
import { useTranslation } from "next-i18next";

export default function PrivacyModalManager({ legalLinks, translations }) {
  const { t } = useTranslation();
  const [modalItem, setModalItem] = useState(null);

  const handleModalOpen = () => {
    const privacyPolicyItem = legalLinks.find(
      (item) => item.DO_NOT_CHANGE === "privacy",
    );
    if (privacyPolicyItem) {
      setModalItem(privacyPolicyItem);
    }
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <div>
      {modalItem && <LegalModal item={modalItem} onClose={handleCloseModal} />}
      <span className="text-[#FFD84C] text-[14px]">
        {t("privacyPolicyWarningText")}{" "}
        <button
          type="button"
          onClick={handleModalOpen}
          className="text-[#4C68FF] hover:underline"
        >
          {t("privacyPolicyWarningLink")}
        </button>
        .
      </span>
    </div>
  );
}
