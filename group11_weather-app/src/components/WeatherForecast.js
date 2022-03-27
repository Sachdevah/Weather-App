import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const WeatherForecast = ({forecastDays, forecastHours, useCelsius}) => {

    // Given an epoch time, return its day in shorthand form 
    function getDay(epoch)
    {
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var d = new Date(0);
        d.setUTCSeconds(epoch)
        var day = days[d.getDay()];
        return day
    }

    // Given an epoch time, return its hour padded with :00 at the end
    function getHour(epoch)
    {
        var d = new Date(0);
        d.setUTCSeconds(epoch)
        var hr = d.getHours()
        return hr+":00"
    }
    
    // array for each day and its forecasted temp
    var day1 = [getDay(forecastDays[1].dt), Math.round(forecastDays[1].temp.day)]
    var day2 = [getDay(forecastDays[2].dt), Math.round(forecastDays[2].temp.day)]
    var day3 = [getDay(forecastDays[3].dt), Math.round(forecastDays[3].temp.day)]
    var day4 = [getDay(forecastDays[4].dt), Math.round(forecastDays[4].temp.day)]
    var day5 = [getDay(forecastDays[5].dt), Math.round(forecastDays[5].temp.day)]

    // array for each hour and its forecasted temp
    var hr1 = [getHour(forecastHours[1].dt), Math.round(forecastHours[1].temp)]
    var hr2 = [getHour(forecastHours[2].dt), Math.round(forecastHours[2].temp)]
    var hr3 = [getHour(forecastHours[3].dt), Math.round(forecastHours[3].temp)]
    var hr4 = [getHour(forecastHours[4].dt), Math.round(forecastHours[4].temp)]
    var hr5 = [getHour(forecastHours[5].dt), Math.round(forecastHours[5].temp)]

    // convert temps to fahrenheit dependent on useCelsius variable
    if (useCelsius === false)
    {
        // array for each day and its forecasted temp
        day1 = [getDay(forecastDays[1].dt), Math.round((forecastDays[1].temp.day * 9/5) + 32)]
        day2 = [getDay(forecastDays[2].dt), Math.round((forecastDays[2].temp.day * 9/5) + 32)]
        day3 = [getDay(forecastDays[3].dt), Math.round((forecastDays[3].temp.day * 9/5) + 32)]
        day4 = [getDay(forecastDays[4].dt), Math.round((forecastDays[4].temp.day * 9/5) + 32)]
        day5 = [getDay(forecastDays[5].dt), Math.round((forecastDays[5].temp.day * 9/5) + 32)]

        // array for each hour and its forecasted temp
        hr1 = [getHour(forecastHours[1].dt), Math.round((forecastHours[1].temp * 9/5) + 32)]
        hr2 = [getHour(forecastHours[2].dt), Math.round((forecastHours[2].temp * 9/5) + 32)]
        hr3 = [getHour(forecastHours[3].dt), Math.round((forecastHours[3].temp * 9/5) + 32)]
        hr4 = [getHour(forecastHours[4].dt), Math.round((forecastHours[4].temp * 9/5) + 32)]
        hr5 = [getHour(forecastHours[5].dt), Math.round((forecastHours[5].temp * 9/5) + 32)]
    }



    return (
        <div className="weatherConditionGroup">
            <Row className="weatherConditions justify-content-center text-center pb-4 mt-5">
                <Col className="weatherCondition border-right forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {hr1[0]} </p>
                    <p className=" text-center mb-0"> {hr1[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-right forecast " xs="4">
                    <p className="font-weight-bold mb-0"> {hr2[0]} </p>
                    <p className="  mb-0"> {hr2[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {hr3[0]} </p>
                    <p className=" text-center mb-0"> {hr3[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-left forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {hr4[0]} </p>
                    <p className=" text-center mb-0"> {hr4[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-left forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {hr5[0]} </p>
                    <p className=" text-center mb-0"> {hr5[1]+"°"} </p>
                </Col>
            </Row>

            <Row className="weatherConditions justify-content-center text-center pb-4 mt-3">
                <Col className="weatherCondition border-right forecast " xs="4">
                    <p className=" font-weight-bold text-center mb-0"> {day1[0]} </p>
                    <p className=" text-center mb-0"> {day1[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-right forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {day2[0]} </p>
                    <p className=" text-center mb-0"> {day2[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {day3[0]} </p>
                    <p className=" text-center mb-0"> {day3[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-left forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {day4[0]} </p>
                    <p className=" text-center mb-0"> {day4[1]+"°"} </p>
                </Col>

                <Col className="weatherCondition border-left forecast " xs="4">
                    <p className="font-weight-bold text-center mb-0"> {day5[0]} </p>
                    <p className=" text-center mb-0"> {day5[1]+"°"} </p>
                </Col>
            </Row>
        </div>
    )
}

export default WeatherForecast
