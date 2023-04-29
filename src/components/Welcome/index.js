// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    status: true,
  }

  renderMethod = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  btnText = () => {
    const {status} = this.state

    return status ? 'subscribe' : 'subscribed'
  }

  render() {
    const buttonText = this.btnText()

    return (
      <div className="bg-container">
        <h1 className="heading">WELCOME</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.renderMethod}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
