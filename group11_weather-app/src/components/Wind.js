import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const Wind = ({currentWindSpeed, currentWindDirection}) => {
    
    // initialising variables
    var b_num = null;
    var description = null;
    var direction = null;
    var word_directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    
    // getting word direction from direction given in degrees 
    direction = word_directions[(currentWindDirection + 22.5) / 45.0 & 7]

    // updating variable depending on currentWindSpeed
    if (0 < currentWindSpeed && currentWindSpeed < 1) {
        b_num = 0
        description = "Calm"
    }
    else if (1 < currentWindSpeed && currentWindSpeed < 3) {
        b_num = 1
        description = "Light Air"
    }
    else if (3 < currentWindSpeed && currentWindSpeed < 7) {
        b_num = 2
        description = "Light Breeze"
    }
    else if (7 < currentWindSpeed && currentWindSpeed < 12) {
        b_num = 3
        description = "Gentle Breeze"
    }
    else if (12 < currentWindSpeed && currentWindSpeed < 18) {
        b_num = 4
        description = "Moderate Breeze"
    }
    else if (18 < currentWindSpeed && currentWindSpeed < 24) {
        b_num = 5
        description = "Fresh Breeze"
    }
    else if (24 < currentWindSpeed && currentWindSpeed < 31) {
        b_num = 6
        description = "Strong Breeze"
    }
    else if (31 < currentWindSpeed && currentWindSpeed < 38) {
        b_num = 7
        description = "Near Gale"
    }
    else if (38 < currentWindSpeed && currentWindSpeed < 46) {
        b_num = 8
        description = "Gale"
    }
    else if (46 < currentWindSpeed && currentWindSpeed < 54) {
        b_num = 9
        description = "Strong Gale"
    }
    else if (54 < currentWindSpeed && currentWindSpeed < 63) {
        b_num = 10
        description = "Whole Gale"
    }
    else if (63 < currentWindSpeed && currentWindSpeed < 75) {
        b_num = 11
        description = "Storm Force"
    }
    else if (currentWindSpeed && currentWindSpeed > 75) {
        b_num = 12
        description = "Hurricane Force"
    }
      
    
    return (
        <div>
            <Row className="condition justify-content-center text-center mt-4 mb-3">
                <Col className="d-flex justify-content-center" >
                    <p className="mb-0 "> {"Wind: " + currentWindSpeed + "mph"} </p>
                </Col>
            </Row>

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0">Beaufort Number : {b_num} </p>
                    </div>
                </Col>
            </Row>

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0"> {description} </p>
                    </div>
                </Col>
            </Row>

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0"> Direction : {direction} </p>
                    </div>
                </Col>
            </Row>

            <Row className="condition justify-content-center text-center">
                <Col className=" d-flex justify-content-center" >
                    <a href= "https://www.youtube.com/watch?v=SqbTrbxWT1o" type="button" className="conditionInfo btn btn-outline-light p-0" >  Click for video!</a>
                </Col>
            </Row>
        </div>
    )
}

export default Wind
