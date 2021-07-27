import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';
import DataJSON from './assets/data.json';
// import CardColumns  from 'react-bootstrap/CardColumns';
import Row  from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

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
                description={item.description}
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
