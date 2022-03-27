import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

const Location = ({currentCity}) => {

    return (
        <div>
            <Row className=" justify-content-center mt-3">
                <Col className=" d-flex justify-content-center" xs>
                    <p className="capitalise currentLocation text-center mb-0"> {currentCity.toLowerCase()}  </p>
                </Col>
            </Row>
        </div>
    )
}

export default Location
