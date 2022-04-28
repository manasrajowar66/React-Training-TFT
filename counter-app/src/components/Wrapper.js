import React, { Component } from 'react'
import Counter from './Counter'
import playIcon from '../assets/round-play-button.png'
import stopIcon from '../assets/stop-button.png'

class Wrapper extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            startFrom: 0,
            counter: 0,
            timer: null,
            isTimerStart: false,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isTimerStart !== this.state.isTimerStart) {
            if (this.state.timer) {
                // if a timer already exist then it first clear the old timer
                clearInterval(this.state.timer)
            }
            if (this.state.isTimerStart) {
                // if the user click the start button then a new time will start
                this.setState({
                    timer: setInterval(() => {
                        this.setState((prevState) => ({
                            counter: prevState.counter + 1,
                        }))
                    }, 1000),
                })
            }
        }
    }

    componentWillUnmount() {
        // if component remove from DOM then it will clear the timer from memory
        clearInterval(this.state.timer)
    }

    onChangeHandler(event) {
        const value = event.target.value
        this.setState({ startFrom: parseInt(value) })
    }

    onStartHandler() {
        const { startFrom, timer, isTimerStart } = this.state
        if (!timer || (isTimerStart && timer)) {
            this.setState({ counter: startFrom })
        }
        this.setState({ isTimerStart: true })
    }

    onStopHandler() {
        this.setState({ isTimerStart: false })
    }

    onDeleteHandler() {
        clearInterval(this.state.timer)
        this.setState({
            timer: null,
            isTimerStart: false,
            counter: 0,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Counter App</h1>
                </div>
                <div className="card">
                    <Counter count={this.state.counter} />
                    <div className="input-field">
                        <label>Start from</label>
                        <input
                            type="number"
                            defaultValue="0"
                            onChange={this.onChangeHandler.bind(this)}
                        />
                    </div>

                    <div className="action-field">
                        <button
                            className="btn btn__success mx"
                            onClick={this.onStartHandler.bind(this)}
                        >
                            <img
                                alt="play-icon"
                                style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                                src={playIcon}
                            />
                            Start
                        </button>
                        <button
                            className="btn btn__outlined mx"
                            onClick={this.onStopHandler.bind(this)}
                        >
                            <img
                                alt="stop-icon"
                                style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }}
                                src={stopIcon}
                            />
                            Stop
                        </button>
                        <button
                            className="btn btn__delete"
                            onClick={this.onDeleteHandler.bind(this)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper
