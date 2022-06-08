import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useContext } from "react";
import MoviesContext  from "../context/MoviesContext";
function Add(props) {

  const [titulo, setTitulo] = useState("");
  const [rate, setRate] = useState("");
  const [linkImage, setLinkImage] = useState("");

  const {handleAdd} = useContext(MoviesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(titulo, rate, linkImage);
  };

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleLink = (e) => {
    setLinkImage(e.target.value);
  };

  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Add new movie <div>&nbsp;</div>
          </Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter movie title" onChange={handleTitulo}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text"  placeholder="Enter cover image link" onChange={handleLink}/>
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRate">
                <Form.Label>Rate</Form.Label>
                <Form.Select aria-label="Rate the movie" onChange={handleRate}>
                  <option>Select a value</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit"> Add movie
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Add;
