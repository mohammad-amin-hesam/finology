import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import CommentItem from "./CommentItem";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CommentList: React.FC = () => {
	return (
		<CommentListBox>
			<div className="comment-slider-container">
				<Carousel arrows={false} responsive={responsive} infinite={true}>
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
					<CommentItem />
				</Carousel>
			</div>
		</CommentListBox>
	);
};

const CommentListBox = styled.div(() => {
	return `
    overflow: hidden;
    margin-bottom: 50px;
    .comment-slider-container {
      transform: translate(105.5px, 0);
    }
  `;
});

export default CommentList;
