import React from 'react';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col  from 'react-bootstrap/Col';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }
  incremental = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }

  Big = () => {
    return(
      <SelectedBeast
                name={this.props.name}
                imageUrl={this.props.imageUrl} 
                description={this.props.description}
      />

        )    }


  render() {
    return (
      //  <>
      //  /* <h2>{this.props.name}</h2>;
      //  <img 
      //  src={this.props.imageUrl}
      //  alt={this.props.name}
      //  title={this.props.name}/>


      <>

        <div className='cardsclass'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img onClick={this.incremental} variant="top" src={this.props.imageUrl} />
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                  favorites💖 :{this.state.favorites}
                
                </Card.Text>
                <Button onClick={this.Big} variant="primary"> Go somewhere</Button>
                {this.props.description}
              </Card.Body>
            </Card>
          </Col>
        </div>



        
      </>
    )
  }
}
export default HornedBeasts;