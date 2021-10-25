import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router';
import { ContentButton, ContentColumn, ContentRow, Heading, Img, ImgWrapper, Subtitle, TextWrapper, TopLine } from '../components/DetailPokemon/DetailPokemonStyles';
import ModalRelasePokemon from '../components/ModalRelase/ModalRelasePokemon';
import { Container, Section } from '../globalStyles';
import { getMyPokemon } from '../Helpers/getMyPokemon';

const MyPokemonDetail = () => {
    const initial = { opacity: 0, y: 30 };
    const animation = useAnimation();
    const [myPokemon, setMyPokemon] = useState([]);
    const [detailPoke, setDetailPoke] = useState([]);
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const { ref, inView } = useInView({ threshold: 0.2 });
    const { id } = useParams();
    const [showModalRelase, setShowModalRelase] = useState(false);

    useEffect(() => {
        const temp = getMyPokemon().filter((pokemon) => pokemon.uniqueID === id)
        setMyPokemon(temp[0])
        setDetailPoke(temp[0].detailPokemon)
        setTypes(temp[0].detailPokemon.types)
        setStats(temp[0].detailPokemon.stats)
    }, []);

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });
        }
    }, [inView, animation]);

    const handleRelasePoke = () => {

        setShowModalRelase(true)
    }
    return (
        <Section ref={ref}>
            <Container>
                <ContentRow>
                    <ContentColumn>
                        <TextWrapper>
                            <TopLine
                                initial={initial}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                animate={animation}
                            >
                                <div className="row">
                                    {types.map((item, index) => (
                                        <div className="col" key={index}>
                                            {item.type.name}
                                        </div>
                                    ))}
                                </div>
                            </TopLine>
                            <Heading
                                initial={initial}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                animate={animation}

                            >
                                {myPokemon.name}
                            </Heading>
                            <Subtitle
                                initial={initial}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                animate={animation}

                            >
                                {stats.map((item, index) => (
                                    <div className="row" key={index}>
                                        <div className="col">
                                            {item.stat.name}
                                        </div>
                                        <div className="col">
                                            : {item.base_stat}
                                        </div>
                                    </div>
                                ))}
                            </Subtitle>
                            <ContentButton
                                initial={initial}
                                transition={{ delay: 1, duration: 0.6 }}
                                animate={animation}
                                onClick={() => handleRelasePoke()}
                            >
                                Relase
                            </ContentButton>
                        </TextWrapper>
                    </ContentColumn>
                    <ContentColumn
                        initial={initial}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        animate={animation}
                    >
                        <ImgWrapper>
                            <Img
                                src={detailPoke.image}
                                whileHover={{ rotate: 2, scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            />
                        </ImgWrapper>
                    </ContentColumn>
                </ContentRow>
            </Container>
            <ModalRelasePokemon
                show={showModalRelase}
                onHide={() => setShowModalRelase(false)}
                mypoke={myPokemon}
            />
        </Section>
    )
}

export default MyPokemonDetail
