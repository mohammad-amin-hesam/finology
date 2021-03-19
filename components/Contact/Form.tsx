import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const selectValues = ["value1", "value2", "value3", "value4"];

const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	message: Yup.string()
		.min(2, "Too Short!")
		.max(1000, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
});

const Form = () => {
	const [select, setSelect] = useState<string>("");
	const [selectError, setSelectError] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);

	const selectRef = React.useRef<HTMLDivElement>(null);

	const handleSelectChange = (item: string): void => {
		setSelect(item);
	};

	const outClick = (e): void => {
		if (selectRef.current?.contains(e.target)) return;
		setOpen(false);
	};

	React.useEffect(() => {
		window.addEventListener("click", outClick, true);
		return () => {
			window.removeEventListener("click", outClick);
		};
	}, []);

	return (
		<Formik
			initialValues={{ email: "", name: "", message: "" }}
			validationSchema={ContactSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSelectError("");
				if (!select.trim()) {
					setSelectError("Required");
					return;
				}
				alert(JSON.stringify({ ...values, select }, null, 2));
				setTimeout(() => {
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<StyledForm onSubmit={handleSubmit}>
					<div className="form-item">
						<label htmlFor="name">Name</label>
						<input
							type="name"
							name="name"
							id="name"
							className={`${errors.name && touched.name ? "input-error" : ""}`}
							placeholder="Enter your name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name && touched.name && (
							<span className="form-error">{errors.name}</span>
						)}
					</div>
					<div className="form-item">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							className={`${
								errors.email && touched.email ? "input-error" : ""
							}`}
							placeholder="Enter you email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && (
							<span className="form-error">{errors.email}</span>
						)}
					</div>
					<div className="form-item">
						<label>Subject</label>
						<div
							className={`form-select`}
							ref={selectRef}
							onClick={() => setOpen(!open)}
						>
							<div
								className={`form-select-title ${
									selectError ? "input-error" : ""
								} ${select ? "form-selected" : ""}`}
							>
								<span>{select ? select : "Please select you subject"}</span>
								<img src="/images/icons/arrow-bottom.svg" />
							</div>
							{open && (
								<div className="form-select-box">
									{selectValues.map((item) => {
										return (
											<div
												key={item}
												onClick={() => handleSelectChange(item)}
												className="form-select-item"
											>
												{item}
											</div>
										);
									})}
								</div>
							)}
						</div>
						{selectError && <span className="form-error">{selectError}</span>}
					</div>
					<div className="form-item">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.message}
							className={`${
								errors.message && touched.message ? "input-error" : ""
							}`}
							placeholder="Write you message here"
						/>
						{errors.message && touched.message && (
							<span className="form-error">{errors.message}</span>
						)}
					</div>
					<div className="form-button">
						<button type="submit" disabled={isSubmitting}>
							Send
						</button>
					</div>
				</StyledForm>
			)}
		</Formik>
	);
};

const StyledForm = styled.form(
	({
		theme: {
			colors: { primary },
		},
	}) => {
		return `
		border-radius: 5px;
		padding: 30px 30px 20px;
		background-color: #fff;
		width: 430px;
		box-shadow: 0px 14px 24px 2px #e4e4e4;
		height: calc(100% + 30px);
		z-index: 1000;
		transform: scale(1.1) translateY(-15px);
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
		.form-button {
			display: flex;
			justify-content: flex-end;
			button {
				background-color: ${primary};
				color: #fff;
				font-size: .7rem;
				font-family: 'Nunito' !important;
				font-weight: bold;
				width: 130px;
				height: 30px;
				border-radius: 4px;
			}
		}
		.form-error {
			color: #F32D13;
			font-size: .7rem;
		}
		.input-error {
			border-color: #f32d13 !important;
		}
	`;
	}
);

export default Form;
