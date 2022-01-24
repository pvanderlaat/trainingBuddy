import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import {Button, Container, Form, InputGroup, FormControl}  from 'react-bootstrap';

// let name = ""
// let description = ""
// let muscles = ""
// let dateX = ''
// const location = window.location.href
//         const workoutID = location.substring(34, location.length+1)
//         const requestOptions = {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//         };
//         fetch('http://localhost:3001/workouts/' + workoutID, requestOptions)
//             .then(response => response.json())
//             .then(data => {
//                 name = data['name']
//                 description = data['description']
//                 muscles = data['musclesWorked']
//                 dateX = data['lastDone'].toString().substring(0, 10)
//                 // console.log(data['name'])
//                 // console.log(data['description'])
//             })

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            description: "",
            muscles: "",
            dateX: "",
        }
        this.updateWorkout = this.updateWorkout.bind(this);

        const location = window.location.href
        //...http://localhost:3000/workoutPage/...34
        //...http://3.67.67.236:3000/workoutPage/....36
        const workoutID = location.substring(34, location.length+1)
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://35.245.200.167:8080/workouts/' + workoutID, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    name: data['name'],
                    description: data['description'],
                    muscles: data['musclesWorked'],
                    dateX: data['lastDone'].toString().substring(0, 10)
                })
                // console.log(data['name'])
                // console.log(data['description'])
            })
    }
    updateWorkout() {
        const location = window.location.href
        const workoutID = location.substring(34, location.length+1)
        let x = new Date()
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "lastDone": x
            })
        };
        fetch('http://35.245.200.167:8080/workouts/' + workoutID, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dateX: data['lastDone'].toString().substring(0, 10)
                })
            })
        // this.setState({ 
        //     dateX: x
        // })
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
                        display:'flex',
                        justifyContent: 'space-between',
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
                    {this.state.dateX}
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
                        style={{
                            color:'red',
                        }}
                    >
                        {this.state.name}
                    </h1>
                    

                    </Container>
                
                
                
                </Container>

                {/* Body stuff */}
                <Container
                    style={{
                        // height:"90vh",
                        //   bg="info600"
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    {this.state.muscles}
                </Container>
                <Container
                    style={{
                        // height:"90vh",
                        //   bg="info600"
                        // border: "dotted",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"left",
                        alignItems:"center"
                    }}
                >
                    <pre
                        style={{
                            fontSize: "3vw"
                        }}
                    >
                        {this.state.description}
                    </pre>
                    
                </Container>    
                <br/>    
                <Container
                style={{
                    width:'100%',
                    display: "flex",
                    // marginRight: '25%',
                    justifyContent: 'center'
                }}
              >
                        <Button 
                            onClick={this.updateWorkout}
                        >
                                Log It!
                        </Button>
              </Container>            
            </Container>
        );
    }


}
export default Page;