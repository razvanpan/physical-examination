import React from 'react'
import Textarea from 'terra-form-textarea'

const PhysicalExaminationForm = () => (
  <div
    style={{
      width: '98.3%',
      padding: '11px',
      backgroundColor: '#ebf3fb',
      marginTop: '5%'
    }}
  >
    <Textarea
      size='large'
      defaultValue='Enter Physical Examination'
      id='physical-examination-input'
      rows='17'
    />
  </div>
)
export default PhysicalExaminationForm
