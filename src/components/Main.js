import React from 'react';
import HornedBeasts from './HornedBeasts';
import DataJSON from './assets/data.json';
// import CardColumns  from 'react-bootstrap/CardColumns';
import Row  from 'react-bootstrap/Row';
// import UniWhalImage from './assets/Images/UniWhal.jpg'
// import UniLegoImage from './assets/Images/UniLego.jpg'
// import CeraImage from './assets/Images/Cera.png'
// import BasicallyImage from './assets/Images/Basically a unicorn.jpg'
// import RhinoImage from './assets/Images/Rhino Family.jpg'
// import UnicornHeadImage from './assets/Images/Unicorn Head.jpg'

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Data: DataJSON
    }
  }
  render() { 
      return(

      
       
        
      <div>
        <Row xs={1} md={3} className="g-4">
        {
          this.state.Data.map(item => {
            return (
              <HornedBeasts
                name={item.title}
                imageUrl={item.image_url}
                // description={item.description}
              />
            )
          })
        }
        </Row>
      </div>

)

}
}
;

export default Main;

{/* <div className='img1'>
       <HornedBeasts name={'UniWhal'} imageUrl={UniWhalImage}description={'A unicorn and a narwhal nuzzling their horns'}/>
       </div>

      <div className='.img2'> 
      <HornedBeasts name={'UniLego'} imageUrl={UniLegoImage}description={'Lego figurine dressed in a unicorn outfit'}/>
      </div>
     
      <HornedBeasts name={'Cera'} imageUrl={CeraImage}description={'Three horns but still, horns. And who doesnt like The Land Before Time?'}/>
      <HornedBeasts name={'Basically'} imageUrl={BasicallyImage}description={'A narwhal is basically a unicorn after all, right?'}/>
      <HornedBeasts name={'Rhino'} imageUrl={RhinoImage}description={'Mascots have to get their costumes somewhere'}/>
      <HornedBeasts name={'UnicornHead'} imageUrl={UnicornHeadImage }description={'Someone wearing a creepy unicorn head mask'}/> 
        */}