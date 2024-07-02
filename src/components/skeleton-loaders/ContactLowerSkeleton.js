export default function ContactLowerSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] pt-[64px] w-full">
      <div className="w-full bg-placeholderBg p-[24px] border-solid border-skeletonBorder border-[2px] rounded-[4px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          {Array(3)
            .fill()
            ?.map((_, index) => (
              <div key={index} className="flex flex-col gap-[12px]">
                <div className="w-full h-[40px] bg-skeletonLoader"></div>
              </div>
            ))}
        </div>

        <div className="bg-skeletonLoader px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit self-end">
          <div className="w-[100px] h-[18px]"></div>
        </div>
      </div>
    </div>
  );
}
