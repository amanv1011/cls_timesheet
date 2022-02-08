import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
z-index: 9999;
margin: 0 auto;
width: -webkit-fill-available;
`;
const Container = styled.div`
position: relative;
display:flex;
justify-content: center;
margin-top: 25%;
`;
const Load = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #086caf; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;


  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const antIcon = <LoadingOutlined style={{ fontSize: 100, color:"primary" }} spin />;

function Loader(state) {
    console.log("loader",state)
    return (
        <Wrapper>
            <Container>
                <Spin indicator={antIcon} />
             </Container>
            
        </Wrapper>
     );
}

export default Loader;