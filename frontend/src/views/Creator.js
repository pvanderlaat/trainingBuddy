import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button, Container, Form, InputGroup, FormControl}  from 'react-bootstrap';



class Creator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            workoutName: "",
            description: "",
            workoutId: "",
            workoutDetails: "",
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
            workouts: []
        };
    
        this.toggleChest = this.toggleChest.bind(this);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setMuscles = this.setMuscles.bind(this);
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
        const { workoutName, description, workouts, workoutDetails, chest, shoulders, legs, calves, lBack, traps, grip, upBack, core, sCardio, lCardio, stretching } = this.state;
        let string = ""
        let began = false
        if (chest) {
            if (began) {
                string += ", "
            }
            string += "chest"
            began = true
        }
        if (shoulders) {
            if (began) {
                string += ", "
            }
            string += "shoulders"
            began = true
        }
        if (legs) {
            if (began) {
                string += ", "
            }
            string += "legs"
            began = true
        }
        if (calves) {
            if (began) {
                string += ", "
            }
            string += "calves"
            began = true
        }
        if (lBack) {
            if (began) {
                string += ", "
            }
            string += "lower back"
            began = true
        }
        if (traps) {
            if (began) {
                string += ", "
            }
            string += "traps"
            began = true
        }
        if (grip) {
            if (began) {
                string += ", "
            }
            string += "grip"
            began = true
        }
        if (upBack) {
            if (began) {
                string += ", "
            }
            string += "lats"
            began = true
        }
        if (core) {
            if (began) {
                string += ", "
            }
            string += "core"
            began = true
        }
        if (sCardio) {
            if (began) {
                string += ", "
            }
            string += "short-distance cardio"
            began = true
        }
        if (lCardio) {
            if (began) {
                string += ", "
            }
            string += "long-distance cardio"
            began = true
        }
        if (stretching) {
            if (began) {
                string += ", "
            }
            string += "stretching"
            began = true
        }        
        // console.log(this.state.workoutName)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": workoutName,
                "musclesWorked": string,
                "description": description
            })
        };
        fetch('http://35.245.200.167:8080/workouts', requestOptions)
            .then(response => response.json())
            .then(data => {
                window.location.replace('/workoutPage/' + data['_id'])
            })
    }
    
    async componentDidMount() {
        // const { workouts } = this.state;
        const response = await fetch('http://35.245.200.167:8080/workouts')
        const json = await response.json();
        this.setState({ workouts: json })
    }

    setName (e) {
        // e.target.value is the text from our input
        this.setState({
            workoutName: e.target.value,
        });
    }
    
    setDescription (e) {
        // e.target.value is the text from our input
        this.setState({
            description: e.target.value,
        });
    }

    setMuscles(e) {
        // let string = ""
        // if (chest == false) {
        //     string += "chest"
        // }
        // else {
        //     string += "not a chest workout"
        // }
        // // e.target.value is the text from our input
        // this.setState({
        //     musclesWorked: string
        // });
    }

  render() {
      const { workoutName, workoutDetails, chest, shoulders, legs, calves, lBack, 
        traps, grip, upBack, core,sCardio, lCardio, stretching } = this.state;
           
        return (
            <Container
                style={{
                    padding: "5vh"
                }}
            >
              <Container
                h="10vh"
                // bg="success900"
                d="flex"
                flexDir="row"
              >
                <Container
                  w="25%"
                  d="flex"
                  justify="left"
                  // bg="brand900"
                >
                  <Link to="/">
                  <Button
                    bg="gray900"
                    hoverBg="gray400"
                  >
                    <text 
                    //   tag="h1" 
                    //   textSize="heading" 
                    //   textColor="#ffffff"
                    //   hoverTextColor="#000000"
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
                    Create a Workout
                  </h1>
  
                </Container>
                
                
                
              </Container>
  
              {/* Body stuff */}
              <Container
                
              >
                <Container 
                >
                    <InputGroup>
                        <FormControl
                        placeholder="Workout Name"
                        onChange={ this.setName }
                        placeholder="Workout Name"
                        />
                    </InputGroup>
                </Container>
                <Container 
                >
                    <Form.Group>
                        <Form.Control
                            placeholder="Workout Details"
                            onChange={ this.setDescription } 
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>

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
                  <h5
                    style={{color: "black" }}
                  >
                    Type of Workout
                  </h5>
  
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
                                paddingLeft: '30%'
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
                                Grip
                                <Form.Check 
                                    onChange={this.toggleGrip}
                                    checked={grip}
                                    
                                />
                                </div>
                            ))}
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
                        </Form>
                    </Container>
                    

                    <Container>
                        <Form
                            style={{
                                display: "flex",
                                flexDirection: 'column',
                                // backgroundColor: 'red',
                                width:'70%',
                                paddingLeft: '30%'
                            }}
                        >
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
                                Short-distance Cardio
                                <Form.Check 
                                    onChange={this.togglesCardio}
                                    checked={sCardio}
                                    
                                />
                                </div>
                            ))}
                        </Form>
                    </Container>


                    
                </Container>
                {/* <Container 
                    // class="7"
                    // d="flex" 
                    // flexDir="row" 
                    // align="center" 
                    // justify="center" 
                    h="5vh" 
                    background-color="#67074e"
                    // hoverBg="#67074e"
                    >
                        <Label 
                        // align="center" 
                        // textWeight="600" 
                        // m={{ b: "0.5rem" }}
                        size="10px"
                        >
                            Chest
                            <Checkbox
                                // size='5px'
                                // textWeight="5px" 
                                // label="Small"
                                // cssClass="e-small"
                                size="10px"
                                onChange={this.toggleChest}
                                checked={chest}
                            />
                            
                        </Label>
                        <Label 
                        // align="center" 
                        // textWeight="600"
                        // m={{ b: "0.5rem" }}
                        >
                            Shoulders
                            <Checkbox
                                size="10px"
                                onChange={this.toggleShoulders}
                                checked={shoulders}
                            />
                            
                        </Label>
                        <Label 
                        // align="center" 
                        // textWeight="600" 
                        // m={{ b: "0.5rem" }}
                        >
                            Legs
                            <Checkbox
                                size="10px"
                                onChange={this.toggleLegs}
                                checked={legs}
                            />
                            
                        </Label>
                        <Label 
                        // align="center" 
                        // textWeight="600" 
                        // m={{ b: "0.5rem" }}
                        >
                            Calves
                            <Checkbox
                                onChange={this.toggleCalves}
                                checked={calves}
                                size="10px"
                            />
                            
                        </Label>
                        <Label 
                        // align="center" 
                        // textWeight="600" 
                        // m={{ b: "0.5rem" }}
                        >
                            Lower Back
                            <Checkbox
                                onChange={this.toggleLBack}
                                checked={lBack}
                                size="10px"
                            />
                            
                        </Label>
                        <Label 
                        // align="center" 
                        // textWeight="600" 
                        // m={{ b: "0.5rem" }}
                        >
                            Traps
                            <Checkbox
                                onChange={this.toggleTraps}
                                checked={traps}
                            />
                            
                        </Label>
                </Container>

                <Container 
                // class="8"
                // d="flex" 
                // flexDir="row" 
                // align="center" 
                // justify="center" 
                // h="15vh" 
                // bg="gray400"
                // hoverBg="#f796dd"
                >
                    
                    
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Grip
                        <Checkbox
                            onChange={this.toggleGrip}
                            checked={grip}
                        />
                        
                    </Label>
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Lats
                        <Checkbox
                            onChange={this.toggleUBack}
                            checked={upBack}
                        />
                        
                    </Label>
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Core
                        <Checkbox
                            onChange={this.toggleCore}
                            checked={core}
                        />
                        
                    </Label>
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Short-distance Cardio
                        <Checkbox
                            onChange={this.togglesCardio}
                            checked={sCardio}
                        />
                        
                    </Label>
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Long-distance Cardio
                        <Checkbox
                            onChange={this.togglelCardio}
                            checked={lCardio}
                        />
                        
                    </Label>
                    <Label 
                    // align="center" 
                    // textWeight="600" 
                    // m={{ b: "0.5rem" }}
                    >
                        Stretching
                        <Checkbox
                            onChange={this.toggleStretching}
                            checked={stretching}
                        />
                        
                    </Label>
                </Container> */}
            

  
  
              </Container>
              <Container
                style={{
                    width:'100%',
                    display: "flex",
                    // marginRight: '25%',
                    justifyContent: 'center'
                }}
              >
                    {/* <Link to="/workoutPage"> */}
                    {/* <Link to={`route/foo`}>My route</Link> */}

                    {/* <Link to={{ pathname: '/workoutPage/:id', state: { id: this.state.workoutId} }}> */}
                    {/* <Link to='/workoutPage'> */}


                        <Button 
                            onClick={this.createWorkout}
                        >
                                Create!
                        </Button>
                    {/* </Link> */}

              </Container>
            </Container>
      );


  }
}
export default Creator;
