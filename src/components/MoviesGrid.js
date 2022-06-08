import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MoviePreview from "./MoviePreview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { Link } from "react-router-dom";

import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

function MoviesGrid(props) {

  const {movies} = useContext(MoviesContext)
  
  return (
    <div>
      <Row>
        {movies.map((item) => (
          <Col sm>
            <Link to={`/movieDetail/${item.id}`} state={{ item: item }}>
              <MoviePreview
                id={item.id}
                name={item.title}
                thumb={item.thumb}
                rate={item.rate}
                handleRating={props.handleRating}
              ></MoviePreview>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MoviesGrid;
