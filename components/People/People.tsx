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
					iconName="icon-smile"
					iconSize="20px"
				>
					Hello there
				</Title>
			</div>
		</PeopleBox>
	);
};

const PeopleBox = styled.div(() => {
	return ``;
});

export default People;
