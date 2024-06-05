import { MdCancel } from "react-icons/md";
import Popcoin from "./Popularcoin";
const Popmodal = ({setopenmodal}) => {
    return ( <>
    <div className="overlay">
        <div className="innermodal">
        <button className="modalbutton"><MdCancel size={35} color="white" /></button>
        
    <h4>Centered Modal</h4> 
    <Popcoin setopenmodal={setopenmodal} />
</div>
    </div>
    </> );
}
 
export default Popmodal;