import React, { useState, useRef, useEffect } from 'react';
import Counter from './Counter';
import playIcon from '../assets/round-play-button.png';
import stopIcon from '../assets/stop-button.png';

const Wrapper = () => {
    const inputRef = useRef();
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(null);
    const [isTimerStart, setIsTimerStart] = useState(false);


    useEffect(() => {

        if (timer) { // if a timer already exist then it first clear the old timer
            clearInterval(timer)
        }
        if (isTimerStart) { // if the user click the start button then a new time will start
            setTimer(
                setInterval(() => {
                    setCounter((prevState) => prevState + 1)
                }, 1000),
            )
        }
        return () => { // if component remove from DOM then it will clear the timer from memory
            clearInterval(timer)
        }
        // eslint-disable-next-line
    }, [isTimerStart])

    const onStartHandler = () => { // to handle the timer on start button click
        const value = inputRef.current.value;
        if (!timer || (isTimerStart && timer)) {
            setCounter(parseInt(value));
        }
        setIsTimerStart(true);
    }
    const onStopHandler = () => { // to stop the timer on stop button click
        setIsTimerStart(false);
    }
    const onDeleteHandler = () => { // to delete the timer on delete button click
        clearInterval(timer);
        setTimer(null);
        setIsTimerStart(false);
        setCounter(0);
    }

    return (
        <div className="container">
            <div className='header'>
                <h1>Counter App</h1>
            </div>
            <div className="card">
                <Counter count={counter} />
                <div className="input-field">
                    <label>Start from</label>
                    <input type="number" defaultValue="0" ref={inputRef} />
                </div>

                <div className="action-field">
                    <button className="btn btn__success mx" onClick={onStartHandler}>
                        <img alt='play-icon' style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} src={playIcon} />
                        START
                    </button>
                    <button className="btn btn__outlined mx" onClick={onStopHandler}>
                        <img alt='stop-icon' style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} src={stopIcon} />
                        STOP
                    </button>
                    <button className="btn btn__delete" onClick={onDeleteHandler}>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
