import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<div className="footer-logo">Footer logo</div>
			<div className="footer-address">Footer address</div>
			<div className="footer-contact">Footer contact</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer(
	({
		theme: {
			colors: { primary },
		},
	}) => {
		return `
    background-color: #141471;
    background-image: url(/images/footer/footer-rounded-001.svg), url(/images/footer/footer-rounded-002.svg);
    background-repeat: no-repeat;
    background-position: -40px -40px, 116% 20%;
    background-size: 36%, 23%;
    min-height: 170px;
  `;
	}
);

export default Footer;
