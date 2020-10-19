import * as React from 'react'

import PhysicalExaminationFooter from '../action-footer-component/action-footer.component'
import PhysicalExaminationHeader from '../action-header-component/action-header.component'
import PhysicalExaminationForm from '../body-component/form.component'
import PhysicalExaminationText from '../text.component/text.component'
import axios from 'axios'

export default class PhysicalExaminationComponent extends React.Component<
  {},
  { name: string; show: boolean,close:boolean }
> {
  constructor(props) {
    super(props)
    this.state = { name: '', show: true ,close:false}
    this.onFormInput = this.onFormInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onClose=this.onClose.bind(this)
  }

  onClose(){
      this.setState({
        close:true
      })
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
      .post('http://localhost:8080/physical-examination/data', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))

    this.setState({ show: false })
  }

  onCancel() {
    this.setState({ show: true })
  }

  render() {
    return (
      <div >
        {!this.state.close && <div>
        <PhysicalExaminationHeader closeAction={this.onClose} show={this.state.show}/>

        {!this.state.show && (
          <div>
            <PhysicalExaminationText text={this.state.name} />
          </div>
        )}

        {this.state.show && (
          <PhysicalExaminationForm onInput={this.onFormInput} />
        )}

        <PhysicalExaminationFooter
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
        />
        </div>}
      </div>
    )
  }
}
