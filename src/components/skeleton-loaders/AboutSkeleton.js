export default function AboutSkeleton() {
  return (
    <div className="w-full px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr] relative z-[10]">
      <div className="bg-placeholderBg w-full h-[300px] border-solid border-[3px] border-skeletonBorder rounded-[4px]" />
      <div className="flex flex-col gap-[20px] md:py-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="bg-skeletonLoader h-[20px] w-[150px] rounded" />
          <div className="bg-skeletonLoader h-[28px] w-[250px] rounded mt-[10px]" />
        </div>
        <div className="flex flex-col gap-[16px]">
          {Array(3)
            .fill()
            ?.map((_, index) => (
              <div
                key={index}
                className="bg-skeletonLoader h-[16px] w-full rounded"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
