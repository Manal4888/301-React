import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends React.Component {

  

  

  render(){

    return (
     
      <>
  
        {
            <div >
                    <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img src={this.props.imageUrl} alt='img'style={{ width: '18rem' }}/>
                            <p> {this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handelClose}>
                            close
                        </Button>
                    </Modal.Footer>
                </Modal>

      
            </div>
        }

               

      </>
    )
  }

}
export default SelectedBeasts;