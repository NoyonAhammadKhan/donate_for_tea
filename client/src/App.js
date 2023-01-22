
import {ethers} from 'ethers';
import abi from "./contracts/chai.json";
import { useEffect, useState } from 'react';
import Buy from './components/Buy';
import Memos from './components/Memos';
function App() {
     const [state,setState]= useState({provider:null,signer:null,contract:null});
    const [account,setAccount]=useState("None")
     useEffect(()=>{
        const connectWallet=async()=>{
          const contractAddress = "0x07d513F24D33478121aA8EC0eD957785d85B7c23";
          const contractABI = abi.abi;

        try{
            const {ethereum}=window;
            if(ethereum){
              const accounts = await ethereum.request({method:'eth_requestAccounts'});
              window.ethereum.on("chainChanged",()=>{
                window.location.reload();
              })

              window.ethereum.on("accountChanged",()=>{
                window.location.reload();
              })

              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(contractAddress,contractABI,signer);
              setAccount(accounts)
              setState({provider,signer,contract});
            }else{
              alert("Please install metamusk");
            }
           
          }catch(error){
            console.log(error);
          }
        }
       connectWallet(); 
     },[])
     console.log(state);
  return (
    <div className="App">
      <p>Connected Account-{account}</p>
    <Buy state={state}></Buy>
    <Memos state={state}></Memos>
    </div>
  );
}

export default App;
