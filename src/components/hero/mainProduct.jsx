import React from 'react';
import styled from 'styled-components';
import PhoneImage from '../../assets/phone.png';
import Meter from '../../assets/meter.png';
import { colors, Container } from '../../styles/variables';

const MainProductWrapper = styled.section`
	padding: 20px 80px 0;
	display: flex;
	position: relative;
	.phone{
	}
	.info{
		.details{
			.title-name{
				color: ${colors.dark};
				font-size: 20px;
				font-weight: 800;
				margin-bottom: 10px;
			}
			.stars-n-info{
				margin-bottom: 10px;
				.device-version{
					background: #f4f9fc;
					font-size: 12px;
					padding: 5px;
				}
			}

			.colors-option{
				margin-bottom: 10px;
				.color{
					display: inline-block;
					margin-right: 10px;
					width: 20px;
					height: 20px;
				}
			}

			.price-n-shop{
				margin-bottom: 10px;
				.price{
					color: ${colors.primary};
					font-weight: 400;
				}
				.shop-cta{
					padding: 10px 40px;
					border-radius: 30px;
					border: none;
					text-transform: uppercase;
					margin-left: 25px;
					font-size: 12px;
					color: ${colors.white};
					font-weight: 800;
					background: ${colors.primary};
				}
			}
		}
		.meter-wrapper{
			position: absolute;
			top: 20px;
    	right: 40px;
		}
	}
`

const MainProduct = () => {
	return (
		<Container>
			<MainProductWrapper>
				<div className="phone">
					<img src={PhoneImage} alt="samsung 8" />
				</div>
				<div className="info">

					<div className="details">
						<p className="title-name">Samsung Galaxy S8+</p>
						<div className="stars-n-info">4.5 <span className="device-version">Android 7.1 Nogut</span></div>
						<div className="colors-option">
							<div className="color" style={{background: '#4f4c66'}}></div>
							<div className="color" style={{background: '#b4a99c'}}></div>
							<div className="color" style={{background: '#0f0f12'}}></div>
						</div>
						<div className="price-n-shop">
							<span className="price">$ 199.99</span>
							<button className="shop-cta">Shop now</button>
						</div>
					</div>

					<div className="meter-wrapper">
						<img src={Meter} alt="" />
					</div>
				</div>
			</MainProductWrapper>
		</Container>
	);
}
 
export default MainProduct;