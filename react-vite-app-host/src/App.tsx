import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactButtonRemoteApp1 from 'react-vite-app-remote-1/ReactButtonRemoteApp1';
import ReactButtonRemoteApp2 from 'react-vite-app-remote-2/ReactButtonRemoteApp2';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <ul>
                    <li>
                        <button style={{width: "270px"}} onClick={() => setCount((count) => count + 1)}>
                            Local React App count is {count}
                        </button>
                    </li>
                    <li>
                        <ReactButtonRemoteApp1/>
                    </li>
                    <li>
                        <ReactButtonRemoteApp2/>
                    </li>
                </ul>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
