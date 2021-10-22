import { DetailWrapper, PokeImg, ThumbContainer } from "./emotion/EmotionComponents"

const PokemonCard = ({ id, image, name, type, _callback }) => {
    return (
        <ThumbContainer className={type}>
            <DetailWrapper>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </DetailWrapper>
            <PokeImg src={image} alt={name} />

        </ThumbContainer>
    )
}


export default PokemonCard