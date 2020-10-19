import React from 'react'
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate'
import IconCritical from 'terra-icon/lib/icon/IconCritical'
import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button'
import styles from './action-header.module.css'


const sectionHeaderProps = { isTransparent: true }
const Icon = <IconRollup />

class PhysicalExaminationHeader extends React.Component<{ show: boolean,closeAction:()=>void },{showDropDown:boolean}> {
  constructor(props) {
    super(props)
    this.toogleDropDown = this.toogleDropDown.bind(this)
    this.closeAction = this.closeAction.bind(this)
    this.state = {
      showDropDown:false
    }
   
  }

  toogleDropDown(){
    if(!this.state.showDropDown){
    this.setState({
      showDropDown:true,
    })}else{
      this.setState({
        showDropDown:false
      })
    }
  }
  
  closeAction(){
    this.setState({
      showDropDown:false,
    })
    this.props.closeAction();
    
  }

  render() {
    return (
      <div className={styles.header}>
        {this.props.show && <IconCritical className={styles.icon} />}

        <div className={styles.sectionHeader}>
          <SectionHeaderExampleTemplate
            title='Physical Examination'
            exampleProps={sectionHeaderProps}
          />
        </div>
        <div className={styles.options}>
          <Button text='' icon={Icon} variant='ghost' onClick={this.toogleDropDown}/>
        </div>
        <div className={styles.dropDownDiv}>
         {this.state.showDropDown && <Button className={styles.dropDown} text='Close' variant='neutral' onClick={this.closeAction}/>}
        </div>
      </div>
    )
  }
}
export default PhysicalExaminationHeader
