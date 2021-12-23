import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button, Container, Form, InputGroup}  from 'react-bootstrap';

// import axios from 'axios';


class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts:[],
            allWorkouts: [],
            restedMuscles: [],
            templateWorkouts: [],
            chest: false,
            shoulders: false,
            legs: false,
            calves: false,
            lBack: false,
            traps: false,
            grip: false,
            upBack: false,
            core: false,
            sCardio: false,
            lCardio: false,
            stretching: false,
        }

        this.toggleChest = this.toggleChest.bind(this);
        this.toggleShoulders = this.toggleShoulders.bind(this);
        this.toggleLegs = this.toggleLegs.bind(this);
        this.toggleCalves = this.toggleCalves.bind(this);
        this.toggleLBack = this.toggleLBack.bind(this);
        this.toggleTraps = this.toggleTraps.bind(this);
        this.toggleGrip = this.toggleGrip.bind(this);
        this.toggleUBack = this.toggleUBack.bind(this);
        this.toggleCore = this.toggleCore.bind(this);
        this.togglesCardio = this.togglesCardio.bind(this);
        this.togglelCardio = this.togglelCardio.bind(this);
        this.toggleStretching = this.toggleStretching.bind(this);
    }
    toggleChest(e) {
        this.setState({
            chest: e.target.checked,
        });
        
    }
    toggleShoulders(e) {
        this.setState({
            shoulders: e.target.checked,
        });
    }
    toggleLegs(e) {
        this.setState({
            legs: e.target.checked,
            // calves: e.target.checked,
            // lBack: e.target.checked,
            // traps: e.target.checked,
            // grip: e.target.checked,
            // upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleCalves(e) {
        this.setState({
            calves: e.target.checked,
            // lBack: e.target.checked,
            // traps: e.target.checked,
            // grip: e.target.checked,
            // upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleLBack(e) {
        this.setState({
            lBack: e.target.checked,
            // traps: e.target.checked,
            // grip: e.target.checked,
            // upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleTraps(e) {
        this.setState({
            traps: e.target.checked,
            // grip: e.target.checked,
            // upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleGrip(e) {
        this.setState({
            grip: e.target.checked,
            // upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleUBack(e) {
        // console.log("S")
        this.setState({
            upBack: e.target.checked,
            // core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleCore(e) {
        this.setState({
            core: e.target.checked,
            // sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    togglesCardio(e) {
        this.setState({
            sCardio: e.target.checked,
            // lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    togglelCardio(e) {
        this.setState({
            lCardio: e.target.checked,
            // stretching: e.target.checked,
        });
    }
    toggleStretching(e) {
        this.setState({
            stretching: e.target.checked,
        });
    }
    createWorkout = async() => {
        const { workoutName, description, allWorkouts, workoutDetails, chest, shoulders, legs, calves, lBack, traps, grip, upBack, core, sCardio, lCardio, stretching } = this.state;
        let selected = []
        if (chest) {
            selected.push("chest")
        }
        if (shoulders) {
            selected.push("shoulders")
        }
        if (legs) {
            selected.push("legs")
        }
        if (calves) {
            selected.push("calves")
        }
        if (lBack) {
            selected.push("lower back")
        }
        if (traps) {
            selected.push("traps")
        }
        if (grip) {
            selected.push("grip")
        }
        if (upBack) {
            // console.log(upBack)
            selected.push("lats")
        }
        if (core) {
            selected.push("core")
        }
        if (sCardio) {
            selected.push("short-distance cardio")
        }
        if (lCardio) {
            selected.push("long-distance cardio")
        }
        if (stretching) {
            selected.push("stretching")
        }       
        // console.log(selected) 
        // console.log(allWorkouts)
        let tempString = ""
        for (let x = 0; x < allWorkouts.length; x++) {
            let found = true
            console.log("Checking " + allWorkouts[x]['name'])
            for (let y = 0; y < selected.length; y++) {
                console.log("   Checking " + selected[y])
                if (!allWorkouts[x]['musclesWorked'].includes(selected[y])){
                    console.log("   It is not in it")
                    found = false
                    break
                }
            }
            if (found) {
                // window.location.replace('/workoutPage/' + allWorkouts[x]['_id'])
                tempString += allWorkouts[x]['_id']
                // suggestions.push()
                // return
            }
        }
        if (tempString.length == 0) {
            alert("No workout found. Make a new one for future use")
            return  
        }
        window.location.replace('/selectionPage/' + tempString)
        // let stringer = ""
        // let first = true
        // for (let x = 0; x < selected.length; x++) {
        //     if (first) {
        //         first = false
        //     }
        //     else {
        //         stringer += ", "
        //     }
        //     stringer += selected[x]
        // }
        // // console.log(stringer)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         "name": workoutName,
        //         "musclesWorked": stringer,
        //         "description": description
        //     })
        // };
        // fetch('http://localhost:3001/workouts', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         window.location.replace('/workoutPage/' + data['_id'])
        //     })
    }

    async componentDidMount() {
                let restedMuscles = this.state
                let muscles = [["chest",Date()], ["legs",Date()], ["calves",Date()],
                ["shoulders",Date()], ["lower back",Date()], ["grip",Date()],
                ["lats",Date()], ["core",Date()], ["short-distance cardio",Date()],
                ["long-distance cardio",Date()], ["stretching",Date()], ["traps",Date()]]

                let tempMuscles = ["chest","legs","calves","shoulders", "lower back","grip", "lats","core",
                "short-distance cardio", "long-distance cardio","stretching","traps"]
                const response = await fetch('http://localhost:3001/workouts')
                const json = await response.json();
                
                for (let i = 0; i < json.length; i++) {
                    for (let j = 0; j < json.length; j++) {
                        if (json[i].lastDone > json[j].lastDone) {
                            let temp = json[i]
                            json[i] = json[j]
                            json[j] = temp
                        }
                    }
                }
                this.setState({ 
                    allWorkouts: json
                })

                let counter = 0
                let arr = []
                let tempArr = []
                for (let i = 0; i < json.length; i++) {                
                    let today = new Date()
                    // today = Date(today)
                    // console.log(today + " is of type " + typeof(today))
                    let wDate = new Date(json[i]['lastDone'])
                    // console.log(wDate + " is of type " + typeof(wDate))
                    // console.log(wDate - today)
                    const days = (today - wDate)/86400000
                    if (counter < 4 && days <= 1) {
                    // if (counter < 4) {
                        arr.push(json[i])
                        counter = counter + 1
                    }
                    else {
                        tempArr.push(json[i])
                    }
                }
                // console.log(arr)
                this.setState({ workouts: arr })
                this.setState({ templateWorkouts: tempArr })
                for (let i = 0; i < arr.length; i++) {
                    // console.log("Workout: " + arr[i]['name'] + " has muscles")
                    let s = ""
                    for (let j = 0; j < arr[i]['musclesWorked'].length; j++) {
                        if (arr[i]['musclesWorked'][j] == ',') {
                            // console.log("examining " + s)
                            if (!tempMuscles.includes(s)) {
                            // if (!muscles.includes([s,Date()])) {
                                muscles[muscles.indexOf([s,Date()])] = [s, arr[i]['lastDone']]
                                s = ""
                                j += 1
                                continue
                            }
                            // delete muscles[muscles.indexOf([s,Date()])]
                            // console.log(s + " is not fully rested")
                            delete tempMuscles[tempMuscles.indexOf(s)]
                            j += 1
                            s = ""
                        }
                        else {
                            s = s + arr[i]['musclesWorked'][j]
                        }
                        // console.log("   " + arr[i]['musclesWorked'][j])
                    }
                    // console.log("examining " + s)
                    // if (muscles.includes((s,Date()))) {
                    if (tempMuscles.includes(s)) {
                        // console.log(s + " is not fully rested")
                        delete tempMuscles[tempMuscles.indexOf(s)]
                    }
                    else {
                        muscles[muscles.indexOf([s,Date()])] = [s, arr[i]['lastDone']]
                    }
                    
                }
                // console.log(muscles)
                let temp = []
                // console.log(muscles)
                for (let i = 0; i < tempMuscles.length; i++) {
                    // console.log(tempMuscles[i])
                    // console.log(muscles[i][0])
                    if (tempMuscles[i] != null) {
                        temp.push(muscles[i])
                        // console.log("Pushing " + muscles[i][0] + ", " + muscles[i][1])
                    }
                }
                this.setState({ 
                    restedMuscles: temp
                })
    }
    render() {
        const restedMuscles = this.state.restedMuscles
        const { workoutName, description, workouts, workoutDetails, chest, shoulders, legs, calves, lBack, traps, grip, upBack, core, sCardio, lCardio, stretching } = this.state;
        const allWorkouts = this.state.allWorkouts
        const templateWorkouts = this.state.templateWorkouts
            // console.log(templateWorkouts)
        // const map = { a: 1, b: 2, c: 3 };
        // console.log(allWorkouts)
        const arr = Object.values(restedMuscles);
        //   console.log(arr)

        let s = ""
        let first = true
        // console.log(restedMuscles)
        for (let i = 0; i < restedMuscles.length; i++) {
            //   s = s + "A " + restedMuscles[i] + " workout hasn't been done in x days"
            let lastDone = "0"
            for (let j = 0; j < templateWorkouts.length; j++) {
                // console.log(templateWorkouts[j]['musclesWorked'] + " vs " + restedMuscles[i][0])
                if (templateWorkouts[j]['musclesWorked'].includes(restedMuscles[i][0])){
                    lastDone = templateWorkouts[j]['lastDone']
                    break
                }
            }
            if (lastDone == "0") {
                if (first) {
                    first = false
                }
                else {
                    s = s + "\n"
                }
                s += "You have never done a " + restedMuscles[i][0] + " workout"
            }
            else {
                lastDone = new Date(lastDone)
                const today = new Date()
                const days = Math.round((today - lastDone)/86400000)
                // s += "A " + restedMuscles[i][0] + " hasn't been done for " + days + " days"
                if (days > 5) {
                    if (first) {
                        first = false
                    }
                    else {
                        s = s + "\n"
                    }
                    s += days + " days since last " + restedMuscles[i][0] + " workout"
                }
            }
        }
        if (s.length == 0) {
            s = "You should take a break"
        }
        //   s = "x days since last long-distance cardio workout\nx days since last short-distance cardio workout\nx days since last long-distance cardio workout\n"
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
                            Generate a Workout
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
                        <pre
                            style={{
                                outline: "1px solid #ccc",
                                padding: "5px",
                                margin: "5px",
                                whiteSpace: "pre-wrap",   
                                whiteSpace: "-moz-pre-wrap",  
                                whiteSpace: "-pre-wrap",      
                                whiteSpace: "-o-pre-wrap",   
                                wordWrap: "break-word",       
                                fontSize: "2.5vw" 
                            }}
                        >
                            {s}
                        </pre>
                    </Container>
                    <Container
                        style={{
                            width: '100%',
                            display:'flex',
                            justifyContent: 'center',
                            fontSize: '1vw'
                        }}
                    >
                        <h3
                            style={{
                                // width: '100%',
                                // display:'flex',
                                // justifyContent: 'center',
                                fontSize: '2vw'
                            }}
                        >
                                Select muscles to generate workout from
                        </h3>
                    </Container>
                    
                    <Container
                        // align='center'
                        // justify='center'
                        style={{
                            display: "flex",
                            flexDirection: 'row',
                            // backgroundColor: 'green',
                            width:'100%'
                        }}

                    >
                        <Container>
                            <Form
                                style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    // backgroundColor: 'red',
                                    width:'70%',
                                    paddingLeft: '30%',
                                    fontSize: '3vw'
                                }}
                            >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Chest
                                    <Form.Check 
                                        onChange={this.toggleChest}
                                        checked={chest}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Calves
                                    <Form.Check 
                                        onChange={this.toggleCalves}
                                        checked={calves}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Core
                                    <Form.Check 
                                        onChange={this.toggleCore}
                                        checked={core}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Short-distance Cardio
                                    <Form.Check 
                                        onChange={this.togglesCardio}
                                        checked={sCardio}
                                        
                                    />
                                    </div>
                                ))}
                                
                                
                            </Form>
                        </Container>

                        <Container>
                            <Form
                                style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    // backgroundColor: 'red',
                                    width:'70%',
                                    paddingLeft: '30%',
                                    fontSize: '3vw'
                                }}
                            >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Lower Back
                                    <Form.Check 
                                        onChange={this.toggleLBack}
                                        checked={lBack}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Legs
                                    <Form.Check 
                                        onChange={this.toggleLegs}
                                        checked={legs}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Shoulders
                                    <Form.Check 
                                        onChange={this.toggleShoulders}
                                        checked={shoulders}
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Stretching
                                    <Form.Check 
                                        onChange={this.toggleStretching}
                                        checked={stretching}
                                        
                                    />
                                    </div>
                                ))}
                            </Form>
                        </Container>

                        <Container>
                            <Form
                                style={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    // backgroundColor: 'red',
                                    width:'70%',
                                    paddingLeft: '30%',
                                    fontSize: '3vw'
                                }}
                            >
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Traps
                                    <Form.Check 
                                        onChange={this.toggleTraps}
                                        checked={traps}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Lats
                                    <Form.Check 
                                        onChange={this.toggleUBack}
                                        checked={upBack}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Long-distance Cardio
                                    <Form.Check 
                                        onChange={this.togglelCardio}
                                        checked={lCardio}
                                        
                                    />
                                    </div>
                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                    Grip
                                    <Form.Check 
                                        onChange={this.toggleGrip}
                                        checked={grip}
                                        
                                    />
                                    </div>
                                ))}
                                
                            </Form>
                        </Container>


                        
                    </Container>
                    <br/>
                    <br/>
                    <Container
                        // align='center'
                        // justify='center'
                        style={{
                            display: "flex",
                            flexDirection: 'row',
                            justifyContent: 'center',
                            // backgroundColor: 'green',
                            width:'100%'
                        }}

                    >
                        
                        <Button 
                            onClick={this.createWorkout}
                        >
                                Create!
                        </Button>
                    </Container>
            </Container>
        );


    }
}
export default Generator;
