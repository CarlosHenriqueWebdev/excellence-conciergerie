export default function HeroSkeleton() {
	return (
		<div className="select-none cursor-pointer relative flex justify-center items-center bg-placeholderBg w-full">
			<div className="relative z-[20] py-[120px] lg:h-[75vh] lg:py-[0] justify-center items-center px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col w-full">
				<div className="font-bold uppercase flex flex-col gap-[16px] items-center">
					<div className="h-[20px] w-[150px] bg-skeletonLoader rounded"></div>
					<div className="h-[40px] w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
				</div>
			</div>
		</div>
	);
}
