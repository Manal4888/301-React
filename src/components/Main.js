import React from 'react';
import HornedBeasts from './HornedBeasts';

import UniWhalImage from './assets/Images/UniWhal.jpg'
import UniLegoImage from './assets/Images/UniLego.jpg'
import CeraImage from './assets/Images/Cera.png'
import BasicallyImage from './assets/Images/Basically a unicorn.jpg'
import RhinoImage from './assets/Images/Rhino Family.jpg'
import UnicornHeadImage from './assets/Images/Unicorn Head.jpg'

class Main extends React.Component {
  
  
  render() {
    return ( 
    <>
       <div className='img1'>
       <HornedBeasts name={'UniWhal'} imageUrl={UniWhalImage}description={'A unicorn and a narwhal nuzzling their horns'}/>
       </div>

      <div className='.img2'> 
      <HornedBeasts name={'UniLego'} imageUrl={UniLegoImage}description={'Lego figurine dressed in a unicorn outfit'}/>
      </div>
     
      <HornedBeasts name={'Cera'} imageUrl={CeraImage}description={'Three horns but still, horns. And who doesnt like The Land Before Time?'}/>
      <HornedBeasts name={'Basically'} imageUrl={BasicallyImage}description={'A narwhal is basically a unicorn after all, right?'}/>
      <HornedBeasts name={'Rhino'} imageUrl={RhinoImage}description={'Mascots have to get their costumes somewhere'}/>
      <HornedBeasts name={'UnicornHead'} imageUrl={UnicornHeadImage }description={'Someone wearing a creepy unicorn head mask'}/> 
       

    </>
    )
     
  }
  
};

export default Main;