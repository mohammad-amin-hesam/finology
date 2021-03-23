import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import CommentItem, { CommentItemType } from "./CommentItem";

const list: CommentItemType[] = [
	{
		image: "/images/people/david-campion.jpg",
		name: "David Champion",
		bio: "CEO of ICloud",
		text:
			"System is excellent. It has made my system user experience to become on of the easiest!",
	},
	{
		image: "/images/people/gaetan-houssin.jpg",
		name: "David Frank va Hord",
		bio: "CEO of Marks.co",
		text:
			"I just wanted to share a quick not and let you know that you guys do a really good job.",
	},
	{
		image: "/images/people/sylvain-salomon.jpg",
		name: "Lucas Bond",
		bio: "BOD of Skyscanner",
		text:
			"Now it's almost like having a designer right I Just choose the page, make the change.",
	},
	{
		image: "/images/people/david-campion.jpg",
		name: "David Champion",
		bio: "CEO of ICloud",
		text:
			"System is excellent. It has made my system user experience to become on of the easiest!",
	},
	{
		image: "/images/people/gaetan-houssin.jpg",
		name: "David Frank va Hord",
		bio: "CEO of Marks.co",
		text:
			"I just wanted to share a quick not and let you know that you guys do a really good job.",
	},
	{
		image: "/images/people/sylvain-salomon.jpg",
		name: "Lucas Bond",
		bio: "BOD of Skyscanner",
		text:
			"Now it's almost like having a designer right I Just choose the page, make the change.",
	},
	{
		image: "/images/people/david-campion.jpg",
		name: "David Champion",
		bio: "CEO of ICloud",
		text:
			"System is excellent. It has made my system user experience to become on of the easiest!",
	},
	{
		image: "/images/people/gaetan-houssin.jpg",
		name: "David Frank va Hord",
		bio: "CEO of Marks.co",
		text:
			"I just wanted to share a quick not and let you know that you guys do a really good job.",
	},
	{
		image: "/images/people/sylvain-salomon.jpg",
		name: "Lucas Bond",
		bio: "BOD of Skyscanner",
		text:
			"Now it's almost like having a designer right I Just choose the page, make the change.",
	},
];

const responsive = {
	superLargeDesktop: {
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
		slidesToSlide: 2,
	},
	mobile: {
		breakpoint: { max: 564, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const CustomDot: React.FC = ({ onClick, ...rest }: any) => {
	const { active } = rest;
	return <Circle active={active} onClick={() => onClick()} />;
};

const CommentList: React.FC<{ carouselRef: React.LegacyRef<any> }> = ({
	carouselRef,
}) => {
	return (
		<CommentListBox>
			<div className="comment-slider-container">
				<Carousel
					keyBoardControl={true}
					responsive={responsive}
					infinite={true}
					arrows={false}
					ref={carouselRef}
					showDots
					customDot={<CustomDot />}
					slidesToSlide={3}
					dotListClass="comment-carousel-dots"
					containerClass="comment-carousel-container-class"
				>
					{list.map((item, index) => {
						return <CommentItem key={index} {...item} />;
					})}
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
			position: relative;
		}
		.comment-carousel-dots {
			bottom: 10px;
			margin-right: 105.5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.comment-carousel-container-class {
			padding-bottom: 50px;
		}
		@media only screen and (max-width: 700px) {
			.comment-slider-container {
				transform: translate(0, 0);
				padding-left: 15px;
			}

			.comment-carousel-dots {
				margin-right: 15px;
			}
		}
  `;
});

const Circle = styled.div<{ active: boolean }>(({ active }) => {
	return `
		width: 15px;
		height: 15px;
		margin: 0 7px;
		border-radius: 50%;
		background-color: ${active ? "#252584" : "#E0E0FE"};
		cursor: pointer;
	`;
});

export default CommentList;
