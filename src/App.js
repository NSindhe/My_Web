import styled from "styled-components";
import Home from "./screens/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./screens/blog/Blog";

const Text = styled.span`
  color: purple;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
