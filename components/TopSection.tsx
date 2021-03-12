import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import TopSectionContent from "./TopSectionContent";

const TopSection: React.FC = () => {
	return (
		<TopSectionBox>
			<div className="container top-section-container">
				<Header />
				<TopSectionContent />
			</div>
		</TopSectionBox>
	);
};

const TopSectionBox = styled.div((props) => {
	const {
		theme: {
			colors: { primary },
		},
	} = props;

	return `
		min-height: 590px;
		background-color: ${primary};
		background-repeat: no-repeat;
		background-image: url(/images/top-section/banner-rounded-001.svg), url(/images/top-section/banner-rounded-002.svg);
		background-position: -50px 195px, 117% 200px;
		background-size: 30%, 25%;
		.top-section-container {
			position: relative;
		}
  `;
});

export default TopSection;
