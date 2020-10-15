import React from 'react'
import 'com.training.physical-examination/dist/index.css'
import  PhysicalExaminationComponent  from 'com.training.physical-examination'
import {IntlProvider} from 'react-intl';
const App = () => {
  
  return(
    <IntlProvider locale="en">
      <PhysicalExaminationComponent />
    </IntlProvider>
  )
}

export default App
