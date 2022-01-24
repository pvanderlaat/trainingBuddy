import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Container, Form, Navbar }  from 'react-bootstrap';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        workouts:[]
    }
}
  render() {
    return (
      <Container
        style={{
          padding: "5vh"
        }}
      >
            <Container
              style={{
                display: "flex",
                flexDirection: 'column',
                height:'10vh'
                // backgroundColor: 'green',
              }}
            >
              <Container
                style={{
                  width:'100%',
                  display: "flex",
                  // marginRight: '25%',
                  justifyContent: 'left'

                  // width:'25%',
                }}
              >
                <Link to="/history">
                <Button
                >
                    History
                </Button>
                </Link>

              </Container>
                <Container
                  style={{
                    width:'100%',
                    display: "flex",
                    // marginRight: '25%',
                    justifyContent: 'center'
                  }}
                >
                  <h1
                    style={{color: "Red" }}
                  >
                    Workout Buddy
                  </h1>
                </Container>
            </Container>
            {/* Body Stuff */}
            <Container
              style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'space-around',
                height:'90vh',
                alignContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'green',
              }}
            >
                <Link to="/creator">
                    <Button
                      style={{
                        display: "flex",
                        // flexDirection: 'row',
                        // justifyContent: 'space-around',
                        height:'10%'
                        // alignContent: 'center',
                        // alignItems: 'center',
                        // backgroundColor: 'green',
                      }}
                    >
                        Create a new workout
                    </Button>
                </Link>

                <Link to="/generator">
                <Button
                  style={{
                    display: "flex",
                    // flexDirection: 'row',
                    // justifyContent: 'space-around',
                    height:'10%'
                    // alignContent: 'center',
                    // alignItems: 'center',
                    // backgroundColor: 'green',
                  }}
                >
                  Generate a past workout
                </Button>
                </Link>
            </Container>
      </Container>
    );


  }
}
export default App;
