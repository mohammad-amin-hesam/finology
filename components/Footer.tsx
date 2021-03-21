import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-logo">
						<img src="/images/logo.png" alt="Finology logo" />
						<h2>Easy Work</h2>
					</div>
					<div className="d-flex">
						<div className="footer-address">
							<h4>Address</h4>
							<p>
								51-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala
								Lampur, Wilayah Persekutuan Kuala Lumpur
							</p>
						</div>
						<div className="footer-contact">
							<div className="footer-contact-phone">
								<h4>Contact</h4>
								<p>03-7451 5283</p>
							</div>
							<div className="footer-contact-fax">
								<h4>Fac</h4>
								<p>03-7451 5283</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer(() => {
	return `
    background-color: #141471;
    background-image: url(/images/footer/footer-rounded-001.svg), url(/images/footer/footer-rounded-002.svg);
    background-repeat: no-repeat;
    background-position: -50px -20px,116% 20%;
    background-size: 31%,23%;
		.footer-wrapper {
			min-height: 170px;
			display: flex;
			align-items: center;	
			.footer-logo {
				display: flex;
				align-items: center;
				margin-right: 120px;
				img {
					max-width: 70px;
				}
				h2 {
					color: #fff;
					font-size: 1.4rem;
					margin-left: 20px;
				}
			}
			.footer-address {
				max-width: 180px;
				margin-right: 80px;
			}
			.footer-contact {
				flex: 1;
			}
			.footer-address, .footer-contact {
				h4, p {
					color: #fff;
					font-size: .9rem;
				}
				p {
					font-size: .78rem;
					font-weight: 200;
					margin-bottom: 15px;
				}
			}
			@media only screen and (max-width: 786px) {
				justify-content: space-between;
				.footer-address, .footer-logo {
					margin-right: 15px;
				}
				.footer-address, .footer-logo, .footer-contact {
					flex: initial !important;
				}
			}
			@media only screen and (max-width: 562px) {
				min-height: auto;
				padding-top: 30px;
				padding-bottom: 30px;
				flex-direction: column;
				.footer-logo {
					margin-bottom: 30px;
				}
			}
		}
  `;
});

export default Footer;
