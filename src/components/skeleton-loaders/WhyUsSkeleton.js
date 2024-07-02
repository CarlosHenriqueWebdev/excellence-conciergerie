export default function WhyUsSkeleton() {
  return (
    <div className="w-full px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
      <div className="md:order-[1]">
        <div className="bg-placeholderBg w-full h-[440px] border-solid border-[3px] border-skeletonBorder rounded-[4px]" />
      </div>
      <div className="flex flex-col gap-[24px] md:py-[16px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            <div className="bg-skeletonLoader h-[20px] w-[150px] rounded" />
            <div className="bg-skeletonLoader h-[28px] w-[250px] rounded mt-[10px]" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="bg-skeletonLoader h-[16px] w-full rounded" />
          </div>
        </div>
        <ul className="flex flex-col gap-[16px]">
          {Array(3)
            .fill()
            ?.map((_, index) => (
              <li
                key={index}
                className="cursor-pointer bg-skeletonList rounded-[4px] px-[16px] py-[16px] flex flex-col"
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-[8px]">
                    <div className="bg-skeletonLoader h-[16px] w-[16px] rounded" />
                    <div className="bg-skeletonLoader h-[16px] w-[150px] rounded" />
                  </div>
                  <div className="bg-skeletonLoader h-[16px] w-[16px] rounded" />
                </div>
                <div className="overflow-hidden">
                  <div className="bg-skeletonLoader h-[16px] w-full rounded mt-[16px]" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
