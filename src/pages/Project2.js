import React, {useState} from 'react'

import ButtonMatrix from '../project2/ButtonMatrix';
import Display from '../project2/Display'

import '../css/Project2.css'

const Project2 = () => {

    const [numberToStringValue, setNumberToStringValue] = useState("0");
    const [mathOperation, setMathOperation] = useState("");
    const [numberInMemory, setNumberInMemory] = useState("0");
    const [lastOperation, setLastOperation] = useState("");

    const setValue = (text,type) => {
      if (type === 'numeric') {
        if (numberToStringValue !== "0") {
          setNumberToStringValue(numberToStringValue + text);
        } else {
          setNumberToStringValue(text)
        }
      } else if (type === 'equal') {
        if (mathOperation === "+") {
          setLastOperation(`Wynik ostatniego działania: ${numberInMemory} ${mathOperation} ${numberToStringValue} = ${Number(numberInMemory) + Number(numberToStringValue)}`)
        } else if (mathOperation === "-") {
          setLastOperation(`Wynik ostatniego działania: ${numberInMemory} ${mathOperation} ${numberToStringValue} = ${Number(numberInMemory) - Number(numberToStringValue)}`)
        } else if (mathOperation === "*") {
          setLastOperation(`Wynik ostatniego działania: ${numberInMemory} ${mathOperation} ${numberToStringValue} = ${Number(numberInMemory) * Number(numberToStringValue)}`)
        } else if (mathOperation === "/") {
          setLastOperation(`Wynik ostatniego działania: ${numberInMemory} ${mathOperation} ${numberToStringValue} = ${Number(numberInMemory) / Number(numberToStringValue)}`)
        }
        setNumberToStringValue("0");
        setMathOperation("");
        setNumberInMemory("0");
      } else {
        setNumberInMemory(numberToStringValue);
        setMathOperation(text);
        setNumberToStringValue("0");
      }
    }

    return (
        <div className='project2'>
          <h1>Calculator</h1>
          <Display value={numberToStringValue}/>
          <ButtonMatrix setValue={setValue}/>  
          {lastOperation ? <p>{lastOperation}</p> : null}
        </div>
    )
}

export default Project2;