import image from "./assets/Frame 289413(1).png";
import "./App.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import CardList from "./components/CardList";
import { ActionLink } from "./components/ActionLink";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" relative h-screen bg-yellow-500">
      <Modal show={show} setShow={setShow} content title />
{/* 
      <NavBar /> */}
      <ActionLink />
      <button
        className="bg-black text-white px-3 py-2"
        onClick={() => setShow(true)}
      >
        click me
      </button>
      {/* <Greeting name={"gladys"} age={"28"} />
      <Greeting>Babatunde</Greeting>
      <Greeting username="wahab" />
      <CardList />
      <img src="/Screenshot 2024-01-15 094857.png" />
      <img width={"200px"} src={image} /> */}
    </div>
  );
};

export default App;
