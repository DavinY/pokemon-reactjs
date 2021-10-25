import styled from '@emotion/styled'
import { motion } from 'framer-motion';
export const ListPokeTextWrapper = styled.div`
    position: relative;
    padding: 0 0 20px;
    margin-bottom: 2rem;
	/* background-color: black; */
`
export const ListPokeTitle = styled.div`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`

export const ListPokeWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	/* background-color: yellow; */

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		/* grid-row-gap: 3rem; */
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	background: #f3f3f3;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin: auto;
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;

	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	/* text-align: center; */
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;


export const ButtonLoadMore = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? '#0c4577' : 'white')};

	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${({ inverse }) => (inverse ? '#0c4577' : 'white')};
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: ${({ inverse }) => (inverse ? 'white' : '#0c4577')};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'black' : 'white')};
	}
`

