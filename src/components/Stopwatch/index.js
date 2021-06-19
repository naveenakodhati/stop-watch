// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  startTimer = () => {
    this.timerID = setInterval(this.updateTimer, 1000)
  }

  updateTimer = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  stopTimer = () => {
    clearInterval(this.timerID)
  }

  restartTimer = () => {
    this.setState({timer: 0})
    clearInterval(this.timerID)
  }

  showSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  showMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const showTimer = `${this.showMinutes()}:${this.showSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="title">Stopwatch</h1>
        <div className="card-container">
          <div className="container">
            <img
              alt="timer"
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="heading">Timer</p>
          </div>

          <h1 testid="timer">{showTimer}</h1>
          <div className="container">
            <button
              className="button button-1 "
              onClick={this.startTimer}
              type="button"
            >
              Start
            </button>
            <button
              className="button button-2"
              type="button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              className="button button-3"
              onClick={this.restartTimer}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
