import React from 'react'
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter'
import Spacer from 'terra-spacer';
import Button from 'terra-button';
class PhysicalExaminationFooter extends React.Component<{onSubmit:()=>void}>{

  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this);
   
  }

  submitHandler(event){
    event.preventDefault();
    this.props.onSubmit();
  }

  render(){
    return(
      <div style={{bottom:0}}>
      <BlockActionFooter>
      <div
        style={{
          backgroundColor: '#e5eef9',
          left: '0',
          bottom: '0',
          position: 'fixed',
          width: '100%',
          height: '10%',
          borderRadius: '0px 0px 25px 25px',
          borderTopStyle: 'solid',
          borderTopColor: '#c8def5',
          minHeight:'70px'
        }}
      >
        <div style={{float: 'right', marginTop: '25px', marginRight: '15px'}}>
        <React.Fragment>
          <Spacer isInlineBlock marginRight='medium'>
            <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} onClick= {this.props.onSubmit}/>
          </Spacer>
          <Button text='Cancel' />
        </React.Fragment>
        </div>
      </div>
    </BlockActionFooter>
    </div>

    )
    
  }  

}
export default PhysicalExaminationFooter