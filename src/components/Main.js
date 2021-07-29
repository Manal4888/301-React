import React from 'react';
import HornedBeasts from './HornedBeasts';

import Row from 'react-bootstrap/Row';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
   
    }
  }
  
  


  render() {
    return (
<>
      
      <Row xs={1} md={3} className="g-4">
          {
            this.state.data.map(item => {
              return (
                <HornedBeasts
                  name={item.title}
                  imageUrl={item.image_url}
                  description={item.description}
                  handelOpen={this.props.handelOpen}
                  handelClose={this.props.handelClose}
                  getdata={this.props.getdata}
                />
              )
            })
          }
        </Row>
     
</>
    )

  }
}
;

export default Main;
