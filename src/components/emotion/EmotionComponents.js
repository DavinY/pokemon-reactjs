import styled from '@emotion/styled'


export const AppContainer = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && ' column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '3rem 0.5rem'
}))

export const PokemonContainer = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'cemter',
    justifyContent: 'center'
}))

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}

	> li:first-child {
		margin-left: auto;
	}
`;
export const AllContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
    align-items: center;
	justify-content: center;
    background-color: #071c2f;
    @media screen and (max-width: 960px) {
		background-color: #071c2f;
	}
`;

// export const AllContainer = styled.div(({
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center'
// }))



export const ThumbContainer = styled.div(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem 0',
    margin: '0.3rem',
    border: '1px solid #efefef',
    borderRadius: '0.2rem',
    minWidth: '160px',
    textAlign: 'center',
    boxShadow: '0 3px 15px rgba(0, 0, 0, 0.089)',
}))

export const DetailWrapper = styled.div(({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))


export const PokeImg = styled.img`
    width: 160px;
    height: 160px;
    /* background-image: url("https://id.portal-pokemon.com/play/resources/pokedex/img/random_center_bg.png"); */
    /* background-size: 100% auto; */
`

export const BtnLoadMore = styled.button(({
    background: '#f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x',
    borderRadius: '2px',
    border: '1px solid #c6c6c6',
    color: '#444',
    padding: '0.5rem 1.5rem',
    minWidth: '50%',
    marginTop: '1rem'
}))