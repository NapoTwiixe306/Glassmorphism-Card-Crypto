import React from 'react'
import DescriptionsProps from './Props/DescriptionsProps'
import TitleProps from './Props/TitleProps'
import btc from './img/Bitcoin.png'
import eth from './img/eth.svg'
import bnb from './img/bn.svg'

const HomePages = () => {
  return (
    <div>
      <section className="section4">
        <div className="card-container">
            <div className="card">
              <img src={btc} alt="" />
              <TitleProps title={"Hello Wolrd"}/>
              <DescriptionsProps description={"Lorem"}/>
            </div>
            <div className="card">
              <img src={eth} alt="" />
              <TitleProps title={"Hello Wolrd"}/>
              <DescriptionsProps description={"Lorem"}/>
            </div>
            <div className="card">
              <img src={bnb} alt="" />
              <TitleProps title={"Hello Wolrd"}/>
              <DescriptionsProps description={"Lorem"}/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomePages
