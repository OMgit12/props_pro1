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
     <Card title = "harry"/>
     <Card title = "hariom" object= {obj}/>
    </>
  );
}

export default App;
