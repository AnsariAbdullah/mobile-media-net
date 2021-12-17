import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.links{
    display: flex;
		ul{
			list-style: none;
			display: flex;
		}
	}
`

const Header = () => {
	return (
		<HeaderWrapper>
			<p className="logo">Sitename</p>
			<div className="links">
				<ul>
					<li>feature phone</li>
					<li>accessories</li>
					<li>wearable tech</li>
					<li>popular brands</li>
					<li>resources</li>
				</ul>
			<p>Glass</p>
			</div>
		</HeaderWrapper>
	);
}
 
export default Header;