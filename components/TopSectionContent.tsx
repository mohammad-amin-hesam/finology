import React from "react";
import styled from "styled-components";
import Parallax from "parallax-js";

const TopSectionContent: React.FC = () => {
	const scene = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		let ParallaxInstance = new Parallax(scene?.current);

		return () => {
			ParallaxInstance.destroy();
		};
	}, []);

	return (
		<TopSectionContentBox>
			<div className="row">
				<div className="col-6 development-content">
					<h1>Make development easy with us.</h1>
					<p>
						Doing development can never be easy, and it takes time and
						resources.
					</p>
					<p>We at EasyWork has the solution.</p>
				</div>
				<div className="col-6 development-figure">
					<div ref={scene}>
						<div data-depth="0.6">
							<img
								src="/images/top-section/banner.png"
								alt="Make development banner"
							/>
						</div>
					</div>
				</div>
			</div>
		</TopSectionContentBox>
	);
};

const TopSectionContentBox = styled.section(() => {
	return `
    margin-top: 40px;
    .development-figure {
      margin-top: 40px;
      margin-bottom: -100px;
      img {
        max-width: 460px;
      }
    }
    .development-content {
      color: #fff;
      h1 {
        font-size: 3.6rem;
        font-weight: 800;
      }
      p {
        font-weight: 400;
      }
    }
  `;
});

export default TopSectionContent;
