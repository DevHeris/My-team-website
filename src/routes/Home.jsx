import Hero from "../components/Home/Hero";
import Stories from "../components/Home/Stories";
import BuildManage from "../components/Home/BuildManage";
import GetStarted from "../components/Home/GetStarted";
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
