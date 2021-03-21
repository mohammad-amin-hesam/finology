import React from "react";
import styled from "styled-components";
import Form from "./Form";

const ContactForm: React.FC = () => {
	return (
		<ContactFormBox>
			<div className="contact-form">
				<Form />
			</div>
			<div className="map-section">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63745.34690758623!2d101.6812119715625!3d3.072183776153856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1616054324480!5m2!1sen!2s"
					allowFullScreen={false}
				></iframe>
			</div>
		</ContactFormBox>
	);
};

const ContactFormBox = styled.div(() => {
	return `
		padding: 0 15px;
		margin-top: 60px;
		width: 900px;
    display: flex;
    align-items: stretch;
    .map-section {
			flex: 1;
      iframe {
				width: 100%;
				height: 100%;
        border: 0;
      }
		}
		@media only screen and (max-width: 945px) {
			width: 800px;
		}

		@media only screen and (max-width: 845px) {
			width: 100%;
			flex-direction: column-reverse;
		}
  `;
});

export default ContactForm;
