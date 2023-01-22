import React, { useEffect, useState } from 'react';

const Memos = ({state}) => {
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    // const {contract}=state;
    useEffect(()=>{
        const memosMessage=async()=>{
           
            const memos = await contract.getMemos();
            setMemos(memos);
        }

        contract && memosMessage();
    },[])
    return (
        <div>
           <p>Message</p>
            <table>

           {memos.map((memo)=>{
            <tr><td>{memo.name}</td></tr>
                
           })} 
            </table>

        </div>
    );
};

export default Memos;