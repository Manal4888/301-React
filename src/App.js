
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DataJSON from './components/assets/data.json';
import SelectedBeasts from './components/SelectedBeast';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
  
      show: false,
      name1:'',
      imageUrl1: '',
      description1:'',
    }
  }


  

handelOpen =()=>{
  this.setState({
    show: true 
  })
}

handelClose =()=>{
  this.setState({
    show: false 
  })
}


getdata=(name1,imageUrl1,description1)=> {

   this.setState( {
    name1:name1,
    imageUrl1:imageUrl1,
    description1:description1,
  })
}
  
  render(){
    return<>
      <Header />
      <Main 
      data={DataJSON}
     
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