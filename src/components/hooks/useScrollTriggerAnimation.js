import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function useScrollTriggerAnimation(ref, commonScroll, panelScroll) {
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

			if (commonScroll) {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: container,
						pinSpacing: false,
						start: "top top",
						end: "bottom bottom",
						scrub: true,
						markers: false,
					},
				});

				tl.fromTo(
					container.querySelectorAll(".item"),
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						stagger: 0.5,
					},
				);
			} else if (panelScroll) {
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
	}, [ref, commonScroll, panelScroll, isMobile]);
}

export default useScrollTriggerAnimation;
