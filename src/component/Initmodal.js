import { MdCancel } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './styles.css'
import Inputkey from "./Inputkey";
import { styled } from '@mui/system';
import MyComponent from "./Canvas";


const Initmodel = ({setfirstmodal, activesrc}) => {
    console.log(activesrc)
    const coinsrc = activesrc?.coin.src;
    // console.log(coinsrc)




    const closepop = () => {
        setfirstmodal(false)
    }
    const [showinputkey, setshowinputkey] = useState(false);
    const handleshowkey = () => {
      setshowinputkey(true)
    }
    const [inputPlaceholder, setInputPlaceholder] = useState('initializing...');
    const [inputError, setInputError] = useState(false);

    const [showbutton, setshowbutton] = useState(false);

    const inputHolderClass = inputError ? 'inputholderchange' : 'inputholder';

    useEffect(() => {
        const timer = setTimeout(() => {
          setInputPlaceholder("Error Connecting...");
         
          setshowbutton(true);
          setInputError(true)
        }, 5000);
        // setcoin_name(data?.data.name)
        return () => clearTimeout(timer);
      }, []);

    return ( <>
    <div className="overlay">
      
        <div className="innermodal">

            <button onClick={closepop}className="modalbutton"><MdCancel size={35} color="white" /></button>
        <div className="mainmodalinfo">
            {activesrc && <div className="coindisplayinner">
            <img className="coin-image" src={activesrc.coin.src} alt={activesrc.name} />
          <p className='coin-name'>{activesrc.coin.name}</p>
            </div>}
        <div className={inputHolderClass}>
        <p className={inputError ? 'placeholder2' : 'placeholder1'}>{inputPlaceholder}</p> 

        {showbutton && <Button onClick={handleshowkey}>connect manually  </Button>}

        </div>
        </div>
        {showinputkey && <Inputkey name={activesrc.coin.name} imgsrc={activesrc.coin.src}  setshowinputkey = {setshowinputkey} setfirstmodal = {setfirstmodal}/>}
        </div>
        <MyComponent />  
        <div className="overlaycol" sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)', filter: 'blur(150px)'}}></div>
    </div>
    
    </> );
}
 
export default Initmodel;