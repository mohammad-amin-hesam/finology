import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { links } from "./links";
import { useRouter } from "next/dist/client/router";

const Header = () => {
	const router = useRouter();

	return (
		<HeaderBox>
			<div className="logo">
				<Link href="/">
					<a>
						<img src="/images/logo.png" alt="Finology logo" />
					</a>
				</Link>
			</div>
			<nav>
				<ul>
					{links.map((item) => {
						const active = item.href === router.pathname ? "active-link" : "";

						return (
							<li key={item.id} className={`${active}`}>
								{item.target !== "normal" ? (
									<a href={item.href} target={item.target}>
										{item.name}
									</a>
								) : (
									<Link href={item.href}>
										<a>{item.name}</a>
									</Link>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
			<div className="search-icon">
				<img src="/images/search.svg" alt="Search icon" />
			</div>
		</HeaderBox>
	);
};

const HeaderBox = styled.header((props) => {
	const {
		theme: {
			colors: { secondary },
		},
	} = props;

	return `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    .logo {
      img {
        max-width: 70px;
      }
    }
    nav {
      flex: 1;
      display: flex;
      justify-content: center;
      align-item: center;
      ul {
        display: flex;
        align-items: center;
        li {
          margin: 0 30px;
          a {
            color: #fff;
						font-weight: 600;
						font-size: .9rem;
          }
        }
        .active-link {
          a {
            color: ${secondary};
          }
        }
      }
    }
    .search-icon {
      img {
        width: 25px;
        cursor: pointer;
      }
    }
  `;
});

export default Header;
