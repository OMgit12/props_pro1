import Card from "./components/Card";

function App() {

  let  obj = {
    name: "all",
    age: 25
  }
  return (
    <>
     <h1>
        Hello !
      </h1>
     <Card title = "harry" btntext= "click me"/>
     <Card title = "hariom" object= {obj} btntext= "click me"/>
    </>
  );
}

export default App;
