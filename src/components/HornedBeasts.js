import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
 
   <Card  style={{ width: '18rem' }}>
  <Card.Img onClick={this.incremental} variant="top" src={this.props.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
    favorites💖 :{this.state.favorites}
    </Card.Text>
    <Button variant="primary"> Go somewhere</Button>
    
  </Card.Body>
   </Card>
   </div>



        <p>{this.props.description}</p>
      </>
    )
  }
}
export default HornedBeasts;