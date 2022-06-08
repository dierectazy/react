import React from 'react'
import { Card } from 'react-bootstrap'
import StarRating from './shared/StarRating'

function 
MoviePreview(props) {
  return (
    <div className="d-flex ">
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src={props.thumb} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Footer><StarRating id={props.id} rate={props.rate} max={10} handleRating={props.handleRating}></StarRating></Card.Footer>
         </Card.Body>
    </Card>
    </div>
  )
}

export default MoviePreview
