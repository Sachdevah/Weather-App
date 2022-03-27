import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

const CurrentWeather = ({currentTemp, currentIcon, useCelsius}) => {
    
    var shownTemp = null;
    
    // Change displayed temp value based on user's weather unit choice
    if (useCelsius)
    {
        shownTemp = Math.round(currentTemp)
    }
    else
    {
        shownTemp = Math.round((currentTemp * 9/5) + 32) // converting from celsius to fahrenheit
    }

    const showAlert = () =>
    {
        // sweetalert2 library used to display how weather is predicted
        Swal.fire
        ({
            icon: 'info',
            html:
                '<style> h1, p {color:white;} </style>'+
                '<h1> How is Weather Predicted? </h1>' +
                '<p> Lots of data is collected about current weather </p>' +
                '<p> This data is fed into powerful supercomputers </p>' +
                '<p> The output from these computers provides the basis of a forecast! </p>',
            background: '#282c34',
            showCancelButton: true,
            cancelButtonText: "Close",
            confirmButtonText: "More info"
        }).then((result) =>
        {
            if (result.isConfirmed)
            {
                // open this link if user clicks on more info button
                window.open("https://www.metoffice.gov.uk/weather/learn-about/how-forecasts-are-made","_self")
            }
        })
    }


    return (
        <div>
            <Row className=" justify-content-center mt-4">
                <Col className=" d-flex justify-content-center " xs="4">
                    <p className="currentTemp"> {shownTemp+"°"} </p>
                </Col>
                <Col className=" d-flex justify-content-center " xs="4">
                    <img className="weatherIcon" src={currentIcon} alt="Weather Icon"/>
                </Col>
                <Col className=" d-flex justify-content-center " xs="auto">
                    <Button className=" weatherPrediction p-0" variant="outline-light" onClick={showAlert}> i </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CurrentWeather
