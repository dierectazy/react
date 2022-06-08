import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Image from 'react-bootstrap/Image'
import StarRating from './shared/StarRating'
import {useLocation} from 'react-router-dom';
function MovieDetail(props) {

    const location = useLocation()

    const item = location.state.item
  return (
    <Container>
  <Row>
    <Col> 
    <Image src={item.thumb} fluid={true} />
    </Col>
    <Col>
    
    <Container>
  <Row>
    <Col sm={8}><h1>{item.title}</h1></Col>
    <Col sm={2}>
    <Link to={"/"}>Go back</Link>
    </Col>
  </Row>
  <Row>
  <Row></Row>
  <Col ><StarRating id={item.id} rate={item.rate} max={10} ></StarRating></Col>
    <Col>{item.year} </Col>
    <Col >{item.genre} </Col>
    
  </Row>

  <Row>
    <Col>{item.sinopsis}</Col>
   
  </Row>

 


</Container>

    
    </Col>
  </Row>
  
</Container>
  )
}

export default MovieDetail
