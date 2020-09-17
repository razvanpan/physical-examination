import * as React from 'react'

import PhysicalExaminationFooter from './components/action-footer-component/action-footer.component'
import PhysicalExaminationHeader from './components/action-header-component/action-header.component'
import PhysicalExaminationForm from './components/body.component/form.component'



//style={{position:'fixed',bottom:'0',width:'99%'}}

export const PhysicalExaminationComponent = () => {
  
  return (
      <div >
      <PhysicalExaminationHeader/>
      <PhysicalExaminationForm/>
      <PhysicalExaminationFooter/>
      </div>
    
  )
}
