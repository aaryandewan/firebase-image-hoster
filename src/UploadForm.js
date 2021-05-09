import React, { useState } from "react";
import UseStorage from "./hooks/useStorage";
import { TempCustomHook } from "./context";

const UploadForm = () => {
  let { counter, setCounter } = TempCustomHook();
  let a = counter;

  const [file, setFile] = useState(null);
  const [filee, setFilee] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    console.log(e.target.files[0]);
    let filee = e.target.files[0];
    setFilee(filee);

    const allowedTypes = ["image/png", "image/jpeg"];

    if (filee && allowedTypes.includes(filee.type)) {
      setFile(filee);
      setError(null);
      //   setFile(null);

      console.log("new counter is ", counter);
    } else {
      setFile(null);
      setError("Please select an image ONLY");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler}></input>
      <div className="output">{error && <div>{error}</div>}</div>
      <div className="output">{file && <UseStorage file={filee} />}</div>
    </form>
  );
};

export default UploadForm;
