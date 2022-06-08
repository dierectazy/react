import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Header from "./components/Header";
import { useState } from "react";

import Add from "./components/Add";
import MoviesGrid from "./components/MoviesGrid";
import MoviesData from "./components/data/MoviesData";

import AboutPage from "./pages/AboutPage";
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MoviesProvider } from "./context/MoviesContext";

function App() {


  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Container>
                  <Row>
                    <Col sm={6}>
                      {" "}
                      <Header></Header>{" "}
                    </Col>
                    <Col sm={5}>
                      {" "}
                      <Add></Add>{" "}
                    </Col>
                  </Row>
                  <MoviesGrid ></MoviesGrid>
                </Container>
              </>
            }
          ></Route>

          <Route
            path="/movieDetail/:movieId"
            element={<MovieDetail></MovieDetail>}
          />
          <Route path="/about/" element={<AboutPage></AboutPage>} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
