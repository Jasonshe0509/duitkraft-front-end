import { useState } from 'react';

import "../dashboard/dashboard.css";



function Table() { 
    const[selected,setSelected]=useState(null)
    const toggle = (i) =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
        
    }
    
    return(
<div className="justify-center items-center bg-white">
        <div>
            {wee.map((item,i) => (
                <table>
                <div className="item">
                    <div className='title' onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i?'-':'+'}</span>
                    </div>
                    <tr>
                    <div className={selected === i?'content show':'content'}>{item.answer}</div>
                    </tr>
                </div>
                </table>
            ))}
        </div>

</div>

    )


}


const wee =[
    {question:'hi',
    answer:"hihi"},
    {question:'hi',
    answer:"hihi"},
    ]

    export default Table;
