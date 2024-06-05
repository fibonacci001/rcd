import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Initmodel from './Initmodal';
import { Link } from 'react-router-dom';

const Popcoin = () => {
    
    const [firstmodal, setfirstmodal] = useState(false)
    const [coinmodal, setcoinmodal] = useState(false)
    const [check, setcheck] = useState('')
    
    const Popularcoins = [
        { src: 'pimages/phantom wallet.png', name: 'phantom wallet' },
        { src: 'pimages/Coinbase.png', name: 'Coinbase' },
        { src: 'pimages/trust wallet.png', name: 'Trust' },
        { src: 'pimages/Metamask.png', name: 'Metamask' },
      ];

      const [activesrc, setactivesrc] = useState(null)
      const handlepop = ({coin}) => {
        setactivesrc({coin})
        setfirstmodal(true)
        
        
      }
      const handlecoinpop = () => {
        setcoinmodal(true)
        setcheck('phase one checked')
      }
     
    return ( <>
    <Container>
        <Row>
    <Col sm={12} md={12} lg={12} className='popular-coins'>
    {Popularcoins.map((coin) => (
        <div key={coin.src} className="coin-avatar">
            <div onClick={() => handlepop({coin})} className='popdisplay'>
          <img src={coin.src} alt={coin.name} />
          <p className='coin-name'>{coin.name}</p>
          </div>
        </div>
        
      )
      
      )}
      <div className="coin-avatar">
      <Link className='coinlink' to={'/coins'}>
        <div className='popdisplay'>

      <img src="pimages/Wallet Connect.png"  className="" alt="" />
      <p className="coin-name">WalletConnect</p>

      </div>
      </Link>
      </div>

      {firstmodal && <Initmodel setfirstmodal={setfirstmodal} activesrc={activesrc}/>}

      
    </Col>
        {/* <Col sm={4} md={6}>sm=4</Col> */}
      </Row>
    </Container>
   

    </> );
}


 
export default Popcoin;