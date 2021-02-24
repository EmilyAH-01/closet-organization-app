import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardContent } from "../components/Card";

function Clothing() {
  // Setting our component's initial state
  const [items, setClothing] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load clothing items and store using setClothing
  useEffect(() => {
    loadClothing()
  }, [])

  // Loads all clothing items
  function loadClothing() {
    API.getClothing()
      .then(res => 
        setClothing(res.data)
      )
      .catch(err => console.log(err));
  };

  // Update component state when user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // On form submission, save input and reload
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.clothingType && formObject.source) {
      API.saveClothingItem({
        clothingType: formObject.clothingType,
        brand: formObject.brand,
        colors: formObject.colors,
        source: formObject.source
      })
        .then(res => loadClothing())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container>
        <Row>
          <Col size="m12">
            <h3>My Closet:</h3>
            <Row>
              {items.length ? (
                items.map(item => (
                  <Col key={item._id} size="s6 m3">
                    <Card src={item.source}>
                      <CardContent>
                        <Link to={"/closet/" + item._id}>
                          <strong>
                            {item.clothingType} by {item.brand}
                          </strong>
                        </Link>
                      </CardContent>
                    </Card>
                  </Col>
                ))
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }


export default Clothing;
