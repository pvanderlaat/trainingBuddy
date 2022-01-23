import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Container, Form, InputGroup}  from 'react-bootstrap';

// import axios from 'axios';

// console.log(workouts)
class Selector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: [],
            workouts: []
        }
    }
    async componentDidMount() {
        // const {ids, workouts} = this.state
        const location = window.location.href
        //...http://localhost:3000/selectionPage/  36
        //...http://3.67.67.236:3000/selectionPage/ 38
        const tempids = location.substring(36, location.length+1)
        let counter = 0
        let ids = []
        let s = ""
        // console.log(tempids)
        for (let i = 0; i < tempids.length; i++) {
            if (counter == 24) {
                ids.push(s)
                s = ""
                counter = 0
                i--
            }
            else {
                counter++
                s += tempids[i]
            }
        }
        ids.push(s)
        // console.log(ids)

        let newworkouts = []
        for (let i = 0; i < ids.length; i++) {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const temp = await fetch('http://localhost:3001/workouts/' + ids[i], requestOptions)
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    // data = JSON.parse(this.state.workouts[0]);
                    newworkouts.push([data['name'].toString(), data['description'].toString(), data['musclesWorked'].toString(), data['_id'].toString()])
                })
        }
        // console.log(newworkouts.length)
        // console.log(newworkouts)
        this.setState({
            workouts: newworkouts
        })
    }

    render() {
        const workouts = this.state.workouts
        for (let i = 0; i < workouts.length; i++) {
            console.log(workouts[i][0])
        }
        // let workouts = JSON.stringify(newworkouts, 0, 2)

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
                        Choose a Workout
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
                    {workouts.map(workout=>(
                                        <Link to={"/workoutPage/" + workout[3]}>
                                        <div 
                                            // tag="section"
                                        >
                                            {workout[0] + "(" + workout[2] + ")"}
                                        </div>
                                        <br/>
                                        </Link>
                    ))}
                    
    
    
    
                </Container>
                </Container>
        );
        
        
    }


}
export default Selector;
