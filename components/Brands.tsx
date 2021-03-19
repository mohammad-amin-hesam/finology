import React from "react";
import styled from "styled-components";

const Brands: React.FC = () => {
	return (
		<BrandsBox>
			<div className="brand-item">
				<img src="/images/partners/apple.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/airbnb.png" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/google.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/nvidia.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/tesla.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/samsung.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/facebook.PNG" />
			</div>
			<div className="brand-item">
				<img src="/images/partners/microsoft.PNG" />
			</div>
		</BrandsBox>
	);
};

const BrandsBox = styled.div(() => {
	return `
		display: flex;
		.brand-item {
			margin: 0 15px;
		}
	`;
});

export default Brands;
