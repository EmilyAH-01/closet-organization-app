import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./styling/additem.css";
//import ImageUpload from "../components/ImageUpload";
import axios from "axios";
//import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import PhotosListReducer from '../reducers/PhotosListReducer';
import UploadedPhotosReducer from '../reducers/UploadedPhotosReducer';
import config from '../config/config';
import PhotoApp from "../components/PhotoApp";

const rootReducer = combineReducers({
  photos: PhotosListReducer,
  uploadedPhotos: UploadedPhotosReducer,
});

const store = createStore(rootReducer);
const {cloud_name, upload_preset} = config;

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

  // function handleImageUpload(event) {
  //   setFormObject({...formObject, source: event.target.files[0]});
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("photo", formObject.source);

  //   // Upload file to Cloudinary and return the image url, to 
  //   // be stored in API.saveClothingItem({...source:   })
  //   //s
  //   // Might need to store image url in State first
  // }

  // On form submission, save input and reload
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.clothingType && formObject.source) {
      API.saveClothingItem({
        clothingType: formObject.clothingType,
        brand: formObject.brand,
        colors: formObject.colors,
        ethical: formObject.ethical
      })
        .then(res => loadClothing())
        .catch(err => console.log(err));
    }
  };

    return (
      <section className="addSection">
      <Container>        
        <Row >
          <Col size="m12">
          <div className="closetDiv">
            <h3 id="addclosetitem">Add Closet Item:</h3>
            <form encType="multipart/form-data">
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
              <Input
                onChange={handleInputChange}
                name="ethical"
                placeholder="Ethical? (required, yes or no)"
              />
              <Input
                onChange={handleInputChange}
                name="source"
                placeholder="Image link (required)"
              />
              <FormBtn
                disabled={!(formObject.clothingType && formObject.source)}
                onClick={handleFormSubmit}
              >
                Submit Item
              </FormBtn>
              <Provider store={store}>
                  <PhotoApp cloudName={cloud_name} uploadPreset={upload_preset}/>
              </Provider>
              
            </form>
            </div>
          </Col>
          
        </Row>

      </Container>
      </section>
    );
  }


export default AddItem;
