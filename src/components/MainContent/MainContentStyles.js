import styled from '@emotion/styled'
import { Button } from '../../globalStyles';

export const MainContentSection = styled.section`
    height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: 5vh;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`
export const CoverVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`
export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`

export const FavPoke = styled.div`
    background-color: aqua;
    z-index: auto;
    position: relative;
`
// export const FavPoke = styled.div`
//   	width: 40%;
//     height: 500px;
// 	display: flex;
// 	justify-content: center;
// 	flex-flow: wrap;
// 	gap: 0.5rem;
//     align-items: center;
//     margin: auto;
//     margin-bottom: clamp(20px, 5vh, 220px);
//     /* background-color: white; */
//     /* position: relative;
//     &:before {
// 		content: "";
//         background-image: url("https://id.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png");
//         background-size: 100% auto;
//         width: 400px;
//         height: 400px;
//         position: absolute;
//         top: 15%;
//         left: 10%;
//         z-index: 1;
//         animation:spin 4s linear infinite;
// 	} */
// `;

export const MainContentButton = styled(Button)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;