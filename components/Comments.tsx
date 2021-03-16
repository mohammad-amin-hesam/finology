import React from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Title from "./Title";

const Comments: React.FC = () => {
	const carouselRef = React.useRef(null);

	const handleNext = (): void => {
		carouselRef.current?.next();
	};

	return (
		<CommentsBox>
			<div className="container">
				<Title title="What other people say about our service" iconSize="17px">
					<div className="right-arrow-icon" onClick={handleNext}>
						<img src="/images/icons/arrow-right.svg" />
					</div>
				</Title>
			</div>
			<CommentList carouselRef={carouselRef} />
		</CommentsBox>
	);
};

const CommentsBox = styled.section(() => {
	return `
		margin-top: 70px;
		.right-arrow-icon {
			background-color: #EEDEFF;
			cursor: pointer;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-right: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all .13s linear;
			&:hover {
				transform: scale(1.12);
        box-shadow: 3px 4px 25px -3px #EEDEFF;
			}
			img {
				width: 14px;
			}
		}
  `;
});

export default Comments;
