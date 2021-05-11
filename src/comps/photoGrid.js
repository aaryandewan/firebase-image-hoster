import React from "react";
import firebase from "firebase";
import { useState, useEffect } from "react";
import { TempCustomHook } from "../context";
import { Container, Row, Col } from "react-bootstrap";

const PhotoGrid = () => {
  const { counter, setCounter } = TempCustomHook();
  const [tempCounter, setTempCounter] = useState(0);
  let db = firebase.firestore();
  const [photoArr, setPhotoArr] = useState([]);
  const allPhotos = [];

  useEffect(() => {
    db.collection("users").onSnapshot((querySnapshot) => {
      console.log("Fired");
      querySnapshot.forEach((doc) => {
        setPhotoArr((oldArr) => [...oldArr, doc.data().avatar]);
        console.log("ZZZ", doc.data());
      });
    });

    setPhotoArr(allPhotos);
    console.log(photoArr);
  }, [counter]);

  return (
    <>
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
          {photoArr.map((image) => {
            return (
              <Col className="mb-4 mr-4">
                <img src={image} className="img-fluid"></img>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default PhotoGrid;
