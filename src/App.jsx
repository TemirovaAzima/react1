import React from 'react'

const App = () => {
    return (
        <section>
            {/*<Button/>*/}
            {/*<Copy/>*/}
            <Move/>
        </section>
    )
}
export default App

// const Button =()=>{
//     // function showAlert(){
//     //     alert("Hello event ishladi")
//     // }
//     function clickHadler(){
//         alert(Math.round(Math.random()*10))
//     }
//     return (
//         <div>
//             {/*<button onClick={()=>alert('event ishladi')}>Click</button>*/}
//             {/*<button onClick={<h1>fhjf</h1>}>Click</button>*/}
//             <button onClick={clickHadler}>Click</button>
//         </div>
//     )
// }
// const Copy = ()=>{
//     const showAlert = ()=> alert('Copied')
//
//     return (
//         <p onCopy={()=> alert("Copied")}>
//             clear, transparent, translucent, limpid mean
//             capable of being seen through. clear implies absence of
//             cloudiness, haziness, or muddiness.clear, transparent, translucent, limpid mean capable of being seen through.
//             clear implies absence of cloudiness, haziness, or muddiness.
//         </p>
//     )
// }
const Move = ()=>{
    function mouseMove(){
        alert("MouseMove event worked")
        console.log('MouseMove event worked')
    }
    return (
        <p onMouseMove={mouseMove}>
            clear, transparent, translucent, limpid mean
            capable of being seen through. clear implies absence of
            cloudiness, haziness, or muddiness.clear, transparent, translucent,
            limpid mean capable of being seen through.
            clear implies absence of cloudiness, haziness, or muddiness.
        </p>
    )
}