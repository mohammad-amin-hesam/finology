import React from "react";
import styled from "styled-components";

interface TitleProps {
	title: string;
	circleColor?: string;
	iconUrl?: string;
	iconSize?: string;
}

const Title: React.FC<TitleProps> = (props) => {
	const {
		title,
		circleColor = "#F32D13",
		children,
		iconUrl = "/images/icons/heart.svg",
		iconSize,
	} = props;

	return (
		<TitleBox iconSize={iconSize} circleColor={circleColor}>
			<div className="title-left">
				<div className="title-box-icon d-none d-md-flex">
					<img src={iconUrl} />
				</div>
				<h2>{title}</h2>
			</div>
			{children}
		</TitleBox>
	);
};

const TitleBox = styled.div<{ circleColor?: string; iconSize?: string }>(
	(props) => {
		const {
			circleColor,
			theme: {
				colors: { primary },
			},
			iconSize,
		} = props;

		return `
		margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    .title-left {
			display: flex;
			flex: 1;
      align-items: flex-start;
      max-width: 420px;
      .title-box-icon {
        background-color: ${circleColor};
        box-shadow: 3px 4px 19px -7px ${circleColor};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          color: #fff;
          ${iconSize ? `width: ${iconSize};` : ""}
        }
      }
      h2 {
        flex: 1;
        color: ${primary};
        font-weight: bold;
        font-size: 1.5rem;
      }
		}
		@media only screen and (max-width: 600px) {
			.title-left {
				h2 {
					font-size: 1.2rem;
					margin-right: 15px;
				}
			}
		}
  `;
	}
);

export default Title;
