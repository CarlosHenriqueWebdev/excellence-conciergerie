export default function ServicesSkeleton() {
  return (
    <div>
      <div className="px-[24px] lg:px-[80px] w-full mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[16px] mb-[32px]">
        <div className="bg-skeletonLoader h-[20px] w-[150px] rounded" />
        <div className="bg-skeletonLoader h-[28px] w-[250px] rounded mt-[10px]" />
      </div>

      <div className="px-[24px] lg:px-[80px] w-full mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        <div className="flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr]">
          <div className="bg-placeholderBg h-[340px] w-full border-solid border-[3px] border-skeletonBorder rounded-[4px]" />
          <div className="flex flex-col gap-[16px] w-full md:pt-[16px]">
            <div className="bg-skeletonLoader h-[18px] w-[150px] rounded" />
            <div className="bg-skeletonLoader h-[24px] w-[250px] rounded" />
            <div className="bg-skeletonLoader h-[80px] w-full max-w-[800px] rounded" />
            <div className="mt-[24px] flex flex-col w-full justify-between gap-[16px]">
              {Array(4)
                .fill()
                ?.map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-[2px] w-full bg-skeletonLoader h-[12px]"
                  >
                    <div className="h-[36px] w-full" />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-[32px] flex w-full justify-between gap-[4px]">
          {Array(4)
            .fill()
            ?.map((_, index) => (
              <div
                key={index}
                className="relative rounded-[2px] w-full bg-skeletonLoader h-[3px]"
              >
                <div className="h-[36px] w-full" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
