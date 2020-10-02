import React from 'react'
import Textarea from 'terra-form-textarea'

type inputState = {
  inputField: string 
}

class PhysicalExaminationForm extends React.Component<{onInput:(name:string)=>void}, inputState>  {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField:''
    }
   
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  submitHandler(event){
    event.preventDefault();
    this.props.onInput(this.state.inputField);
  }

  render() {
    return (
      <div
        style={{
          
          padding: '11px',
          backgroundColor: '#ebf3fb',
          marginTop: '60px',
          paddingRight:'25px'
        }}
      >
        <Textarea
          size='medium'
          defaultValue='Enter Physical Examination'
          id='physical-examination-input'
          rows={18}
          onChange={this.handleChange}
          onInput={this.submitHandler}
        />
        
      </div>
    );
  }
}

export default PhysicalExaminationForm
