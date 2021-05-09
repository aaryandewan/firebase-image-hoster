import React, { useState, useEffect } from "react";
import projectStorage from "../firebase/config";
import firebase from "firebase";
import { TempCustomHook } from "../context";

import "firebase/storage";

const useStorage = ({ file }) => {
  let { counter, setCounter } = TempCustomHook();
  let a = counter;
  let db = firebase.firestore();

  var storageRef = projectStorage.ref();
  var spaceRef = storageRef.child(`images/${file.name}`);

  let uploadTask = spaceRef.put(file).then((snapshot) => {
    console.log("Uploaded a blob or file!");

    projectStorage
      .ref(`/images/${file.name}`)
      .getDownloadURL()
      .then((url) => {
        // Do something with the URL ...
        db.collection("users").add({
          name: file.name,
          avatar: url,
        });
        // setCounter(a + 1);
        console.log(url);
      });
  });

  console.log("haz");
  console.log(file.name);
  return <div></div>;
};

export default useStorage;
