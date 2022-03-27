import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const Pollution = ({ currentPollution }) => {
    
    // Returning information about pollution when given a pollution value
    function pollutionCondition(value) {
        if (value === 1) {
            return {Condition: 'Good', AQI_Range: '0-50',color: "#70F1CE", suggestion: "Enjoy Normal Activity"};
        }
        else if (value === 2) {
            return {Condition: 'Fair', AQI_Range: '51-100', color: "#EDC77A",suggestion:"Fine For Walk"};
        }
        else if (value === 3) {
            return {Condition: 'Moderate', AQI_Range: '101-150', color:"#EFA556", suggestion:"Not Good For Sensitive People"};
        }
        else if (value === 4) {
            return {Condition: 'Poor', AQI_Range: '150-200', color: "#FE7148",suggestion:"Wear A Mask"};
        }
        else if (value === 5) {
            return {Condition: 'Very Poor', AQI_Range: '200+', color: "#B093EF",suggestion: "Avoid Outdoors"};
        }
    }
    
    return (
        <div>

            {/* displays current pollution level */}

            <Row className="condition justify-content-center text-center mt-4 mb-3">
                <Col className="d-flex justify-content-center" >
                    <p className=" mb-0"> {"Pollution: " + currentPollution + "/5"} </p>
                </Col>
            </Row>


            {/*tells about the air quality */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0"> Air Quality : {pollutionCondition(currentPollution).Condition} </p>
                    </div>
                </Col>
            </Row>

            {/* displays the AQI range */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border" style={{color: pollutionCondition(currentPollution).color}}>
                        <p className="mb-0">AQI Range : {pollutionCondition(currentPollution).AQI_Range}</p>
                    </div>
                </Col>
            </Row>

            {/* suggestion depending on current pollution level */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0" > {pollutionCondition(currentPollution).suggestion}</p>
                    </div>
                </Col>
            </Row>

            {/* Link to an informative video related to pollution */}

            <Row className="condition justify-content-center text-center">
                <Col className=" d-flex justify-content-center" >
                    <a href= "https://www.youtube.com/watch?v=OqHp03RRTDs&ab_channel=learningjunction" type="button" className="conditionInfo btn btn-outline-light p-0"> Click for video! </a>
                </Col>
            </Row>
        </div>
    )
}

export default Pollution
