import React, { useEffect, useState } from 'react'
import { Column, Container, Row, Section, StyledLink } from '../globalStyles'
import { getMyPokemon } from '../Helpers/getMyPokemon';
import { PokeImg } from '../components/Emotion/EmotionComponents';
import { FeatureColumn, FeatureImageWrapper, FeatureName, ListPokeTextWrapper, ListPokeTitle, ListPokeWrapper } from '../components/ListPokemon/ListPokemonStyles';

const MyPokemon = () => {
    const [myPokemonList, setMyPokemonList] = useState([]);

    useEffect(() => {
        setMyPokemonList(getMyPokemon())
    }, [])

    const initial = {
        y: 40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };
    return (
        <Section inverse>
            <br />
            <br />
            <Container inverse>
                <ListPokeTextWrapper>
                    <ListPokeTitle>
                        List Pokemon
                    </ListPokeTitle>
                    <ListPokeWrapper>
                        {myPokemonList.map((pokemon, index) => (
                            <StyledLink to={`/myPokemon/${pokemon.uniqueID}`} key={index}>
                                <FeatureColumn
                                    initial={initial}
                                    animate={animate}
                                    transition={{ duration: 0.5 + index * 0.1 }}
                                >
                                    <FeatureImageWrapper>
                                        <PokeImg src={pokemon.detailPokemon.image} />
                                    </FeatureImageWrapper>
                                    <Row>
                                        <Column >
                                            <FeatureName>nickname: {pokemon.name}</FeatureName>
                                        </Column>
                                    </Row>
                                    <Row gap="1rem">
                                        {pokemon.detailPokemon.types.map((type, index) => (
                                            <Column key={index}>
                                                <FeatureName>{type.type.name}</FeatureName>
                                            </Column>
                                        ))}
                                    </Row>
                                </FeatureColumn>
                            </StyledLink>

                        ))}

                    </ListPokeWrapper>
                </ListPokeTextWrapper>
            </Container>
        </Section>
    )
}

export default MyPokemon
