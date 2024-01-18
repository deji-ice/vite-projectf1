import image from "./assets/Frame 289413(1).png";
import "./App.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import CardList from "./components/CardList";
import { ActionLink } from "./components/ActionLink";

const App = () => {
  const logger = ()=>{
    console.log("second")
  }
  return (
    <div className="bg-yellow-500">
      <NavBar />
      <ActionLink/>
      {/* <button
        onClick={() => {
          console.log("ghjkdfj")
          logger()
        }}
        className="bg-black text-white px-3 py-2"
      >
        click me
      </button> */}
      <Greeting name={"gladys"} age={"28"} />
      <Greeting>Babatunde</Greeting>
      <Greeting username="wahab" />
      <CardList />
      <img src="/Screenshot 2024-01-15 094857.png" />
      <img width={"200px"} src={image} />
    </div>
  );
};

export default App;
