import { Spin, Alert } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 99999;
  margin: 0 auto;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const Load = styled.div`
  border: 16px solid #cfcfcf;
  border-radius: 50%;
  border-top: 17px solid #3498db;
  width: 115px;
  height: 115px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;


function Loader(state) {
  console.log("loader", state);
  return (
    <>
      <Wrapper>
        <Container>

          <Spin size="large" style={{ color: "black", fontSize: "20px", fontWeight: "600" }} >
          </Spin>
          
        </Container>
      </Wrapper>

    </>
  );
}

export default Loader;
