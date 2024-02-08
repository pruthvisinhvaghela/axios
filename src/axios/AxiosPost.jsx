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
      </form>
    </div>
  );
};

export default AxiosPost;
