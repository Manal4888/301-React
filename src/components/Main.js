import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeasts name={'Angel'}/>
        <img src="https://thumbs.dreamstime.com/z/cute-unicorn-angel-vector-pony-child-cartoon-kawaii-animal-horse-horn-character-girly-doodles-fairytales-magic-illustration-173495869.jpg" width="300 px"></img>
        <HornedBeasts description={'Cute Unicorn angel vector pony child cartoon, Kawaii animal horse horn character, Girly doodles Fairytales magic'}/>
       
        <HornedBeasts name={'Jack'}/>
        <img src="https://thumbs.dreamstime.com/b/vector-illustration-cute-rhinoceros-cartoon-hand-drawn-flat-style-funny-animal-big-horn-animals-safari-jungle-191589149.jpg" width="300 px"></img>
        <HornedBeasts description={'Vector illustration of a cute rhinoceros in cartoon hand drawn flat style. A funny animal with a big horn'}/>
      </>
    );
  }
}

export default Main;