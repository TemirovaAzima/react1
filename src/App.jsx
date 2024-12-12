//
// function ValidPassword(){
//     return <h1>togri parol</h1>
// }
// function InvalidPassword(){
//     return <h1>notugri parol</h1>
// }
//
// const Password=({isValid})=>{
//     return (isValid) ?  <ValidPassword/>: <InvalidPassword/>
// }
import UserStatus from  './components/UserStatus.jsx'
// import Weather from './components/Weather.jsx'
import Greeting from './components/Greeting.jsx'
export const App=()=>{
    return(
        // <Password isValid={true}/>
        // <Weather temperature={-9}/>
        // <UserStatus logIn={true} isAdmin={true} />
        <Greeting timeOfDay={'morning'}/>
    )
}