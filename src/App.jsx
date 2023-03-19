import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Stopwatch />
      </ChakraProvider>
    </div>
  );
}

export default App;
