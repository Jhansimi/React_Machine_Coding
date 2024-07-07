import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./Board.css"

const ChooseBoardSize = ({chooseBoardSize}) => {


   
  return (
    <Container className='d-flex justify-content-center container'>
        <Row>
            <Col>
            <button className='grid-btn' onClick={()=>chooseBoardSize('4x4')}>4x4</button>
            </Col>
            <Col>
            <button className='grid-btn' onClick={()=>chooseBoardSize('4x4')}>6x6</button>
            </Col>
            <Col>
            <button className='grid-btn' onClick={()=>chooseBoardSize('4x4')}>8x8</button>
            </Col>
        </Row>

    </Container>
    
  )
}

export default ChooseBoardSize