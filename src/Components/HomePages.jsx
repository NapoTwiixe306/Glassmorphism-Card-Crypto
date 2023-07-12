import React from 'react'
import DescriptionsProps from './Props/DescriptionsProps'
import TitleProps from './Props/TitleProps'
import btc from './img/Bitcoin.png'
import eth from './img/eth.svg'
import bnb from './img/bn.svg'

const HomePages = () => {
  return (
    <div>
      <section class="section4">
        <div class="card-container">
            <div class="card">
              <img src={btc} alt="" />
              <TitleProps title={"Hello Wolrd"}/>
              <DescriptionsProps description={"Lorem"}/>
            </div>
            <div class="card">
              <img src={eth} alt="" />
              <TitleProps title={"Hello Wolrd"}/>
              <DescriptionsProps description={"Lorem"}/>
            </div>
            <div class="card">
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
