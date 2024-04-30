import { useEffect } from "react";
import Content from "../components/Contact/Content";
import Footer from "../components/Footer";

function Contact() {
  useEffect(() => {
    document.title = "Contact | My Team";

    return () => {
      document.title = "My Team";
    };
  }, []);
  return (
    <>
      <Content />
      <Footer />
    </>
  );
}

export default Contact;
