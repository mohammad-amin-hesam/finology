import React from "react";
import styled from "styled-components";
import { Animated, AnimationString } from "react-animated-css";
import useScroll from "../hooks/useScroll";

interface UxSectionProps {
	animationLeftIn: AnimationString;
	animationLeftOut: AnimationString;
	animationRightIn: AnimationString;
	animationRightOut: AnimationString;
	title: string;
	topDesc: string;
	bottomDesc?: string;
	direction: "rtl" | "ltr";
	imgSrc: string;
}

const UxSection: React.FC<UxSectionProps> = (props) => {
	const { ref: uxRef, memoizeBoolean: memoizeVisible } = useScroll();
	const {
		animationLeftIn,
		animationLeftOut,
		animationRightIn,
		animationRightOut,
		direction = "ltr",
		imgSrc,
		title,
		topDesc,
		bottomDesc,
	} = props;

	return (
		<UxSectionBox ref={uxRef} direction={direction}>
			<div className="container">
				<div className="row">
					<div className="col-7 ux-image">
						<Animated
							animationIn={animationLeftIn}
							animationOut={animationLeftOut}
							isVisible={memoizeVisible}
						>
							<img src={imgSrc} alt="content image" />
						</Animated>
					</div>
					<div className="col-5 ux-content">
						<Animated
							animationIn={animationRightIn}
							animationOut={animationRightOut}
							isVisible={memoizeVisible}
						>
							<div className="ux-content-box">
								<h2>{title}</h2>
								<p>{topDesc}</p>
								<p>{bottomDesc}</p>
							</div>
						</Animated>
					</div>
				</div>
			</div>
		</UxSectionBox>
	);
};

type UxSectionBoxProps = { direction: "ltr" | "rtl" };

const UxSectionBox = styled.section<UxSectionBoxProps>((props) => {
	const {
		theme: {
			colors: { primary, tertiary },
		},
		direction,
	} = props;

	return `
    margin-top: 130px;
    overflow: hidden;
    .ux-image {
      img {
        max-width: 100%;
      }
    }
    .row {
      flex-direction: ${direction === "ltr" ? "row" : "row-reverse"};
    }
    .ux-content {
      align-self: center;
      display: flex;
      justify-content: center;
      .ux-content-box {
        h2 {
          color: ${primary};
          font-size: 1.8rem;
          max-width: 310px;
          margin-bottom: 20px;
        }
        p {
          max-width: 430px;
          color: ${tertiary};
          line-height: 2;
        }
      }
    }
  `;
});

export default UxSection;
