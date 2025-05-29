import {useState} from 'react'
import styles from './ReactButtonRemoteApp2.module.css'

function ReactButtonRemoteApp2() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
                Remote React App2 count is {count}
            </button>
        </>
    )
}

export default ReactButtonRemoteApp2