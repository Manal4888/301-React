
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DataJSON from './components/assets/data.json';
import SelectedBeasts from './components/SelectedBeast';
import Form from 'react-bootstrap/Form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:DataJSON,
      
      show: false,
      name1: '',
      imageUrl1: '',
      description1: '',
    }
  }




  handelOpen = () => {
    this.setState({
      show: true
    })
  }

  handelClose = () => {
    this.setState({
      show: false
    })
  }


  getdata = (name1, imageUrl1, description1) => {

    this.setState({
      name1: name1,
      imageUrl1: imageUrl1,
      description1: description1,
    })
  }

  numberHorns=(event)=>{
 
    
    let selectedhorns= event.target.value;
    let filteredData = DataJSON.filter(item =>{
      if(item.horns == selectedhorns)
      {
        return true;
      }
      if (selectedhorns =='all')
       return true
    })
  
    this.setState({
      data:filteredData,
    
   }) 
   
  
  }

  render() {
    return <>
      <Header />
      <Form.Label>Number of Horns?</Form.Label>
      <Form.Select aria-label="How many Horns" onChange={this.numberHorns}>
        
   
        <option value ="all">All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">WOW</option>
      </Form.Select>



      <Main
        data={this.state.data}

        handelClose={this.handelClose}
        handelOpen={this.handelOpen}
        getdata={this.getdata}

      />

      <SelectedBeasts
        show={this.state.show}
        name={this.state.name1}
        imageUrl={this.state.imageUrl1}
        description={this.state.description1}
        handelClose={this.handelClose}
        handelOpen={this.handelOpen}
      />

      <Footer />

    </>
  }
}

export default App;