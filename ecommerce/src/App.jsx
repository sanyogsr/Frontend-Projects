import {useFormStatus} from "react-dom"
import Navbar from "./components/Navbar";

function App() {

  const {} = useFormStatus()
  return (
    <>

      <Navbar />
    </>
  );
}

export default App;
