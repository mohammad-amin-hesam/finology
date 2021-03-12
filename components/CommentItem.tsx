import React from "react";
import styled from "styled-components";

const CommentItem: React.FC = () => {
	return (
		<CommentItemBox image="/images/people/david-campion.jpg">
			<div className="comment-item-top">
				<div className="comment-item-avatar"></div>
				<div className="comment-item-name">
					<h4>David Champion</h4>
					<span>CEO of ICloud</span>
				</div>
			</div>
			<div className="comment-item-bottom">
				<p>
					"System is excellent. It has made my system user experience to become
					on of the easiest!"
				</p>
			</div>
		</CommentItemBox>
	);
};

const CommentItemBox = styled.div<{ image: string }>(({ image }) => {
	return `
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 3px 4px 1px #99999930;
    border-radius 4px;
    margin: 15px 30px 15px 10px;
    .comment-item-top {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
      .comment-item-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .comment-item-name {
        h4 {
          color: #5D5D5D;
        }
        span {
          font-weight: 200;
          font-size: .8rem;
          color: #5D5D5D;
        }
      }
    }
    .comment-item-bottom {
      p {
        font-size: .9rem;
        color: #5D5D5D;
        font-weight: 600;
      }
    }
  `;
});

export default CommentItem;
