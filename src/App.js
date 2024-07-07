import Footer from "./components/Footer/Footer";
import Sharit from "./components/sharit/Sharit";
import Shart2 from "./components/sharit2/Shart2";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import OurValue from "./pages/OurValue/OurValue";
import Residencies from "./pages/Residencies/Residencies";
function App() {
  return (
  
    <div className="App">
      
      <Home />
      <Sharit/>
      <Residencies />
      <OurValue/>
      <ContactUs/>
      <Shart2/>
      <Footer/>
    </div>
  );
}

export default App;
