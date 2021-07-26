import React from'react';


class HornedBeasts extends React.Component{
  render(){
    return(<>
       <h2 className='name'>{this.props.name}</h2>
       <p className='dicription'>{this.props.description}</p>
        </>
  
    )
  }
}
export default HornedBeasts;