import React, { useEffect, useState } from 'react'
import { getDetailPokemons } from '../../controller/PokemonController'
import { Button, Row } from '../../globalStyles'
import { getRandom } from '../../utils/RenderUtils'
import { ButtonWrapper } from '../MainContent/MainContentStyles'
import { Card, ImageCard, TitleCard } from './PokeCardStyles'

const PokeCard = () => {
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        setLoading(true);
        const idPoke = getRandom(1, 200);
        getDetailPokemons(idPoke).then(result => {
            setPokemon(result);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <>
            {!loading ? (
                <Card>
                    <Row>
                        <TitleCard >{pokemon?.name}</TitleCard>
                    </Row>
                    <Row>
                        <ImageCard src={pokemon.sprites?.other['official-artwork'].front_default} />
                    </Row>
                    <Row>
                        <ButtonWrapper>
                            <Button onClick={() => getPokemon()}>Find Another</Button>
                        </ButtonWrapper>
                    </Row>
                </Card>
            ) : null}


        </>
    )
}

export default PokeCard
