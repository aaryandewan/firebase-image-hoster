import React from "react";
import Title from "./comps/Title";
import UploadForm from "./UploadForm";
import PhotoGrid from "./comps/photoGrid";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <PhotoGrid />
    </div>
  );
}

export default App;
