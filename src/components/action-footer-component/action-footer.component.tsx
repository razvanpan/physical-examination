import React from 'react'
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter'
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import styles from './action-footer.module.css'

class PhysicalExaminationFooter extends React.Component<{onSubmit:()=>void,onCancel:()=>void}>{

  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
   
  }

  submitHandler(event){
    event.preventDefault();
    this.props.onSubmit();
  }

  cancelHandler(event){
    event.preventDefault();
    this.props.onCancel();
  }

  render(){
    return(
      <div className={styles.bottom}>
      <BlockActionFooter >
      <div className={styles.footerDiv}>
        <div className={styles.buttons}>
        <React.Fragment>
          <Spacer isInlineBlock marginRight='medium'>
            <Button text='Submit' variant={Button.Opts.Variants.EMPHASIS} onClick= {this.props.onSubmit}/>
          </Spacer>
          <Button text='Cancel' onClick= {this.props.onCancel}/>
        </React.Fragment>
        </div>
      </div>
    </BlockActionFooter>
    </div>

    )
    
  }  

}
export default PhysicalExaminationFooter

