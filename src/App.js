import React from 'react';

import FirstForm from './components/Firstform'
import SecondForm from './components/SecondForm'
import Confirm from './components/Confirm'
import Success from './components/Success'
import Person from './components/Person'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      step:1,
      firstName:'',
      lastName:'',
      email:'',
      occupation:'',
      city:'',
      phone:'',
      persons:[]
    }
  }
  nextStep = () => {
    this.setState({
      step:this.state.step + 1
    })
  }
  prevStep = () =>{
    this.setState({
      step:this.state.step - 1
    })
  }
  handleInput = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const person = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      occupation:this.state.occupation,
      city:this.state.city,
      phone:this.state.phone
    }
    this.setState({
      persons:[...this.state.persons,person]
    })
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      occupation:'',
      city:'',
      phone:''
    })
    this.nextStep()
  }
  initialStep = () => {
    this.setState({
      step:1
    })
  }
  render(){
    switch (this.state.step){
      case 1:
        return (
          <div className="container">
            <FirstForm
            nextstep={this.nextStep}
            estado={this.state}
            onChange={this.handleInput}
            ></FirstForm>

            <div className="row mt-4">
            {this.state.persons.map((ele,index) => {
              return(
                <Person key={index} elemento={ele}></Person>
              )
            })}
            </div>
          </div>
        )
      case 2:
        return (<SecondForm
          nextstep={this.nextStep}
          prevstep={this.prevStep}
          estado={this.state}
          onChange={this.handleInput}
        ></SecondForm>)
      case 3:
        return (<Confirm
          nextstep={this.nextStep}
          prevstep={this.prevStep}
          estado={this.state}
          onChange={this.handleInput}
          handleSubmit={this.handleSubmit}
        ></Confirm>)
      case 4:
        return (<Success
        initialStep={this.initialStep}
        ></Success>)
      default:
        return (<h1>no encontrado</h1>)
    }
  }
}

export default App;
