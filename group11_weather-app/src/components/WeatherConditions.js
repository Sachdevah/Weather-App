import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const WeatherConditions = ({currentWindSpeed, currentUVI, currentPollution, currentPressure, changeScreen}) => {
    
    // call changeScreen when one a weather condition is clicked
    const changeScreenHandler = (e) => {changeScreen(e)}
    
    return (
        <div className="weatherConditionGroup"> 
            <Row className=" weatherConditions text-center justify-content-center mt-3"> 
                <Col className="weatherCondition border-right" xs="4">
                    <div className="btnWind" onClick={changeScreenHandler}>
                        <p className="btnWind font-weight-bold text-center m-0"> Wind </p>
                        <p className="btnWind text-center m-0"> {Math.round(currentWindSpeed*2.237)+"mph"} </p>
                    </div>
                </Col> 
                
                <Col className="weatherCondition border-right" xs="4">
                    <div className="btnUV" onClick={changeScreenHandler}>
                        <p className="btnUV font-weight-bold text-center m-0"> UV </p>
                        <p className="btnUV text-center m-0"> {Math.round(currentUVI)+"/11"} </p>
                    </div>
                </Col> 
                
                <Col className="weatherCondition" xs="4">
                    <div className="btnPollution" onClick={changeScreenHandler}>
                        <p className="btnPollution font-weight-bold text-center m-0"> Pollut. </p>
                        <p className="btnPollution text-center m-0"> {currentPollution+"/5"} </p>
                    </div>
                </Col> 
                
                <Col className="weatherCondition border-left" xs="4">
                    <div className="btnPressure" onClick={changeScreenHandler}>
                        <p className="btnPressure font-weight-bold text-center m-0"> Press. </p>
                        <p className="btnPressure text-center m-0"> {currentPressure+"hPa"} </p>
                    </div>
                </Col> 
            </Row> 
        </div> 

    )
}

export default WeatherConditions
