import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const Pressure = ({ currentPressure }) => {
    
    // returning information about pressure, given a pressure value
    function pressureLevel(value) {
        if (value <= 950) {
            return "Low"
        }
        if (value > 950 && value < 1050) {
            return "Normal"
        }
        if (value >= 1050) {
            return "High"
        }
    }
    
    return (
        <div>

            {/* displays current pressure */}
            
            <Row className="condition justify-content-center text-center mt-4 mb-3">
                <Col className="d-flex justify-content-center" >
                    <p className="mb-0 "> {"Pressure: " + currentPressure + "hPa"} </p>
                </Col>
            </Row>

            {/*tells about the current pressure */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0"> {pressureLevel(currentPressure)} Pressure </p>
                    </div>
                </Col>
            </Row>

            {/*current pressure as atmospheric pressure */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0">Pressure : {(currentPressure * 0.00098692).toFixed(4)} atm</p>
                    </div>
                </Col>
            </Row>

            {/* current pressure in 'inches mercury' unit or InHg units*/}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0">Mercury : {(currentPressure * 0.0295299294).toFixed(2)} InHg </p>
                    </div>
                </Col>
            </Row>

            {/* Link to an informative video related to pressure */}

            <Row className="condition justify-content-center text-center">
                <Col className=" d-flex justify-content-center" >
                    <a href= "https://www.youtube.com/watch?v=SWHj71qS_NA" type="button" className="conditionInfo btn btn-outline-light p-0" >  Click for video!</a>
                </Col>
            </Row>
        </div>
    )
}

export default Pressure
