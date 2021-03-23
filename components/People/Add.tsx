import React from "react";
import styled from "styled-components";
import PeopleForm from "./PeopleForm";

export interface AddProps {
	open: boolean;
	handleClose: () => void;
	id?: string;
}

const Add: React.FC<AddProps> = ({ open, handleClose, id }) => {
	const content = React.useRef<HTMLDivElement>(null);

	const handleClickOut = (e) => {
		if (content.current.contains(e.target)) return;
		handleClose();
	};

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [open]);

	if (!open) return null;

	return (
		<StyledAdd onClick={handleClickOut}>
			<div className="content" ref={content}>
				<div className="add-content-header">
					<h3>{id ? "Edit people" : "Add people"}</h3>
					<div className="menu-close" onClick={() => handleClose()}>
						<div></div>
						<div></div>
					</div>
				</div>
				<PeopleForm handleClose={handleClose} id={id} />
			</div>
		</StyledAdd>
	);
};

const StyledAdd = styled.div(
	({
		theme: {
			colors: { primary },
		},
	}) => {
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
      width: 370px;
      border-radius: 8px;
      box-shadow: 0px 0px 23px 9px #3f3f3f33;
      .add-content-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        h3 {
          color: ${primary};
          margin-top: 5px;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .menu-close {
          cursor: pointer;
          margin-bottom: 14px;
          margin-right: 14px;
          margin-left: 14px;
          div {
            height: 20px;
            width: 2px;
            background-color: ${primary};
            &:first-of-type {
              transform: rotate(45deg) translate(14px, 14px);
            }
            &:last-of-type {
              transform: rotate(135deg);
            }
          }
        }
      }
    }
  `;
	}
);

export default Add;
