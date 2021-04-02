import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteList, fetchUsers } from "../../redux/actions/users";
import { User } from "../../redux/reducer/usersReducer";
import Title from "../Title";
import Add from "./Add";
import ViewProfile from "./ViewProfile";

const People: React.FC = () => {
	const { users } = useSelector((state) => state);
	const [addOpen, setAddOpen] = React.useState<boolean>(false);
	const [id, setId] = React.useState<string>("");
	const [editAble, setEditable] = React.useState<boolean>(false);
	const [selectedArray, setSelectedArray] = React.useState<string[]>([]);
	const [userId, setUserId] = React.useState<string>("");
	const editIcon = React.useRef(null);
	const checkBox = React.useRef(null);

	const dispatch = useDispatch();

	React.useEffect(() => {
		// Get all
		dispatch(fetchUsers());
	}, []);

	const closeEditPanel = () => {
		setEditable(false);
		setSelectedArray([]);
	};

	const handleCheckedToggle = (id) => {
		if (selectedArray.includes(id)) {
			setSelectedArray(selectedArray.filter((el) => el !== id));
		} else {
			setSelectedArray([...selectedArray, id]);
		}
	};

	const handleView = (e, id) => {
		if (
			editIcon.current?.contains(e.target) ||
			checkBox.current?.contains(e.target)
		)
			return;
		setUserId(id);
	};

	return (
		<>
			<PeopleBox>
				<div className="container">
					<Title
						title="Our important people is listed here"
						circleColor="#F43CB7"
						iconUrl="/images/icons/happy-face.svg"
						iconSize="16px"
					>
						<div>
							{editAble ? (
								<div className="people-delete-container">
									<span className="people-cancel" onClick={closeEditPanel}>
										Cancel
									</span>
									<div
										className="people-delete"
										title="Delete"
										onClick={() => {
											dispatch(
												deleteList(selectedArray, () => {
													setEditable(false);
													setSelectedArray([]);
												})
											);
										}}
									>
										<img src="/images/icons/garbage.svg" />
									</div>
								</div>
							) : (
								<>
									<PeopleButton
										onClick={() => setEditable(true)}
										color="#F9CA3D"
										bg="#FFFEDF"
									>
										Edit
									</PeopleButton>
									<PeopleButton
										color="#8A5CC1"
										bg="#EEDEFF"
										onClick={() => setAddOpen(true)}
									>
										Add
									</PeopleButton>
								</>
							)}
						</div>
					</Title>
					<div className="container">
						<div className="people-card-list">
							{users.map((user: User, index) => {
								return (
									<PeopleCard
										key={index}
										img={user.image}
										activeChecked={selectedArray.includes(user.id)}
										onClick={(e) => handleView(e, user.id)}
									>
										{editAble ? (
											<div
												className="people-circle"
												onClick={() => handleCheckedToggle(user.id)}
												ref={editIcon}
											>
												<img src="/images/icons/checked.svg" />
											</div>
										) : (
											<div
												className="people-edit-circle"
												onClick={() => setId(user.id)}
												ref={checkBox}
											>
												<img src="/images/icons/pencil.svg" />
											</div>
										)}
										<div className="poeple-card-image"></div>
										<div className="poeple-card-content">
											<h4>{user.name}</h4>
											<span>{user.bio}</span>
										</div>
									</PeopleCard>
								);
							})}
						</div>
					</div>
				</div>
			</PeopleBox>
			<Add open={addOpen} handleClose={() => setAddOpen(false)} />
			<Add id={id} open={id !== ""} handleClose={() => setId("")} />
			<ViewProfile
				id={userId}
				open={userId !== ""}
				handleClose={() => setUserId("")}
			/>
		</>
	);
};

const PeopleCard = styled.div<{ img: string; activeChecked: boolean }>(
	({
		img,
		theme: {
			colors: { primary },
		},
		activeChecked,
	}) => {
		return `
		cursor: pointer;
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
			background-color: ${activeChecked ? primary : "#fff"};
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
				img {
					width: 14px;
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
