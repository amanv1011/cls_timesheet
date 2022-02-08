import React, { Component } from 'react';
import styled from "styled-components";
import { getTools } from "../../../actions/asyncActions"
import { Jeera } from "../../../assets/images"
import {
  Link
} from "react-router-dom";
const Wrapper = styled.div`
background:#fff;
padding:2em;
border-radius:1em;
`;
const ToolsWrapper = styled.div`
display:flex;
width:25%;
border-right:1px solid #eee;
gap:10px;
cursor:pointer;
`;
const ToolBox = styled.div`
display:flex;
flex-wrap:wrap;
row-gap:1.2em;
padding-top:1.5em;
`;
const ToolIcon = styled.div`
padding:1em 1em;
`;
const ToolBar = styled.div`
padding:1em 1em 1em 0;
cursor:pointer;

`;
const ToolTitle = styled.div`
font-family: Proxima Nova;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-transform: capitalize;
`;
const ToolDesc = styled.div`
font-family: Proxima Nova;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
letter-spacing: -0.02em;
color: #1F4173;
opacity: 0.5;
`;

class Tools extends React.Component {


    componentDidMount = () => {
        getTools()
    }

    render() {
        if (!this.props.userTools) {
            return <div/>
        }

        const Data = this.props.userTools? this.props.userTools.map(d => {
            return (

                <ToolsWrapper onClick={() => this.props.history.push({
                    pathname: '/dashboard',
                    state: { details: d }
                })}>
                    <ToolIcon>
                        <img src={Jeera} alt="" style={{ width: '35px', height: '35px', maxWidth: '35px', alignSelf: 'center' }} />
                    </ToolIcon>
                    <ToolBar>
                        <ToolTitle>{d.name}</ToolTitle>
                        <ToolDesc>{d.description}</ToolDesc>
                   </ToolBar>

                </ToolsWrapper>


            )
        }): null

        return (
            <Wrapper>
                <h5>Tools and Platforms</h5>
                 <ToolBox>{Data}</ToolBox>
            </Wrapper>
        );
    }
}
 
export default Tools;