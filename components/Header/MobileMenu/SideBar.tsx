import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../links";

const SideBar: React.FC<{ setMenu: (bool: boolean) => void }> = ({
	setMenu,
}) => {
	const router = useRouter();

	return (
		<StyeldSidebar>
			<div className="sidebar-header">
				<div className="menu-logo">
					<img src="/images/logo.png" alt="Finology Logo" />
				</div>
				<div className="menu-close" onClick={() => setMenu(false)}>
					<img src="/images/icons/cancel.svg" />
				</div>
			</div>
			<nav className="sidebar-content">
				<ul>
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
				</ul>
			</nav>
		</StyeldSidebar>
	);
};

const StyeldSidebar = styled.div(
	({
		theme: {
			colors: { primary, secondary },
		},
	}) => {
		return `
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url(/images/mobile/mobile-rounded-001.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: -100px 128%;
    background-color: ${primary};
    z-index: 1000000000000;
    overflow-y: auto;
    padding: 30px;
    .sidebar-header {
      display: flex;
      justify-content: space-between;
      img {
        max-width: 80px;
      }
    }
    .menu-close {
      cursor: pointer;
      img {
        width: 20px;
      }
    }
    .sidebar-content {
      ul {
        margin: 30px 0;
        li {
          margin-bottom: 20px;
          a {
            color: #fff;
            font-weight: bold;
            font-size: 1.1rem;
          }
        }
        .active-link {
          a {
            color: ${secondary} !important;
          }
        }
      }
    }
  `;
	}
);

export default SideBar;
