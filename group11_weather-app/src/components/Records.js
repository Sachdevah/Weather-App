import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from 'react-bootstrap'
import {useState} from 'react';

import btnInfo from '../assets/btnInfo.png'

const Records = () => {

    // Stores the three questions which can be asked
    const questions = 
    [
        {
            questionText: "When was the hottest day in the UK recorded?",
            answerOptions: 
            [
                {answerText: "10/08/03", isCorrect: "danger"},
                {answerText: "25/07/19", isCorrect: "success"},
                {answerText: "21/08/08", isCorrect: "danger"}
            ]
        },

        {
            questionText: "Which is the rainiest city in the UK?",
            answerOptions: 
            [
                {answerText: "Cardiff", isCorrect: "success"},
                {answerText: "Leeds", isCorrect: "danger"},
                {answerText: "London", isCorrect: "danger"}
            ]
        },

        {
            questionText: "When was the first weather satellite launched?",
            answerOptions: 
            [
                {answerText: "1949", isCorrect: "danger"},
                {answerText: "1959", isCorrect: "success"},
                {answerText: "1969", isCorrect: "danger"}
            ]
        }
    ]

    
    // state to store current questions and whether to display answers
    const [currentQ] = useState(Math.floor(Math.random() * questions.length)) //At render, a random question is chosen from the array
    const [displayAnswers, setDisplayAnswers] = useState(false)

    // When user chooses an answer, display all answers
    const handleAnswerButtonClick = () =>
    {
        setDisplayAnswers(true)
    }

    return (
        <div>
            <Row className="recordTitle  mt-4">
                <Col className="" >
                    <p className="mb-0 "> {questions[currentQ].questionText} </p>
                </Col>
            </Row>
            
            {/* Display options without revealing answers */}
            {displayAnswers === false && (
                <Row className="quizAnswers mt-2">
                {questions[currentQ].answerOptions.map((answerOption) =>
                (
                    <Col className="" xs="4">
                        <Button className="ml-0 p-1" variant="outline-light" onClick= {handleAnswerButtonClick}> {answerOption.answerText} </Button>
                    </Col>
                ))}
                </Row>
            )}

            {/* Display options, revealing answers */}
            {displayAnswers === true && (
                <Row className="quizAnswers mt-2">
                {questions[currentQ].answerOptions.map((answerOption) =>
                (
                    <Col className="" xs="4">
                        <Button className="border ml-0 p-1" variant={answerOption.isCorrect} onClick= {handleAnswerButtonClick}> {answerOption.answerText} </Button>
                    </Col>
                ))}
                </Row>
            )}

            {/* Natural disasters section */}
            <Row className="recordTitle  mt-4">
                <Col className="" >
                    <p className="mb-0 "> Learn about Natural Disasters: </p>
                </Col>
            </Row>

            <Row className="  mt-2">
                <Col className="">
                    <p onClick={() => {window.open("https://www.youtube.com/watch?v=CyOnZoIoDp8","_self")}} className="naturalDisaster border p-1  mb-0">2020 Australian Wildfires <img className=" btnInfo img-fluid" src={btnInfo} alt="Info"/> </p>
                </Col>
            </Row>

            <Row className="  mt-2">
                <Col className="" >
                    <p onClick={() => {window.open("https://www.youtube.com/watch?v=oWzdgBNfhQU","_self")}} className="naturalDisaster border p-1  mb-0"> 2011 Japan Earthquake <img className=" btnInfo img-fluid" src={btnInfo} alt="Info"/> </p>
                </Col>
            </Row>

            <Row className="  mt-2">
                <Col className="" >
                    <p onClick={() => {window.open("https://www.youtube.com/watch?v=sjVfkooyT6k","_self")}} className="naturalDisaster border p-1  mb-0"> 2010 Iceland Volcano Eruption <img className=" btnInfo img-fluid" src={btnInfo} alt="Info"/> </p>
                </Col>
            </Row>
        </div>
    )
}

export default Records
