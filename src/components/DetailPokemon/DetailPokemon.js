import React, { useEffect, useState } from 'react'
import { Container, Section } from '../../globalStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ContentButton, ContentColumn, ContentRow, Heading, Img, ImgWrapper, Subtitle, TextWrapper, TopLine } from './DetailPokemonStyles';
import { getDetailPokemons } from '../../controller/PokemonController';
import { getRandom } from '../../utils/RenderUtils';
import ModalCatch from '../ModalCatch/ModalCatch';
import ModalFail from '../ModalFail/ModalFail';


const DetailPokemon = () => {

    const initial = { opacity: 0, y: 30 };
    const animation = useAnimation();

    const { ref, inView } = useInView({ threshold: 0.2 });

    const { id } = useParams();
    const [pokeDetail, setPokeDetail] = useState({});
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [showModalCatch, setShowModalCatch] = useState(false);
    const [failModalCatch, setFailModalCatch] = useState(false);

    useEffect(() => {
        getDetailPokemons(id).then(result => {
            setPokeDetail(result)
            setTypes(result.types)
            setStats(result.stats)
        })
    }, []);

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });
        }
    }, [inView, animation]);


    const handleCatchPoke = () => {
        const randData = getRandom(0, 1);
        if (randData == 1) {

            setShowModalCatch(true)
        } else {
            setFailModalCatch(true)
        }

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
                                {pokeDetail.name}
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
                                onClick={() => handleCatchPoke()}
                            >
                                catch
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
                                src={pokeDetail.image}
                                whileHover={{ rotate: 2, scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            />
                        </ImgWrapper>
                    </ContentColumn>
                </ContentRow>
            </Container>
            <ModalCatch show={showModalCatch}
                onHide={() => setShowModalCatch(false)}
                poke={pokeDetail}
            />
            <ModalFail
                show={failModalCatch}
                onHide={() => setFailModalCatch(false)}
                name={pokeDetail.name}
            />
        </Section>
    );
}

export default DetailPokemon
