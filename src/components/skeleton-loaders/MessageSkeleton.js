export default function MessageSkeleton() {
	return (
		<div className="bg-placeholderBg py-[100px] border-solid border-y-[8px] border-skeletonBorder">
			<div className="bg-deep-night py-[56px]">
				<div className="w-full px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] md:justify-center md:items-center md:text-center">
					<div className="relative w-fit">
						<div>
							<div className="border-solid border-[1px] border-skeletonBorder rounded-[100%] w-[50px] h-[50px] bg-placeholderBg"></div>
						</div>
					</div>

					<div className="flex flex-col gap-[20px] md:justify-center md:items-center">
						<div className="flex flex-col gap-[16px] md:justify-center md:items-center">
							<div className="h-[24px] max-w-[240px] bg-skeletonLoader"></div>
							<div className="h-[32px] w-full max-w-[320px] bg-skeletonLoader"></div>
						</div>

						<div className="flex flex-col gap-[16px] text-skeletonLoader font-medium">
							<div className="h-[100px] w-full max-w-[800px] bg-skeletonLoader"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
