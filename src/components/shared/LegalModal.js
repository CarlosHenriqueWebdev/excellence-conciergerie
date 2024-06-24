import React from "react";
import { useTranslation } from "next-i18next";

function LegalModal({ item, onClose }) {
  const { t } = useTranslation();

  const renderContent = () => {
    switch (item.action) {
      case "terms":
        return (
          <div className="flex flex-col gap-[32px]">
            <h2 className="text-[24px] font-bold uppercase">{item.text}</h2>
            <div className="flex flex-col gap-[24px]">
              {item.array.map((subItem, index) => (
                <div key={index} className="flex flex-col gap-[16px]">
                  {subItem.title && (
                    <h3 className="font-bold text-[20px]">{subItem.title}</h3>
                  )}
                  {subItem.description && (
                    <p className="font-medium text-[16px]">
                      {subItem.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{item.text}</h2>
            {item.array.map((subItem, index) => (
              <div key={index} className="mb-4">
                {subItem.title && (
                  <h3 className="font-semibold">{subItem.title}</h3>
                )}
                {subItem.description && <p>{subItem.description}</p>}
              </div>
            ))}
          </div>
        );
      case "attributions":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">{item.text}</h2>
            {item.array.map((subItem, index) => (
              <div key={index} className="mb-4">
                <p>
                  <a
                    href={subItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-500"
                  >
                    {subItem.text}
                  </a>
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex text-[#181C18] px-[24px] lg:px-[80px] py-[24px] lg:py-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
      <div className="overflow-y-scroll bg-white p-[24px] rounded-[4px] w-full flex flex-col gap-[32px] justify-start">
        <div className="flex justify-end w-full">
          <button onClick={onClose} className="text-[24px]">
            x
          </button>
        </div>
        {renderContent()}
        <button
          onClick={onClose}
          className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[16px] text-white w-fit cursor-pointer"
        >
          {t('closeModalButton')}
        </button>
      </div>
    </div>
  );
}

export default LegalModal;
