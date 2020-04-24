import React from 'react'
import styles from './Statistics.module.css'
export default ({good,neutral,bad,total,positivePercentage}) => {
    return (
        <>
            <h2 className={styles.title}>Statistics</h2>
            {total() !==0 ? (<ul>
                <li className={styles.item}>Good: {good}</li>
                <li className={styles.item}>Neutral: {neutral}</li>
                <li className={styles.item}>Bad: {bad}</li>
                <li className={styles.item}>Total: {total()}</li>
                <li className={styles.item}>Positive feedback: {total() === 0 ? 0 : positivePercentage()}%</li>
             </ul>) : <p className={styles.item}>No feelbacks given</p> }
        </>
        )
}
