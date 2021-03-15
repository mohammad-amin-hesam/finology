import React from "react";
import styled from "styled-components";

interface TitleProps {
	title: string;
	circleColor?: string;
	iconName?: string;
	iconSize?: string;
}

const Title: React.FC<TitleProps> = (props) => {
	const {
		title,
		circleColor = "#F32D13",
		children,
		iconName = "icon-heart",
		iconSize,
	} = props;

	return (
		<TitleBox iconSize={iconSize} circleColor={circleColor}>
			<div className="title-left">
				<div className="title-box-icon">
					<i className={iconName}></i>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    .title-left {
      display: flex;
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
        i {
          color: #fff;
          ${iconSize ? `font-size: ${iconSize};` : ""}
        }
      }
      h2 {
        flex: 1;
        color: ${primary};
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  `;
	}
);

export default Title;
