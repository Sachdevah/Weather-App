import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {useState} from 'react';
import Switch from 'react-switch'

const Profile = ({locationAllowed, locationByPostcode, pc, changeWeatherUnit, uc}) => {
    
    // states for user's current postcode and user's choice for weather units
    const [postcode, setPostcode] = useState(pc)
    const [useCelsius, setUseCelsius] = useState(uc)

    // Call locationByPostcode when submit button clicked
    const handleSubmit = (e) => {locationByPostcode(postcode)}

    // Update postcode state when user changes value inside input
    const handleChange = (e) => {setPostcode(e.target.value)}

    // When switch used, update useCelsius state and call changeWeatherUnit
    const switchUsed = (e) => 
    {
        setUseCelsius(e)
        changeWeatherUnit(e)
    }
    
    return (
        <div>
            <Row className="profile mt-5">
                <Col className="">
                    <div>
                        {locationAllowed === false && (
                        <div className="mb-4">
                            <p className=" mb-2"> Use postcode for location?  </p>
                            <Form inline>
                                <Form.Group className=" mb-2">
                                    <input type="text" className="postcode form-control" id="inputZip" onChange={handleChange} defaultValue={pc} />
                                </Form.Group>
                            
                                <Button className="ml-3 mb-2" onClick={handleSubmit}> OK </Button>
                            </Form>
                        </div>
                        )}

                        <div>
                            <p className=" mb-1"> Weather Units: </p>
                            <Form inline>
                                <Form.Group>
                                    <p className=""> Fahrenheit </p>
                                </Form.Group>

                                <Form.Group>
                                    <Switch
                                    checked={useCelsius}
                                    onChange={switchUsed}
                                    onColor="#86d3ff"
                                    offColor="#86d3ff"
                                    handleDiameter={30}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    height={20}
                                    width={48}
                                    className=" slider react-switch ml-3 mr-3"
                                    id="material-switch"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <p> Celsius </p>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
