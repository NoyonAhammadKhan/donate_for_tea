import { ethers } from 'ethers';
import React from 'react';



const Buy = ({state}) => {
    const {contract}=state;

    const buyChai=async(e)=>{
            e.preventDefault();
            // const {contract}=state;
            const name = document.querySelector("#name").value;
            const message = document.querySelector("#message").value;
            // console.log(name,message,contract);

            const amount ={value:ethers.utils.parseEther("0.001")}
            const transaction = await contract.buyChai(name,message,amount);
            await transaction.wait();
            console.log("Transaction")
    }
    return (
        <div>
            <form action="" style={{marginLeft:"900px",marginTop:"300px"}}>
                <input type="text" id="name" placeholder='Enter your name' style={{marginBottom:"20px"}}/>
                <br />
                <textarea name="" id="message" cols="30" rows="10" placeholder='Enter Your Message Here'></textarea>
                <br />
                <button className='btn btn-primary' type='submit' onClick={buyChai} disabled={!state.contract}>pay</button>
            </form>
        </div>
    );
};

export default Buy;