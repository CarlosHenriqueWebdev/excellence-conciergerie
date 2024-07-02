export default function ContactUpperSkeleton() {
  return (
    <div className="py-[100px] bg-cover bg-fixed bg-placeholderBg border-solid border-y-[8px] border-skeletonBorder">
      <div className="bg-deep-night py-[56px]">
        <div className="w-full px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="h-[24px] w-[160px] bg-skeletonLoader"></div>
            <div className="h-[20px] w-[240px] bg-skeletonLoader"></div>
          </div>

          <div className="h-[80px] md:max-w-[800px] bg-skeletonLoader"></div>

          <div className="flex flex-wrap gap-[16px]">
            {Array.from({ length: 3 })?.map((_, index) => (
              <div key={index} className="flex gap-[8px]">
                <div className="h-[20px] w-[20px] bg-skeletonLoader"></div>
                <div className="h-[12px] w-[80px] bg-skeletonLoader"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
