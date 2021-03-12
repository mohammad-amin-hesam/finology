import React from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Title from "./Title";

const Comments = () => {
	return (
		<CommentsBox>
			<div className="container">
				<Title title="What other people say about our service" />
			</div>
			<CommentList />
		</CommentsBox>
	);
};

const CommentsBox = styled.section(() => {
	return `
    margin-top: 70px;
  `;
});

export default Comments;
