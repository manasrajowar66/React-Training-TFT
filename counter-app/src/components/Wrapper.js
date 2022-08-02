import React, { useState, useRef, useEffect } from 'react';
import Counter from './Counter';
import playIcon from '../assets/round-play-button.png';
import stopIcon from '../assets/stop-button.png';
import styles from './Wrapper.module.css';

const Wrapper = () => {
    const inputRef = useRef();
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(null);
    const [isTimerStart, setIsTimerStart] = useState(false);


    useEffect(() => {
        console.log("logged");
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


    // on start it fetch the current entered value and pass through the couter state
    const onStartHandler = () => {
        const value = inputRef.current.value;
        if (!timer || (isTimerStart && timer)) {
            setCounter(parseInt(value));
        }
        setIsTimerStart(true);
    }


    // on stop it will pause the timer
    const onStopHandler = () => {
        setIsTimerStart(false);
    }

    // on delete it will clear the timer and remove the counter from DOM
    const onDeleteHandler = () => {
        clearInterval(timer);
        setTimer(null);
        setIsTimerStart(false);
        setCounter(0);
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.header}`} >
                <h1>Counter App</h1>
            </div>
            <div className={`${styles.card}`}>
                {(isTimerStart || timer) && <Counter count={counter} />}
                <div className={`${styles["input-field"]}`}>
                    <label>Start from</label>
                    <input type="number" defaultValue="0" ref={inputRef} />
                </div>

                <div className={`${styles["action-field"]}`}>
                    <button className="btn btn__success mx" onClick={onStartHandler}>
                        <img alt='play-icon' className={`${styles.icons}`} src={playIcon} />
                        START
                    </button>
                    <button className="btn btn__outlined mx" onClick={onStopHandler}>
                        <img alt='stop-icon' className={`${styles.icons}`} src={stopIcon} />
                        STOP
                    </button>
                    <button className="btn btn__delete" onClick={onDeleteHandler}>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
