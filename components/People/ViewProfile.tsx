import React from "react";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import { User } from "../../redux/reducer/usersReducer";

const ViewProfile: React.FC<{
	id: string;
	open: boolean;
	handleClose: () => void;
}> = ({ id, open, handleClose }) => {
	if (!open) return null;

	const { item } = useFetch(id);

	const content = React.useRef<HTMLDivElement>(null);

	const handleClickOut = (e) => {
		if (content.current.contains(e.target)) return;
		handleClose();
	};

	return (
		<StyledViewProfile item={item} onClick={handleClickOut}>
			<div className="content" ref={content}>
				<div className="img"></div>
				<div className="right-content">
					<div className="content-header">
						<div className="header-left">
							<h4>{item.name}</h4>
							<span>{item.bio}</span>
						</div>
						<div className="close-btn" onClick={handleClose}>
							<img src="/images/icons/cancel2.svg" />
						</div>
					</div>
					<p>{item.description}</p>
				</div>
			</div>
		</StyledViewProfile>
	);
};

const StyledViewProfile = styled.div<{ item: User }>(({ item }) => {
	return `
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000030;
    overflow-y: auto;
    .content {
      background-color: #fff;
      overflow: hidden;
      max-width: 500px;
      margin: 15px;
      border-radius: 12px;
      box-shadow: 0px 0px 23px 9px #3f3f3f33;
      display: flex;
      align-items: center;
      .img {    
        width: 144px;
        height: 162px;
        background-image: url(${item.image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .right-content {
        flex: 1;
        align-self: flex-start;
        padding: 20px;
        .content-header {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          .close-btn {
            cursor: pointer;
            img {
              width: 15px;
            }
          }
          .header-left {
            h4 {
              font-size: .9rem;
              color: #686868;
            }
            span {
              font-size: .67rem;
              color: #979797;
            }
          }
        }
        p {
          font-size: .7rem;
          color: #979797;
          margin-bottom: 15px;
        }
      }
    }
  `;
});

export default ViewProfile;
