import React, { useEffect, useState } from 'react'
import { Column, Container, Row, Section, StyledLink } from '../../globalStyles'
import { ButtonLoadMore, FeatureColumn, FeatureImageWrapper, FeatureName, ListPokeTextWrapper, ListPokeTitle, ListPokeWrapper } from './ListPokemonStyles'


import { PokeImg } from '../Emotion/EmotionComponents';
import { getAllPokemons, getNextPoke } from '../../controller/PokemonController';
import { ButtonWrapper } from '../MainContent/MainContentStyles';

const ListPokemon = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

    useEffect(() => {
        getAllPokemons().then(result => {
            setAllPokemons(result.data)
            setLoadMore(result.next)
        })
    }, [])

    const getNextPokemon = () => {
        getNextPoke(loadMore).then(result => {
            setAllPokemons(currentList => currentList.concat(result.data))
            setLoadMore(result.next);
        })
    }

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
            <Container inverse>
                <ListPokeTextWrapper>
                    <ListPokeTitle>
                        List Pokemon
                    </ListPokeTitle>
                    <ListPokeWrapper>
                        {allPokemons.map((pokemon, index) => (
                            <StyledLink to={`/pokemon/${pokemon.id}`} key={index}>
                                <FeatureColumn
                                    initial={initial}
                                    animate={animate}
                                    transition={{ duration: 0.5 + index * 0.1 }}
                                >
                                    <FeatureImageWrapper>
                                        <PokeImg src={pokemon.image} />
                                    </FeatureImageWrapper>
                                    <Row>
                                        <Column >
                                            <FeatureName>{pokemon.name}</FeatureName>
                                        </Column>
                                    </Row>
                                    <Row gap="1rem">
                                        {pokemon.types.map((type, index) => (
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
                <Row>
                    <ButtonWrapper >
                        <ButtonLoadMore inverse onClick={() => getNextPokemon()}>
                            Load More
                        </ButtonLoadMore>
                        {/* <Button onClick={() => getNextPokemon()}>Load More</Button> */}
                    </ButtonWrapper>
                </Row>
            </Container>
        </Section>
    )
}

export default ListPokemon
