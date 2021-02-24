import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Card } from "../components/Card";

function Detail(props) {
  const [item, setClothing] = useState({})

  // When this component mounts, grab the item with the _id of props.match.params.id
  // e.g. localhost:3000/closet/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getClothingItem(id)
      .then(res => setClothing(res.data))
      .catch(err => console.log(err));
  }, [])

  // Deletes an item from the database with a given id, then reloads db
  function deleteClothingItem(id) {
    API.deleteClothingItem(id)
      //.then(res => load...())
      .catch(err => console.log(err));
  }

  return (
      <Container>
        <Row>
          <Col size="m6">
            <div style={{padding:10}}>
              <h3>{item.clothingType} by {item.brand}</h3>
              <Card src={item.source} />
            </div>
          </Col>
          <Col size="m6">
            <div style={{padding:10}}>
              <article>
                <h3>Tags</h3>
                <p>
                  {item.colors}
                </p>
              </article>
              <DeleteBtn onClick={() => deleteClothingItem(item._id)} />
              <Link to="/">← Back to Closet</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
