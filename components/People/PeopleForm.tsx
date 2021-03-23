import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { uniq_id } from "../../helpers/props";
import { useDispatch } from "react-redux";
import { addUser, editById, fetchById } from "../../redux/actions/users";
import { User } from "../../redux/reducer/usersReducer";
import useFetch from "../../hooks/useFetch";

const PeopleFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	description: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	position: Yup.string()
		.min(2, "Too Short!")
		.max(1000, "Too Long!")
		.required("Required"),
});

const PeopleForm: React.FC<{ id?: string; handleClose: () => void }> = ({
	id,
	handleClose,
}) => {
	const file = React.useRef<HTMLInputElement>(null);
	const [mainFile, setMainFile] = React.useState(null);
	const [fileError, setFileError] = React.useState<string>("");
	const { item } = useFetch(id, (data) => {
		setMainFile(data.image);
	});

	const dispatch = useDispatch();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setMainFile(URL.createObjectURL(file));
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					name: item.name,
					position: item.bio,
					description: item.description,
				}}
				onSubmit={(values) => {
					setFileError("");

					if (!mainFile) {
						setFileError("Image is required");
					}

					const data: User = {
						id: uniq_id(),
						image: mainFile,
						name: values.name,
						bio: values.position,
						description: values.description,
					};

					if (id) {
						dispatch(editById({ ...data, id: item.id }));
					} else {
						dispatch(addUser(data));
					}
					handleClose();
				}}
				enableReinitialize={true}
				validationSchema={PeopleFormSchema}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
					isSubmitting,
				}) => {
					return (
						<StyledPeopleForm image={mainFile} onSubmit={handleSubmit}>
							<div className="form-image">
								<label htmlFor="form-image-input">
									<img src="/images/icons/pencil.svg" />
								</label>
								<input
									type="file"
									id="form-image-input"
									onChange={handleFileChange}
									ref={file}
									accept="image/x-png,image/gif,image/jpeg"
								/>
								{!mainFile && (
									<div className="user-icon">
										<img src="/images/icons/user.svg" />
									</div>
								)}
							</div>
							{mainFile && (
								<div
									className="center-container"
									onClick={() => {
										setMainFile("");
										file.current.value = null;
									}}
								>
									<div className="delete-button">
										<div className="trash-icon">
											<img src="/images/icons/garbage.svg" />
										</div>
										<span className="delete-title">Delete Picture</span>
									</div>
								</div>
							)}
							<div className="center-container">
								{fileError && <span className="form-error">{fileError}</span>}
							</div>
							<div className="form-content">
								<div className="form-item">
									<label htmlFor="name">Name</label>

									<input
										type="name"
										name="name"
										id="name"
										className={`${
											errors.name && touched.name ? "input-error" : ""
										}`}
										placeholder="Enter name"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
									{errors.name && touched.name && (
										<span className="form-error">{errors.name}</span>
									)}
								</div>
								<div className="form-item">
									<label htmlFor="position">Position</label>
									<input
										type="position"
										name="position"
										id="position"
										className={`${
											errors.position && touched.position ? "input-error" : ""
										}`}
										placeholder="Enter position"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.position}
									/>
									{errors.position && touched.position && (
										<span className="form-error">{errors.position}</span>
									)}
								</div>
								<div className="form-item">
									<label htmlFor="description">Description</label>
									<textarea
										name="description"
										id="description"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.description}
										className={`${
											errors.description && touched.description
												? "input-error"
												: ""
										}`}
										placeholder="Enter description"
									/>
									{errors.description && touched.description && (
										<span className="form-error">{errors.description}</span>
									)}
								</div>
								<div className="form-buttons">
									<button type="button" onClick={() => handleClose()}>
										Cancel
									</button>
									<button>Save</button>
								</div>
							</div>
						</StyledPeopleForm>
					);
				}}
			</Formik>
		</>
	);
};

const StyledPeopleForm = styled.form<{ image: string }>(
	({
		theme: {
			colors: { primary },
		},
		image,
	}) => {
		return `
		padding: 0 20px;
		display: flex;
		align-items: stretch;
		flex-direction: column;
		.form-content {
			margin-top: 15px;
		}
		.form-item {
			display: flex;
			flex-direction: column;
			margin-bottom: 15px;
			label {
				color: ${primary};
				font-size: .8rem;
			}
			input, textarea {
				width: 100%;
				border: 1px solid #F0F0F0;
				border-radius: 4px;
				padding: 0 10px;
				color: ${primary};
				font-size: .85rem;
				&::placeholder {
					color: #CECECE;
					font-size: .7rem;
				}
			}
			input {
				height: 40px;
			}
			textarea {
				padding: 15px 10px;
				resize: none;
				height: 140px;
			}
			.form-select {
				position: relative;
				.form-select-title {
					display: flex;
					justify-content: space-between;
					align-items: center;
					color: #CECECE;
					font-size: .7rem;
					display: flex;
					color: #CECECE;
					font-size: .85rem;
					align-items: center;
					border: 1px solid #F0F0F0;
					cursor: pointer;
					height: 40px;
					border-radius: 4px;
					padding: 0 10px;
					img {
						transform: rotate(90deg);
						width: 15px;
					}
				}
				.form-select-box {
					position: absolute;
					top: 100%;
					left: 0;
					background-color: #fff;
					width: 100%;
					z-index: 10000;
					box-shadow: 0px 1px 7px -1px #99999980;
					.form-select-item {
						padding: 8px 15px;
						cursor: pointer;
						border-bottom: 1px solid #99999927;
						&:last-of-type {
							border-bottom: 0;
						}
						&:hover {
							background-color: #99999920;
						}
					}
				}
				.form-selected {
					color: ${primary};
					font-size: .85rem;
				}
			}
		}
		.form-error {
			color: #F32D13;
			font-size: .7rem;
		}
		.input-error {
			border-color: #f32d13 !important;
		}
		.form-image {
			width: 100px;
			height: 100px;
			background-image: url(${image});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			align-self: center;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #DCF0FF;
			position: relative;
			margin: 30px 0 15px;
			input {
				display: none;
			}
			label {
				position: absolute;
				bottom: 1px;
				right: 16px;
				width: 17px;
				height: 17px;
				background-color: #DCF0FF;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				box-shadow: 1px 1px 11px -2px #b0b0b0;
				cursor: pointer;
				z-index: 1000;
				img {
					width: 7px;
				}
			}
			.user-icon {
				img {
					width: 30px;
				}
			}
		}
		.form-buttons {
			display: flex;
			margin: 20px 0;
			justify-content: flex-end;
			button {
				font-family: 'Nunito' !important;
				background-color: ${primary};
				width: 120px;
				color: #fff;
				height: 30px;
				border-radius: 4px;
				font-weight: 600;
				font-size: .7rem;
			}
			button[type='button'] {
				background-color: transparent;
				color: #A3A3A3;
				margin-right: 20px;
				width: 60px;
			}
		}
		.center-container {
			display: flex;
			justify-content: center;
		}
		.delete-button {
			cursor: pointer;
			display: flex;
			align-items: center;
			.trash-icon {
				margin-right: 10px;
				width: 18px;
				height: 18px;
				background-color: #FDEEEE;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 8px;
				}
			}
			.delete-title {
				color: #F57A7A;
				font-size: .8rem;
				font-weight: 600;
			}
		}
	`;
	}
);

export default PeopleForm;
