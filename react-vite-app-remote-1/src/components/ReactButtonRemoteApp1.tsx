import {useState} from 'react'
import styles from './ReactButtonRemoteApp1.module.css'

function ReactButtonRemoteApp1() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
                Remote React App1 count is {count}
            </button>
        </>
    )
}

export default ReactButtonRemoteApp1
