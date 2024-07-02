export default function PacksSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
      <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
        <div className="bg-skeletonLoader h-[20px] w-[150px] rounded" />
        <div className="bg-skeletonLoader h-[28px] w-[250px] rounded mt-[10px]" />
      </div>

      <ul className="flex flex-col gap-[24px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] w-full">
        {Array(3)
          .fill()
          ?.map((_, index) => (
            <li
              key={index}
              className="bg-placeholderBg rounded-[4px] flex flex-col w-full overflow-hidden md:justify-center md:items-center"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-[16px] p-[24px] md:justify-center md:items-center">
                  <div className="bg-skeletonLoader h-[36px] w-[36px] rounded" />
                  <div className="flex flex-col gap-[12px] font-bold uppercase md:justify-center md:items-center">
                    <div className="bg-skeletonLoader h-[20px] w-[150px] rounded" />
                    <div className="bg-skeletonLoader h-[16px] w-[100px] rounded mt-[10px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] p-[24px] justify-between h-full">
                  <ul className="flex flex-col gap-[12px]">
                    {Array(3)
                      .fill()
                      ?.map((_, proIndex) => (
                        <li
                          key={proIndex}
                          className="flex items-baseline gap-[8px]"
                        >
                          <div className="bg-skeletonLoader h-[12px] w-[12px] rounded" />
                          <div className="bg-skeletonLoader h-[16px] w-[150px] rounded" />
                        </li>
                      ))}
                  </ul>
                  <div className="bg-skeletonLoader h-[40px] w-[120px] rounded md:self-center mt-[16px]" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
