import React from 'react'
import DescriptionsProps from './Props/DescriptionsProps'
import TitleProps from './Props/TitleProps'

{/*IMAGES IMPORT*/}
import btc from './img/bitcoin.svg'
import eth from './img/eth.svg'
import bnb from './img/bn.svg'

{/*JSON IMPORT*/}
import data from './Text.json'
const HomePages = () => {
  return (
    <div>
      <section className="container">
        <div className="card-container">
            <div className="card">
              <img src={btc} alt="" />
              <TitleProps title={data.btc_title}/>
              <DescriptionsProps description={""}/>
            </div>
            <div className="card">
              <img src={eth} alt="" />
              <TitleProps title={data.eth_title}/>
              <DescriptionsProps description={""}/>
            </div>
            <div className="card">
              <img src={bnb} alt="" />
              <TitleProps title={data.bnb_title}/>
              <DescriptionsProps description={""}/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomePages;
