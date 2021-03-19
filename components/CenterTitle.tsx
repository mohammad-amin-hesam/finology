import React from "react";
import styled from "styled-components";

type CenterTitleType = {
	title: string;
};

const CenterTitle: React.FC<CenterTitleType> = ({ title, children }) => {
	return (
		<CenterTitleBox>
			<h3>{title}</h3>
			<div className="center-title-content">{children}</div>
		</CenterTitleBox>
	);
};

const CenterTitleBox = styled.section(
	({
		theme: {
			colors: { primary },
		},
	}) => {
		return `
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: ${primary};
      font-size: 1.5rem;
			margin-bottom: 30px;
			font-weight: 800;
    }
  `;
	}
);

export default CenterTitle;
