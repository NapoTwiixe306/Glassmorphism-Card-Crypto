import React, { useState } from 'react';
import DescriptionsProps from './Props/DescriptionsProps';
import TitleProps from './Props/TitleProps';

{/*IMAGES IMPORT*/}
import btc from './img/bitcoin.svg';
import eth from './img/eth.svg';
import bnb from './img/bn.svg';

{/*JSON IMPORT*/}
import data from './Text.json';

const HomePages = () => {
    const [flippedCard, setFlippedCard] = useState(null);

    const handleCardFlip = (index) => {
        setFlippedCard(index === flippedCard ? null : index);
    };

    return (
        <div>
            <section className="container">
                <div className="card-container">
                    <div className="card test">
                        <div className="front">
                            <img src={btc} alt="" />
                            <TitleProps title={data.btc_title} />
                        </div>
                        <div className="back">
                            <TitleProps title={data.btc_title} />
                            <DescriptionsProps description={"hello"}/>

                        </div>
                    </div>
                    <div className="card">
                        <div className="front">
                            <img src={eth} alt="" />
                            <TitleProps title={data.eth_title} />
                        </div>
                        <div className="back">
                            <TitleProps title={data.eth_title} />
                            <DescriptionsProps description={"hello"}/>

                        </div>
                    </div>
                    <div className="card">
                        <div className="front">
                            <img src={bnb} alt="" />
                            <TitleProps title={data.bnb_title} />
                        </div>
                        <div className="back">
                            <TitleProps title={data.eth_title} />
                            <DescriptionsProps description={"hello"}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePages;
