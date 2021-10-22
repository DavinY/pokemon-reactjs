import React from 'react'
import { Container, MainHeading, Row } from '../../globalStyles'
import PokeCard from '../PokeCard/PokeCard'
import { CoverVideo, MainContentSection } from './MainContentStyles'

const MainContent = () => {

    return (
        <MainContentSection>
            <CoverVideo src="./assets/vidBG.mp4" autoPlay muted loop />
            <Container>
                <MainHeading>Find Your Favorite Pokemon</MainHeading>
                <Row justify="space-between" margin="1rem" wrap="wrap">
                    <PokeCard />
                </Row>
            </Container>
        </MainContentSection>
    )
}

export default MainContent
