import { Toaster } from "react-hot-toast";
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global";


const App = () => {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
