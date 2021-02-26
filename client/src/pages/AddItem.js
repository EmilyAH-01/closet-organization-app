import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import ImageUpload from "../components/ImageUpload";

function AddItem() {
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
            <h3 id="addclosetitem">Add Closet Item:</h3>
            <form>
              <Input
                onChange={handleInputChange}
                name="clothingType"
                placeholder="Clothing Type (required)"
              />
              <Input
                onChange={handleInputChange}
                name="brand"
                placeholder="Brand (optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="colors"
                placeholder="Colors (optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="source"
                placeholder="Image link (required)"
              />
              <ImageUpload />
              <FormBtn
                disabled={!(formObject.clothingType && formObject.source)}
                onClick={handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
        </Row>

      </Container>
    );
  }


export default AddItem;
