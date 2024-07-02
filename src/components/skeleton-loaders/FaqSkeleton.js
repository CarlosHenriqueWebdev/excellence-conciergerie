export default function FaqSkeleton() {
  return (
    <div className="bg-deep-night py-[100px]">
      <div className="w-full flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        <div className="flex flex-col gap-[20px]">
          <div className="h-[24px] w-[160px] bg-skeletonLoader"></div>
          <div className="h-[20px] w-[240px] bg-skeletonLoader"></div>
        </div>

        <div className="flex flex-col gap-[16px]">
          {Array(8)
            .fill()
            ?.map((_, index) => (
              <div key={index} className="flex flex-col gap-[12px]">
                <div className="w-full h-[50px] bg-skeletonLoader"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
