import React , {useState} from 'react';
import { evaluate } from 'mathjs';

let toBeOperated = "";

function App(){
    const [result, updateResult] = useState(0);
    function handleClick(event){

        if(event.target.value === "reset"){
            updateResult(0);
            toBeOperated = "";
        }
        else if(event.target.value === "="){
            updateResult(evaluate(toBeOperated));
        }
        else{
            toBeOperated = toBeOperated.concat(event.target.value)
            updateResult(toBeOperated);
        }
        console.log(toBeOperated);
    }

    return <div className='calculator'>
        <div className='result'>{result}</div>
        <div className='buttons'>
            <button onClick={handleClick} className = "button function"  value = "reset">AC</button>
            <button onClick={handleClick} className = "button function"  value = "(">(</button>
            <button onClick={handleClick} className = "button function"  value = ")">)</button>
            <button onClick={handleClick} className = "button operator" value = "/">÷</button>
            <button onClick={handleClick} className = "button" value = "7">7</button>
            <button onClick={handleClick} className = "button" value = "8">8</button>
            <button onClick={handleClick} className = "button" value = "9">9</button>
            <button onClick={handleClick} className = "button operator" value = "*">×</button>
            <button onClick={handleClick} className = "button" value = "4">4</button>
            <button onClick={handleClick} className = "button" value = "5">5</button>
            <button onClick={handleClick} className = "button" value = "6">6</button>
            <button onClick={handleClick} className = "button operator" value = "-">-</button>
            <button onClick={handleClick} className = "button" value = "1">1</button>
            <button onClick={handleClick} className = "button" value = "2">2</button>
            <button onClick={handleClick} className = "button" value = "3">3</button>
            <button onClick={handleClick} className = "button operator" value = "+">+</button>
            <button onClick={handleClick} className = "button number-0" value = "0">0</button>
            <button onClick={handleClick} className = "button" value = ".">.</button>
            <button onClick={handleClick} className = "button operator" value = "=">=</button>
        </div>
    </div>;
}

export default App;