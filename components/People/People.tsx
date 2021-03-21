import React from "react";
import styled from "styled-components";
import Title from "../Title";

const People = () => {
	return (
		<PeopleBox>
			<div className="container">
				<Title
					title="Our important people is listed here"
					circleColor="#F43CB7"
					iconUrl="/images/icons/happy-face.svg"
					iconSize="16px"
				>
					<div>
						<PeopleButton color="#F9CA3D" bg="#FFFEDF">
							Edit
						</PeopleButton>
						<PeopleButton color="#8A5CC1" bg="#EEDEFF">
							Add
						</PeopleButton>
						{/* <div className="people-delete-container">
							<span className="people-cancel">Cancel</span>
							<div className="people-delete" title="Delete">
								<i className="icon-trash-empty"></i>
							</div>
						</div> */}
					</div>
				</Title>
				<div className="container">
					<div className="people-card-list">
						{[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
							return (
								<PeopleCard
									key={index}
									img="/images/people/darlene-chabrat.jpg"
								>
									<div className="people-circle">
										<img src="/images/icons/checked.svg" />
									</div>
									<div className="people-edit-circle">
										<img src="/images/icons/pencil.svg" />
									</div>
									<div className="poeple-card-image"></div>
									<div className="poeple-card-content">
										<h4>Marissa Lawren</h4>
										<span>Customer Support</span>
									</div>
								</PeopleCard>
							);
						})}
					</div>
				</div>
			</div>
		</PeopleBox>
	);
};

const PeopleCard = styled.div<{ img: string }>(
	({
		img,
		theme: {
			colors: { primary },
		},
	}) => {
		return `
		width: 180px;
		box-shadow: 0px 7px 12px 0px #1616161a;
		position: relative;
		border-radius: 5px;
		margin: 15px;
		overflow: hidden;
		.people-circle {
			border: 1px solid #DDDDDD;
			left: 10px;
		}
		.people-circle, .people-edit-circle {
			position: absolute;
			top: 10px;
			width: 20px;
			height: 20px;
			transition: all .2s linear;
			cursor: pointer;
			background-color: ${primary};
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 9px;
			}
		}
		.people-edit-circle {
			background-color: #DCF0FF;
			right: 10px;
		}
		.poeple-card-image {
			background-image: url(${img});
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			height: 194px;
		}
		.poeple-card-content {
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			h4 {
				color: #555555;
				font-weight: 600;
				font-size: .7rem;
				margin: 15px 0 10px;
			}
			span {
				font-size: .6rem;
				color: #B5B5B5;
				margin-bottom: 15px;
			}
		}
	`;
	}
);

const PeopleBox = styled.div(() => {
	return `
		margin-top: 130px;
		margin-bottom: 80px;
		.people-card-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
		.people-delete-container {
			display: flex;
			align-items: center;
			.people-cancel {
				font-size: .75rem;
				cursor: pointer;
				color: #AAAAAA;
				font-weight: bold;
				margin-right: 15px;
			}
			.people-delete {
				background-color: #FDEEEE;
				width: 30px;
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				cursor: pointer;
				${buttonHover}
				i {
					color: #F56E6F;
					font-size: .9rem;
				}
			}
		}
	`;
});

export const PeopleButton = styled.button<{ color: string; bg: string }>(
	({ color, bg }) => {
		return `
			background-color: ${bg};
			color: ${color};
			border-radius: 5px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin-left: 15px;
			font-size: .75rem;
			font-family: 'Nunito' !important;
			width: 70px;
			height: 35px;
			font-weight: bold;
			${buttonHover}
			@media only screen and (max-width: 560px) {
				font-size: .68rem;
				width: 60px;
				height: 30px;
			}
		`;
	}
);

export const buttonHover = `
	transition: all .2s linear;
	&:hover {
		transform: scale(1.09);
	}
`;

export default People;
