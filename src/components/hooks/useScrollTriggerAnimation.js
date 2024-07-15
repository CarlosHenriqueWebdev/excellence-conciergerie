import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function useScrollTriggerAnimation(ref, options = {}) {
	const { panelScroll = false } = options;

	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 767px)").matches,
	);

	useEffect(() => {
		const resizeHandler = () => {
			setIsMobile(window.matchMedia("(max-width: 767px)").matches);
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	useEffect(() => {
		if (!ref.current || isMobile) return;

		const ctx = gsap.context(() => {
			const container = ref.current;

			if (panelScroll) {
				const panel = container.querySelector(".panel");

				ScrollTrigger.create({
					trigger: panel,
					start: "top top",
					pin: true,
					pinSpacing: false,
					markers: false,
				});
			}
		});

		return () => {
			ctx.revert();
		};
	}, [ref, panelScroll, isMobile]);
}

export default useScrollTriggerAnimation;
