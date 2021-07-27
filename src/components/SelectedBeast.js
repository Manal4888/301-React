import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col  from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

class SelectedBeasts extends React.Component {

  
  render() {
    return (
     
      <>

        {
            <div className='Modelbasic'>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <img src={this.props.imageUrl}/>
                            <p> {this.props.description}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button  variant="secondary">Close</Button>
                            {/* <Button variant="primary">Save changes</Button> */}
                        </Modal.Footer>
                    </Modal.Dialog>
        
        
      
            </div>
        }




      </>
    )
  }
}
export default SelectedBeasts;