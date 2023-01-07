import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
