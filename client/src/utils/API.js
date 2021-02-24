import axios from "axios";

export default {
  // Gets all clothing
  getClothing: function() {
    return axios.get("/api/closet");
  },
  // Gets the article of clothing with the given id
  getClothingItem: function(id) {
    return axios.get("/api/closet/" + id);
  },
  // Deletes the article of clothing with the given id
  deleteClothingItem: function(id) {
    return axios.delete("/api/closet/" + id);
  },
  // Saves an article of clothing to the database
  saveClothingItem: function(clothingData) {
    return axios.post("/api/closet", clothingData);
  }
};
