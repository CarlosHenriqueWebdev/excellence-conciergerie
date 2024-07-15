export default function FooterSkeleton() {
  return (
    <footer className="flex flex-col text-lavender-haze bg-eclipse-black mt-[100px]">
      <div className="border-solid border-t-[2px] border-skeletonBorder">
        <div className="w-full mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] md:grid md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-[24px]">
            <div className="h-[32px] w-[166px] bg-skeletonLoader"></div>
            <div className="h-[40px] md:max-w-[360px] bg-skeletonLoader"></div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="h-[20px] w-[200px] bg-skeletonLoader"></div>
            <div className="flex flex-col gap-[16px]">
              {Array.from({ length: 3 })?.map((_, index) => (
                <div key={index} className="flex gap-[8px]">
                  <div className="h-[22px] w-[22px] bg-skeletonLoader"></div>
                  <div className="h-[12px] w-[80px] bg-skeletonLoader"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="h-[20px] w-[200px] bg-skeletonLoader"></div>
            <div className="flex flex-col gap-[16px]">
              {Array.from({ length: 3 })?.map((_, index) => (
                <div
                  key={index}
                  className="h-[12px] w-[160px] bg-skeletonLoader"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-solid border-y-[2px] border-skeletonBorder">
        <div className="w-full mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[32px] text-silver-mist flex gap-[4px] flex-wrap">
          {Array.from({ length: 4 })?.map((_, index) => (
            <div key={index} className="text-white-75 flex gap-[6px]">
              <div className="h-[12px] w-[60px] bg-skeletonLoader"></div>
              {index !== 3 && (
                <div className="h-[12px] w-[10px] bg-skeletonLoader"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] lg:px-[80px] py-[48px]">
        {" "}
        <div className="bg-skeletonLoader h-[14px] w-[80px]"></div>
      </div>
    </footer>
  );
}
