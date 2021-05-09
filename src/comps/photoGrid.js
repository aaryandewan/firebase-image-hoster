import React from "react";
import firebase from "firebase";
import { useState, useEffect } from "react";
import { TempCustomHook } from "../context";

const PhotoGrid = () => {
  const { counter, setCounter } = TempCustomHook();
  let db = firebase.firestore();
  const [photoArr, setPhotoArr] = useState([]);
  const allPhotos = [];

  useEffect(() => {
    // db.collection("users")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       setPhotoArr((oldArr) => [...oldArr, doc.data().avatar]);
    //       console.log("ZZZ", doc.data());
    //     });
    //   });

    db.collection("users").onSnapshot((querySnapshot) => {
      console.log("Fired");
      querySnapshot.forEach((doc) => {
        setPhotoArr((oldArr) => [...oldArr, doc.data().avatar]);
        console.log("ZZZ", doc.data());
      });
    });

    // db.collection("users")

    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       setPhotoArr((oldArr) => [...oldArr, doc.data().avatar]);
    //       console.log("ZZZ", doc.data());
    //     });
    //   });

    setPhotoArr(allPhotos);
    console.log(photoArr);
  }, [counter]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridGap: "50px 100px",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
        }}
      >
        {photoArr.map((image) => {
          return (
            <img
              src={image}
              style={{ height: "40vh", width: "20vw", paddingRight: "20px" }}
            ></img>
          );
        })}
        {console.log("don is ", photoArr)}
      </div>
    </>
  );
};

export default PhotoGrid;
