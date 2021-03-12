import React from "react";
import styled from "styled-components";

interface TitleProps {
	title: string;
	circleColor?: string;
}

const Title: React.FC<TitleProps> = (props) => {
	const { title, circleColor = "#F32D13" } = props;

	return (
		<TitleBox circleColor={circleColor}>
			<div className="title-box-icon"></div>
			<h2>{title}</h2>
		</TitleBox>
	);
};

const TitleBox = styled.div<{ circleColor?: string }>((props) => {
	const {
		circleColor,
		theme: {
			colors: { primary },
		},
	} = props;

	return `
    display: flex;
    align-items: flex-start;
    max-width: 420px;
    margin-bottom: 50px;
    .title-box-icon {
      background-color: ${circleColor};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 30px;
    }
    h2 {
      flex: 1;
      color: ${primary};
      font-weight: bold;
      font-size: 1.5rem;
    }
  `;
});

export default Title;
