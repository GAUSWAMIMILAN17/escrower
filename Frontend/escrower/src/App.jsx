import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Portfolio from "./pages/Portfolio";
import Faq from "./pages/FAQ";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "testuser",
        email: "testuser@example.com",
        password: "testpassword"
      })
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Features />
    
      <Faq />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
export default App;
