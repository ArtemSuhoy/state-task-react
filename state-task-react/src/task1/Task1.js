import React, {useState} from 'react'
import './Task1.css';
const Task1 = () =>{

    
    const [count, setCount] = useState('0'); // task 1
    const [countThird, setCountThird] = useState(0);
    const [countFourth, setCountFourth] = useState(0);

    return(
        <div className='Task1'>
         <p onClick={ () => setCount(+count+1) }> 
         {   
             (count < 10)? `${count} - меньше 10` : 
             (count == 10) ? `${count} - равно 10` :
             `${count} больше 10`
          }
          </p>
        


          <div className='countThird'>
            <button onClick={ () => setCountThird(countThird - 1)}>
                -
            </button>
                <span>{countThird}</span>
            <button onClick={ () => setCountThird(countThird + 1)}>
                +
            </button>
          </div>

          
          <div className='countFourth'>
            <button onClick={ () => setCountFourth(countFourth + 1)}>
                +1
            </button>
            <button onClick={ () => setCountFourth(countFourth + 5)}>
                +5
            </button>
            <button onClick={ () => setCountFourth(countFourth + 10)}>
                +10
            </button>
            <button onClick={ () => setCountFourth(countFourth * countFourth)}>
                square
            </button>
            <button onClick={ () => setCountFourth(0)}>
                reset
            </button>
            <p>{countFourth}</p>
          </div>

        </div>
    )
}

export default Task1