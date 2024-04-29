import Hero from "../components/Hero";
import Stories from "../components/Stories";
import BuildManage from "../components/BuildManage";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero />
      <BuildManage />
      <Stories />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
