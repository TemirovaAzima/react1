import React from 'react'
import './index.css'
import {PiAlienThin, PiAndroidLogoDuotone} from 'react-icons/pi'
import {DiAndroid} from "react-icons/di";
const App = () => {
    const dizayn = {color:'red', textAlign:'center'}
    return (
        <>
            <h1 style={dizayn}>Hello World
                <PiAlienThin/>
                <PiAndroidLogoDuotone />
                <DiAndroid />
            </h1>
        </>
    )
}
export default App
