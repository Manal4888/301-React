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
    
      <HornedBeasts name={'UniWhal'} imageUrl={UniWhalImage}description={'A unicorn and a narwhal nuzzling their horns'}/>
      <HornedBeasts name={'UniLego'} imageUrl={UniLegoImage}description={'Lego figurine dressed in a unicorn outfit'}/>
      <HornedBeasts name={'Cera'} imageUrl={CeraImage}description={'Three horns but still, horns. And who doesnt like The Land Before Time?'}/>
      <HornedBeasts name1={'Basically'} imageUrl1={BasicallyImage}description={'A narwhal is basically a unicorn after all, right?'}/>
      <HornedBeasts name1={'Rhino'} imageUrl1={RhinoImage}description={'Mascots have to get their costumes somewhere'}/>
      <HornedBeasts name1={'UnicornHead'} imageUrl1={UnicornHeadImage }description={'Someone wearing a creepy unicorn head mask'}/> 
       

    </>
    )
     
  }
  
};

export default Main;