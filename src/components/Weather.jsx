import React from 'react'

const Weather =({temperature})=>{
    if(temperature<15){
        return <div>havo sovuq</div>
    }else if(temperature>15 && temperature <25){
        return <div>weather is good</div>
    }else {
        return <div>Weather is hot</div>
    }
}
export default Weather