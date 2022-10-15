import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generate = () => {
    const x = Math.ceil(Math.random() * 100)
    this.setState({num: x})
    console.log(x)
  }

  render() {
    const {num} = this.state
    return (
      <div className="back">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="b" type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="randomnumber">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
