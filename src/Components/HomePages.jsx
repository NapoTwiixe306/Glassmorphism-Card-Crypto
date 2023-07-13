import React from 'react'
import DescriptionsProps from './Props/DescriptionsProps'
import TitleProps from './Props/TitleProps'

{/*IMAGES IMPORT*/}
import btc from './img/Bitcoin.png'
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
              <DescriptionsProps description={data.btc_description.btc}/>
            </div>
            <div className="card">
              <img src={eth} alt="" />
              <TitleProps title={data.eth_title}/>
              <DescriptionsProps description={data.eth_description.eth}/>
            </div>
            <div className="card">
              <img src={bnb} alt="" />
              <TitleProps title={data.bnb_title}/>
              <DescriptionsProps description={data.bnb_description.bnb}/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomePages
