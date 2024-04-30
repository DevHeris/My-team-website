import Hero from "../components/About/Hero";
import Directors from "../components/About/Directors";
import Clients from "../components/About/Clients";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.title = "About | My Team";

    return () => {
      document.title = "My Team";
    };
  }, []);
  return (
    <>
      <Hero />
      <Directors />
      <Clients />
      <GetStarted />
      <Footer />
    </>
  );
}

export default About;
