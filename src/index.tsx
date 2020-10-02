import * as React from 'react'

import PhysicalExaminationFooter from './components/action-footer-component/action-footer.component'
import PhysicalExaminationHeader from './components/action-header-component/action-header.component'
import PhysicalExaminationForm from './components/body-component/form.component'
import axios from 'axios'

export default class PhysicalExaminationComponent extends React.Component<
  {},
  { name: string; show: boolean }
> {
  constructor(props) {
    super(props)
    this.state = { name: '', show: true}
    this.onFormInput = this.onFormInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onFormInput(userName: string) {
    this.setState({ name: userName })
  }

  onSubmit() {
    let headers1 = new Headers()
    headers1.append('Access-Control-Allow-Origin', '*')
    headers1.append('Access-Control-Allow-Credentials', 'true')

    const data = { physExamData: this.state.name }
    axios
      .post('http://localhost:8080/physical-examination/data', data,{
        headers:{'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
         'Access-Control-Allow-Credentials':'true'
      }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))

    this.setState({show:false});
  }

  render() {
    return (
      <div>
        <PhysicalExaminationHeader />
        <div>
          <PhysicalExaminationForm onInput={this.onFormInput} />
        </div>
        <PhysicalExaminationFooter
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}
