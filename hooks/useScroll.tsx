import React from "react";

const useScroll = (): {
	ref: { current: HTMLElement };
	memoizeBoolean: boolean;
} => {
	const [isVisible, setIsVisible] = React.useState<boolean>(false);
	const memoizeBoolean = React.useMemo<boolean>(() => isVisible, [isVisible]);
	const ref = React.useRef<HTMLElement>(null);

	const onScroll = () => {
		const sh = ref.current?.offsetTop - ref.current?.offsetHeight;

		if (window.pageYOffset > sh) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener("scroll", onScroll, true);
		window.addEventListener("load", onScroll, true);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("load", onScroll);
		};
	}, []);

	return { ref, memoizeBoolean };
};

export default useScroll;
