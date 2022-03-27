import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'


const UV = ({currentUVI}) => {
    
    // returns info about UV when given a UV index value
    function UV_data(currentUVI) {
        if(currentUVI <= 2){
            return{state: "Level : Low", colour: "Code : Green", protection: "No Sun Protection Required", txt_color:"#70F1CE"};
        }
    
        else if(currentUVI >2 && currentUVI <= 5){
            return{state: "Level : Medium", colour: "Code : Yellow", protection: "Sun Protection Advised",txt_color:"#EDC77A"};
        }
    
        else if(currentUVI >5 && currentUVI <= 7){
            return{state: "Level : High", colour: "Code : Orange", protection: "Sun Protection Advised",txt_color:"#EFA556"};
        }
    
        else if(currentUVI >7 && currentUVI <= 10){
            return{state: "Level : Very High", colour: "Code : Red", protection: "Extra Sun Protection Advised",txt_color:"#FE7148"};
        }
    
        else if(currentUVI >10){
            return{state: "Level : Extremely High", colour: "Code : Voilet", protection: "Take All Precuations!",txt_color:"#B093EF"};
        }
    
    }
    

    return (
        <div>
            {/* displaying current UV readings*/}
            <Row className="condition justify-content-center text-center mt-4 mb-3">
                <Col className="d-flex justify-content-center" >
                    <p className="mb-0 "> {"UV Index: " + currentUVI } </p>
                </Col>
            </Row>

            {/* displaying current UV state by taking the data from UV_data function */}
            
            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                    <p className="mb-0"> {UV_data(currentUVI).state} </p>
                    </div>
                </Col>
            </Row>

            {/* displaying the colour that corresponds to the current UV state by taking the data from UV_data function */}
            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0" style={{color: UV_data(currentUVI).txt_color}}> {UV_data(currentUVI).colour} </p>
                    </div>
                </Col>
            </Row>

            {/* displaying the suggested protection measures that corresponds to the current UV state by taking the data from UV_data function */}

            <Row className="condition justify-content-center text-center mb-2">
                <Col className=" d-flex justify-content-center" >
                    <div className="conditionInfo border">
                        <p className="mb-0"> {UV_data(currentUVI).protection} </p>
                    </div>
                </Col>
            </Row>
            
            {/* Link to an informative video related to UV */}

            <Row className="condition justify-content-center text-center">
                <Col className=" d-flex justify-content-center" >
                    <a href= "https://www.youtube.com/watch?v=9EVVqs1SjCo" type="button" className="conditionInfo btn btn-outline-light p-0" >  Click for video!</a>
                </Col>
            </Row>
        </div>
    )
}

export default UV
