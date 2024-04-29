import React from 'react'
import vr from '../../assets/IMG/image-interactive.jpg'
import './vr.css'

export const Info = () => {
  return (
    <div className='vr'>
        <div className='virtual'>
        <img src={vr}/>
        </div>
        <div className='info'>
            <h1>The leader in interactive vr</h1>
            <p>Founded un 2011, loopstudio has been producing world-class virtual reality  projects for some oh the best 
                companies araound the globe. Our award-winning creations have transformed  bussinesses through digital experiences taht bind to their brand
            </p>
        </div>
    </div>
  )
}
