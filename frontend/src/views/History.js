import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Container, Form, InputGroup}  from 'react-bootstrap';

// import axios from 'axios';


class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
        workouts:[]
    }
  }
  async componentDidMount() {
            const response = await fetch('http://35.245.200.167:8080/workouts')
            const json = await response.json();
            let counter = 0
            let arr = []

            // if (json[0].lastDone > json[2].lastDone) {
            //     console.log(json[0].name +"  is older than "+ json[2].name)
            // }
            // else {
            //     console.log(json[2].name +"  is older than "+ json[0].name)
            // }

            for (let i = 0; i < json.length; i++) {
                for (let j = 0; j < json.length; j++) {
                    if (json[i].lastDone > json[j].lastDone) {
                        let temp = json[i]
                        json[i] = json[j]
                        json[j] = temp
                    }
                }
            }


            for (let i = 0; i < json.length; i++) {
                // console.log(json[i])
                if (counter < 8) {
                    arr.push(json[i])
                    counter = counter + 1
                }
                else {
                    break
                }
            }
            this.setState({ workouts: arr })
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
                height:'15vh'
                // backgroundColor: 'green',
              }}
            >
              <Container
                style={{
                  width:'100%',
                }}
                // bg="brand900"
              >
                <Link to="/">
                <Button
                  bg="gray900"
                  hoverBg="gray400"
                >
                  <text 
                    // tag="h1" 
                    // textSize="heading" 
                    // textColor="#ffffff"
                    // hoverTextColor="#000000"
                  >
                    Home
                  </text>
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
                  // bg="brand900"
                >
                  <h1
                    style={{color: "Red" }}
                  >
                    Log of Workouts
                  </h1>
  
                </Container>
              
              
              
            </Container>

            {/* Body stuff */}
            <Container
              h="90vh"
            //   bg="info600"
              d="flex"
              flexDir="row"
              justify="center"
              align="center"
            >
              {this.state.workouts.map(workout=>(
                                    <div 
                                        // tag="section"
                                    >
                                        {workout.name} was last done {workout.lastDone.toString().slice(5,10)}
                                    </div>
                                
                ))}
              



            </Container>
          </Container>
    );


  }
}
export default History;
