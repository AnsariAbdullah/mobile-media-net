import React from 'react';
import { colors } from '../../styles/variables';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
	box-shadow: 0px 5px 5px 0px rgba(150,150,150,0.75);
	.container{
		width: 1124px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: ${colors.dark};
		padding: 15px 30px;
		.logo-wrapper{
			font-size: 30px;
			font-weight: 800;
			text-transform: uppercase;
		}
		.links{
			display: flex;
			ul{
				list-style: none;
				display: flex;
				justify-content: center;
				align-items: center;
				li {
					font-size: 14px;
					margin-right: 30px;
					a{
						text-decoration: none;
						color: ${colors.white};
					}
					.link-btn{
						font-weight: 400;
						padding: 5px 20px;
						text-transform: capitalize;
						background: ${colors.orange}
					}
				}
			}
		}
		@media (max-width: 768px) {
			.mobile-menu{
				display: block;
			}
			.links{
				display: none
			}
		}
	}
`

const Header = () => {
	return (
		<HeaderWrapper>
			<div className="container">
				<div className="logo-wrapper">
					SITENAME
				</div>
				<div className="mobile-menu">
					<svg id="Group_14699" data-name="Group 14699" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
						<g id="Ellipse_611" data-name="Ellipse 611" fill="none" stroke="#fff" strokeWidth="1.5">
							<circle cx="17.5" cy="17.5" r="17.5" stroke="none"/>
							<circle cx="17.5" cy="17.5" r="16.75" fill="none"/>
						</g>
						<g id="left-arrow_1_" data-name="left-arrow (1)" transform="translate(14.666 12)">
							<g id="Group_4392" data-name="Group 4392">
								<path id="Path_13023" data-name="Path 13023" d="M107.539,5.882,102.43.773a.452.452,0,1,1,.64-.64L108.5,5.562a.452.452,0,0,1,0,.64l-5.429,5.429a.452.452,0,0,1-.64-.64Z" transform="translate(-102.298 0)" fill="#fff" stroke="#fff" strokeWidth="1"/>
							</g>
						</g>
					</svg>
				</div>
				<div className="links">
					<ul>
						<li>Feature phones</li>
						<li>Accessories</li>
						<li>Wearable Tech</li>
						<li>Popular Brands</li>
						<li>Resources</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="18.496" viewBox="0 0 18.5 18.496">
								<g id="search-svgrepo-com" transform="translate(0.25 0.2)">
									<g id="Group_14701" data-name="Group 14701" transform="translate(0 0.05)">
										<path id="Path_15086" data-name="Path 15086" d="M0,7.539a7.485,7.485,0,0,0,12.453,5.6l4.773,4.773a.452.452,0,0,0,.641-.638L13.091,12.5A7.487,7.487,0,1,0,0,7.539Zm14.075,0A6.586,6.586,0,1,1,7.489.953,6.6,6.6,0,0,1,14.075,7.539Z" transform="translate(0 -0.05)" fill="#637fff" stroke="#637fff" strokeWidth="0.5"/>
									</g>
								</g>
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</HeaderWrapper>
	);
}
 
export default Header;