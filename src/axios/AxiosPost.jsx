import { useState } from "react";
import axios from "axios";

const AxiosPost = () => {
  const data = { fName: "", lastName: "" };
  const [inputData, setInputData] = useState(data);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", inputData)
      .then((response) => console.log(response));
  };

  const handelUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", inputData)
      .then((response) => console.log(response));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form>
        <label htmlFor="fName">First Name: </label>
        <input
          type="text"
          name="fName"
          value={inputData.fName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={inputData.lastName}
          onChange={handleData}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handelUpdate}>update</button>

        <button onClick={handleDelete}>delete</button>
      </form>
    </div>
  );
};

export default AxiosPost;
