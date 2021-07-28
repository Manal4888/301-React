import React from 'react';
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast';
import DataJSON from './assets/data.json';
// import CardColumns  from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: DataJSON,
      name1:'',
      imageUrl1: '',
      description1:'',
    }
  }
  
  Select = () => {
    this.setState({
        name1:this.Data.item.title,
        imageUrl1: this.Data.item.imageUrl,
        description1:this.Data.item.description,
        
    })

return(
<SelectedBeast 


name={this.state.name1}
imageUr={this.state.imageUrl1}
description={this.state.description1}

/>

 
)
}





  render() {
    return (



      <div>
        <Row xs={1} md={3} className="g-4">
          {
            this.state.Data.map(item => {
              return (
                <HornedBeasts
                  name={item.title}
                  imageUrl={item.image_url}
                  description={item.description}
                  Big={this.Big}
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
