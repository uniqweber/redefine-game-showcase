import Home from "./pages/home/Home";
import {SmoothScrollProvider} from "./context/SmoothScrollContext";

const App = () => {
  return (
    <>
      <SmoothScrollProvider>
        <Home />
      </SmoothScrollProvider>
    </>
  );
};

export default App;
