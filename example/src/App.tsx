import React from 'react'

import { ClientTableComponent } from 'com.training.physical-examination'
import 'client-details-library/dist/index.css'
import {IntlProvider} from 'react-intl';
const App = () => {
  
  return(
    <IntlProvider locale="en">
      <ClientTableComponent />
    </IntlProvider>
  )
}

export default App
