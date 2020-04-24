import React from 'react';
import styles from './FeedbackOptions.module.css';

export default ({onLeaveFeedback}) =>{
    return (
        <>
            <button className={styles.btn} type="submit" name="good" onClick={onLeaveFeedback}>Good</button>
            <button className={styles.btn} type="submit" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
            <button className={styles.btn} type="submit" name="bad" onClick={onLeaveFeedback}>Bad</button>
        </>
    )
} 