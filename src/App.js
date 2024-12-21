import './App.css';
import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import ParticlesBg from 'particles-bg'
import FaceRecognation from './components/FaceRecognation/FaceRecognation.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';





const returnClarifiJsonRequest = (imageUrl) => {
  const PAT = '27dc7bf24b9946d196ff01825d2e2ca8';
  const USER_ID = '71rbfh6gtwqz';
  const APP_ID = 'my-app';
  // Change these to whatever model and image URL you want to use
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });


  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}





class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn :false,
    }
  }



  onInputCahnege = (event) => {
    this.setState({ input: event.target.value });
  }


  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })

fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs" , returnClarifiJsonRequest(this.state.input))
    .then(response => response.json())
    .then(response => {
        console.log('hi', response);
        if (response) {
            fetch('http://localhost:3000/image', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.state.user.id
                })
            })
            .then(response => response.json())
            .then(count => {
                this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
    });
    
} 
/* fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifiJsonRequest(this.state.input))
      .then(response => response.json())
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        },
        function (err) {

        }

      )
    
    */


  


onRouteChange = (route) => {
  if (route === 'signout') {
    this.setState({isSignedIn : false})
  }else if (route === 'home') {
  this.setState({isSignedIn : true})
  }
  this.setState({route :route})
}



  render() {
    const { isSignedIn , imageUrl , route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home' ? 
        <div >
            <Logo />
            <Rank />
            <ImageLinkForm onInputCahnege={this.onInputCahnege}
              onButtonSubmit={this.onButtonSubmit} />
            {/* Adding Particles Background */}
            <ParticlesBg type="cobweb" bg={true} />
            {/*   other style types to use: 
      "color" "ball" "lines" "thick" "circle" "cobweb" "polygon" "square" "tadpole" "fountain" "random" "custom"}*/}

            <FaceRecognation imageUrl={imageUrl} />
          </div>
          :
          (route === 'signIn' ?
             <SignIn onRouteChange={this.onRouteChange}/> :
             <Register onRouteChange={this.onRouteChange} />
            )
          
        }
      </div>
    );
  }
}

export default App;
