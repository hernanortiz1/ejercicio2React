import HelloWord from "./components/HelloWorld";

function App() {
  const mensajeProps = "my friend!";
  return (
    <>
      <HelloWord mensajeProps={mensajeProps} />
    </>
  );
}

export default App;
