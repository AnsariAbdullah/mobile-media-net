import React from 'react';
import styled from 'styled-components';

const BreadCrumbsWrapper = styled.div`
	width: 1124px;
	margin: 0 auto;
	color: #737494;
	font-size: 14px;
  padding: 15px 0;
`

const BreadCrumbs = () => {
	return (
		<BreadCrumbsWrapper>
			Home/Feature Phones/Samsung Galaxy S8+
		</BreadCrumbsWrapper>
	);
}
 
export default BreadCrumbs;