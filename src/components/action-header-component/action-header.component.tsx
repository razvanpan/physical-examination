import React from 'react'
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate'
import IconCritical from 'terra-icon/lib/icon/IconCritical'
import IconRollup from 'terra-icon/lib/icon/IconRollup'
import Button from 'terra-button'

const sectionHeaderProps = { isTransparent: true }
const Icon = <IconRollup />

const PhysicalExaminationHeader = () => (
  <div
    style={{
      backgroundColor: '#e5eef9',
      left: '0',
      top: '0',
      position: 'fixed',
      width: '100%',
      height: '10%',
      borderRadius: ' 25px 25px 0px 0px',
      borderBottomStyle: 'solid',
      borderBottomColor: '#c8def5'
    }}
  >
    <div style={{ float: 'left', marginTop: '25px', marginLeft: '15px' }}>
      <IconCritical />
    </div>
    <div style={{ float: 'left', marginLeft: '20px' }}>
      <SectionHeaderExampleTemplate
        title='Physical Examination'
        exampleProps={sectionHeaderProps}
      />
    </div>
    <div style={{ float: 'right', marginTop: '15px', marginRight: '20px' }}>
      <Button icon={Icon} variant='ghost' />
    </div>
  </div>
)
export default PhysicalExaminationHeader
