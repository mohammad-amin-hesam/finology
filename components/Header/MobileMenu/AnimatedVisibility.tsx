import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";

function AnimatedVisibility({
	visible,
	children,
	animationOutDuration,
	disappearOffset,
	...rest
}) {
	const [noDisplay, setNoDisplay] = useState(!visible);
	useEffect(() => {
		if (!visible) {
			const delay = animationOutDuration - disappearOffset;
			setTimeout(() => setNoDisplay(true), delay);
		} else setNoDisplay(false);
	}, [visible]);

	const style = noDisplay ? { display: "none" } : null;
	return (
		<Animated
			animationIn={"slideInLeft"}
			animationOut={"slideOutLeft"}
			isVisible={visible}
			style={style}
			{...rest}
		>
			{children}
		</Animated>
	);
}

function makeAnimated(
	Component,
	animationIn,
	animationOut,
	animationInDuration,
	animationOutDuration,
	disappearOffset
) {
	return function ({ open, className, ...props }) {
		return (
			<AnimatedVisibility
				visible={open}
				animationIn={animationIn}
				animationOut={animationOut}
				animationInDuration={animationInDuration}
				animationOutDuration={animationOutDuration}
				disappearOffset={disappearOffset}
				className={className}
			>
				<Component {...props} />
			</AnimatedVisibility>
		);
	};
}

export function makeAnimationSlideLeft(Component) {
	return makeAnimated(Component, "slideInLeft", "slideOutLeft", 400, 500, 200);
}
