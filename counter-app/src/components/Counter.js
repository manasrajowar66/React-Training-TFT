import React from 'react';
import styles from './Counter.module.css';


const Counter = (props) => {
    return (
        <div className={`${styles.counter}`}>
            {props.count}
        </div>
    )
}

export default Counter;
