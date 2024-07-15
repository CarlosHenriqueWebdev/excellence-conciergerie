export default function HeaderSkeleton() {
  return (
    <div className="w-full relative z-[10] bg-deep-night">
      <div className="w-full px-[24px] py-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex items-center justify-between">
        <div className="flex">
          <div className="h-[32px] w-[166px] bg-skeletonLoader rounded"></div>
        </div>
        <div className="flex lg:hidden">
          <div className="h-[24px] w-[24px] bg-skeletonLoader rounded"></div>
        </div>
        <div className="hidden lg:flex gap-[24px] items-center">
          <div className="flex gap-[24px]">
            {Array(5)
              .fill(0)
              ?.map((_, index) => (
                <div
                  key={index}
                  className="h-[24px] w-[80px] bg-skeletonLoader rounded"
                ></div>
              ))}
          </div>
          <div className="text-skeletonLoader">|</div>
          <div className="flex gap-[6px] items-center">
            <div className="h-[14px] w-[14px] bg-skeletonLoader rounded-[100%] mt-[4px]"></div>
            <div className="h-[17px] w-[72px] bg-skeletonLoader rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
