import Nav from "./Nav";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdVerified } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Popcoin from "./Popularcoin";
import Popmodal from "./Popmodal";
import './styles.css';
import CrowdfundingStatus from "./coinamount";

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [openmodal, setopenmodal] = useState(false)
    const handlepop = () => {
        setopenmodal(true)
    }


  return(
    <main className="maintab" style={{ backgroundColor: "black" }}>
      {/* <Nav />   */}
      <div className="first-section">
        <div className="text-div">
    <h3 className="header-text">Introducing <Badge bg="primary">$TRUMPJET ✈</Badge>
</h3>
<p className="header-p">
I believe it’s time to stand up for our country and support a movement that represents the true patriots of this great nation. The Trump Jet, symbolized by the <b>$TRUMPJET</b> crypto coin, is a beacon of hope for those who believe in the future of America.
<br></br>
The Trump Jet stands for the fight against the massive injustices committed against Donald Trump by the evil left-wing Demoncrats. These corrupt politicians have tried to silence him, discredit him, and divide our nation. But we, the true patriots, will not be silenced. We will rise, and we will ride the Trump Jet to a better future.

</p>
<Stack direction="horizontal" gap={2} className="icon-tabs">
<Button className="btn-v" variant="outline-primary">VERIFIED <MdVerified /></Button>
<Button className="btn-v"  variant="outline-primary">RENOUNCED <MdVerified /></Button>
<Button className="btn-v"  variant="outline-primary">LP BURN <MdVerified /></Button>
<Button className="btn-v"  variant="outline-primary">TAX 0/0  <MdVerified /></Button>
</Stack>
</div>


      </div>
    <div className="record">
<CrowdfundingStatus />
    </div>
    <div className="connet-button">
    <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        CONNECT WALLET
      </Button>
      {/* <Button variant="outline-primary" onClick={handlepop}> 
      CONNECT WALLET
      </Button> */}
    </div>
    
    <VerticallyCenteredModal
        show={modalShow}
        setModalShow ={setModalShow}
        onHide={() => setModalShow(false)}
      />

     {/* {openmodal && <Popmodal setopenmodal={setopenmodal} />} */}
    
    

    </main>
    

  );  

}

function VerticallyCenteredModal({show, onHide, setModalShow}) {
  const [isopen, setisopen] = useState(true)
  if (isopen === false) {
    setModalShow(false)
  }
    return (
      <Modal
      show={show}
      onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter mod-title">
            Connect a wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
       
          <Popcoin  />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Home;



