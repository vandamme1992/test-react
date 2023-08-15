import {useState} from "react";

const Counter = () => {


    let count = 0

    const [state, setState] = useState(0)
    const [value, setValue] = useState('');


    const handlerPlus = () => {
        setState(state + 1)
    }
    const handlerMinus = () => {
        setState(state - 1)
    }
    return <>
        <h1>{state}</h1>
        <input type="text" value={value}
               onChange={(e)=> setValue(e.target.value)}/>
        <button

            onClick={handlerPlus}>Increment</button>
        <button onClick={handlerMinus}>Decrement</button>
    </>
}

export default Counter;
