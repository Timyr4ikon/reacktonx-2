import React  from 'react';
import styles from './Section.module.css'

export default ({title,children}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
                {children}
        </>
    )
}


