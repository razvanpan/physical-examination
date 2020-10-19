import React from 'react'
import Text from 'terra-text'
import styles from './text.module.css'

class PhysicalExaminationText extends React.Component<{ text: string }> {
  render() {
    return (
      <div className={styles.textDiv}>
        <Text fontSize={18} >
          {this.props.text}
        </Text>
      </div>
    )
  }
}
export default PhysicalExaminationText
