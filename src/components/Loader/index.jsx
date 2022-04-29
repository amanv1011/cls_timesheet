import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  z-index: 99999;
  margin: 0 auto;
  width: -webkit-fill-available;
  width: -moz-available;
  height: 100%;
  background: #46464045;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;
const Load = styled.div`
border: 10px solid #f3f3f3;
border-radius: 50%;
border-top: 10px solid #3498db;
width: 100px;
height: 100px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 1s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

`;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24 }} spin />
);

function Loader(state) {
  console.log("loader", state);
  return (
    <Wrapper>
      <Container>
      <Load>
        {/* <Spin size="large"/> */}
      </Load>
        </Container>
    </Wrapper>
  );
}

export default Loader;
