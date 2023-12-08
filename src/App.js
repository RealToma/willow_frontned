import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Home from "./pages/home/home";
import Layout from "./pages/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </StyledComponent>
    </BrowserRouter>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background: #000;
  padding: 45px 25px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 42px 22px;
  }
  @media (max-width: 768px) {
    padding: 30px 18px;
  }
  @media (max-width: 430px) {
    padding: 20px 15px;
  }
`;

export default App;
