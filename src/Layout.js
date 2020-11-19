import "./App.css";
import Header from "./components/global/Header";
import Main from "./components/global/Main";
import Footer from "./components/global/Footer";

function Layout() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default Layout;
