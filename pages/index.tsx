import Head from "next/head";
import React from "react";
import Comments from "../components/Comments";
import TopSection from "../components/TopSection";
import UxSection from "../components/UxSection";

const Index = () => {
	return (
		<>
			<Head>
				<title>Finology</title>
			</Head>
			<TopSection />
			<UxSection
				animationLeftIn="bounceInLeft"
				animationLeftOut="fadeOut"
				animationRightIn="fadeIn"
				animationRightOut="fadeOut"
				direction="ltr"
				topDesc={`Lorem ipsum is simply dummy text of the printing and
									typesetting indystry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s.`}
				bottomDesc={`when an unknown printer took a galley of type and scrambled it
										to make a type specimen book. ti has survived not noly five
										centuries, but also the leap into electronic typesetting,
										remaining essentially unchanged.`}
				title={"We can give you our best user experience to your system"}
				imgSrc={"/images/ux/content-001.png"}
			/>
			<UxSection
				animationLeftIn="bounceInRight"
				animationLeftOut="fadeOut"
				animationRightIn="fadeIn"
				animationRightOut="fadeOut"
				direction="rtl"
				topDesc={`Lorem ipsum is simply dummy text of the printing and
									typesetting indystry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s.`}
				bottomDesc={`when an unknown printer took a galley of type and scrambled it
										to make a type specimen book. ti has survived not noly five
										centuries, but also the leap into electronic typesetting,
										remaining essentially unchanged.`}
				title={"Easy access. Wheneve, wherever you want"}
				imgSrc={"/images/ux/content-002.png"}
			/>
			<Comments />
		</>
	);
};

export default Index;
