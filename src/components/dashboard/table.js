import { useState } from 'react';

import "../dashboard/dashboard.css";
import RegisterModal from './Modal.js';



function Table() { 
    const[selected,setSelected]=useState(null)
    const toggle = (i) =>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
        

    }

    
    
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
        document.querySelector('.duitkraft').style.opacity = '0.5';
    };
    // useEffect(() => {
    //     if (openModal) {
    //         const timeoutId = setTimeout(() => {
    //             setOpenModal(false);
    //             // Redirect to login page (replace with your actual logic)
    //             window.location.href = "/";
    //         }, 1000); // Adjust timeout for 5 seconds

    //         return () => clearTimeout(timeoutId); // Cleanup on unmount
    //     }
    // }, [openModal]);


    return(
<div className="justify-center items-center bg-white">
        <div>
            {wee.map((item,i) => (
                <table>
                <div className="item">
                    <div className='title' onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i?'-':'+'}</span>
                    {openModal && <RegisterModal />}
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
