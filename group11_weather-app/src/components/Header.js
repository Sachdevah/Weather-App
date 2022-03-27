import logo from '../assets/logo-white.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'
import {useState, useEffect} from 'react';

var date = new Date() // getting initial date
var longmonth = date.toLocaleString('default', {month: 'long'})

const Header = () => {
    
    const [currenttime, setTime] = useState(date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0"))
    const [currentdate, setDate] = useState(date.getDate() + " " + longmonth + ", " + date.getFullYear())

    // hook used to update time every minute
    useEffect(() => {
        let timer = setInterval(() => 
        {
            date = new Date()
            longmonth = date.toLocaleString('default', {month: 'long'})

            setTime(date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0"))
            setDate(date.getDate() + " " + longmonth + ", " + date.getFullYear())
        
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);
    
    
    return (
        <header>
            <Row className="justify-content-center align-items-center">
                <Col className=" d-flex justify-content-center pl-0 pr-0" xs > <img className="img-fluid mr-auto" src={logo} alt="Logo"/> </Col>
                <Col className=" d-flex justify-content-center pl-0 pr-0" xs>
                    <div className = "ml-auto">
                        <p className="time mb-0 mt-0 mr-0 text-center"> {currenttime} </p>
                        <p className="date mb-0 mt-0 mr-0 text-center"> {currentdate} </p>
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header
