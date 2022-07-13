import React from "react";
// import axios from "axios";

const endpoint = "http://localhost:8000/api/file-upload"; //your endpoint

function App() {
  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("type", "category"); //any other properties

    // USING FETCH
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        token: "coll",
      },
    }).then((res) => res.json());

    console.log(res);

    // USING AXIOS
    // await axios({
    //   method: 'post',
    //   url: endpoint,
    //   data:formData,
    //   headers:{
    //     "Content-Type":'multipart/form-data',
    //     "token":"12345"
    //   }
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   }).catch(function(error) {
    //     console.log(error);
    //   })
  };

  return (
    <div className="App">
      <input type="file" name="file" onChange={onSubmit} />
    </div>
  );
}

export default App;
