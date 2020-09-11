import * as React from 'react'
import Body from './components/body.component/form.component'
import ActionFooter from './components/action-footer-component/action-footer.component'
import ActionHeader from './components/action-header-component/action-header.component'

export const ClientTableComponent = () => {
  return (
    <div>
      <ActionHeader/>
      <Body/>
      <ActionFooter/>
      <br></br>
      <br></br>
    </div>
  )
}
