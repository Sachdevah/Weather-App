import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import btnHome from '../assets/btnHome.png'
import btnRecords from '../assets/btnRecords.png'
import btnProfile from '../assets/btnProfile.png'



const NavBar = ({changeScreen}) => {
    
    // Call function changeScreen when user clicks any navbar button
    const changeScreenHandler = (e) =>
    {
        changeScreen(e)
    }
    
    return (
        <div>
            <Row className="justify-content-center mr-5 ml-5 "> 
                <Col className=" homeBtn" xs="4">
                    <img className="btnHome img-fluid" src={btnHome} alt="Home" onClick={changeScreenHandler}/>
                </Col> 
                
                <Col className=" recordsBtn" xs="4">
                    <img className="btnRecords img-fluid" src={btnRecords} alt="Weather Records" onClick={changeScreenHandler}/>
                </Col> 
                
                <Col className="profileBtn" xs="4">
                    <img className="btnProfile img-fluid" src={btnProfile} alt="Profile" onClick={changeScreenHandler}/>
                </Col> 
            </Row>
        </div>
    )
}

export default NavBar
