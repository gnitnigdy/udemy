import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [dataAPI, setDataAPI] = useState([]);

  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const addData = () => {
    axios
      .post(
        "https://reqres.in/api/users",
        { name: name, job: job },
        { headers: { "x-api-key": "reqres-free-v1" } }
      )
      .then((res) => {
        alert("Success Create Data");
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    //getData();
    getData2();
  }, []);
  const getData = () => {
    axios
      .get("https://reqres.in/api/users", { "x-api-key": "reqres-free-v1" })
      .then((res) => {
        console.log(res.data.data);
        setDataAPI(res.data.data);
      })
      .catch((err) => console.log("error", err));
  };

  const [data2, setData2] = useState([]);

  const getData2 = () => {
    axios
      .get("https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee")
      .then((res) => {
        console.log("hasil data 2", res.data);
        setData2(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addData2 = () => {
    event.preventDefault();
    axios
      .post("https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee", {
        name: name,
        email: job,
      })
      .then((res) => {
        alert("Success Create Data");
      })
      .catch((err) => console.log(err));
  };

  const deleteData2 = (id) => {
    axios
      .delete(
        `https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee/${id}`
      )
      .then((res) => {
        //setData2((data2) => data2.filter((item) => item.id !== id));
        getData2();
      })
      .catch((err) => console.log(err));
  };

  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  console.log("hasil fetch: ", dataAPI);

  const nextButton = () => {
    step < 3 ? setStep((prevNumber) => parseInt(prevNumber) + 1) : step;
  };

  const prevButton = () => {
    step > 1 ? setStep((prevNumber) => parseInt(prevNumber) - 1) : 1;
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div>
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={prevButton}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* {dataAPI.map((data) => {
        return <p key={data.email}>{data.email}</p>;
      })} */}
      <input
        type="text"
        placeholder="Input Your Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Input Your Job"
        onChange={(e) => setJob(e.target.value)}
      ></input>
      <button onClick={addData2}>Submit</button>
      {data2.map((data) => {
        return (
          <>
            <p key={data.id}>{data.email}</p>
            <button onClick={deleteData2(data.id)}> Delete</button>
          </>
        );
      })}
    </>
  );
}

export default App;
