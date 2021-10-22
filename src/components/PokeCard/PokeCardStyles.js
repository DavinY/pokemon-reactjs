import styled from '@emotion/styled'


export const Card = styled.section`
    /* xs: phone - portrait */
    /* default. no media */
    width: 300px;
    /* height: 400px; */
    margin: auto;
    /* sm: phone - landscape */
    @media (min-width: 576px) {
        width: 200px;
        height: 300px;
    }

    /* md: tablet */
    @media (min-width: 768px) {
        width: 300px;
        height: 400px;
    }

    /* lg: desktop */
    @media (min-width: 992px) {
    }

    /* xl: wide */
    @media (min-width: 1200px) {
    }

    /* super wide */
    @media (min-width: 1440px) {
    }
`


export const TitleCard = styled.h2`
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    /* background-color: aqua; */
    /* background-image: url("https://id.portal-pokemon.com/play/resources/pokedex/img/advance_search_close_bg.png"); */
`

export const ImageCard = styled.img`
    width: 100%;
    
    /* margin: auto; */
	object-fit: cover;
	vertical-align: middle;
`