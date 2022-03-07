import React, { Component } from 'react';
import styled from "styled-components";
import { getTools } from "../../../actions/asyncActions"
import { hubspot} from "../../../assets/images"
import {
  Link
} from "react-router-dom";
const Wrapper = styled.div`
background:#fff;
padding:2em;
border-radius:1em;
font-family: Proxima Nova;
`;
const ToolsWrapper = styled.div`
display:flex;
flex-basis:25%;
border-right:1px solid #eee;
gap:10px;
cursor:pointer;
`;
const Title = styled.div`

font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
letter-spacing: -0.02em;

color: #000000;
`
const ToolBox = styled.div`
display:flex;
flex-wrap:wrap;
row-gap:1.2em;
padding-top:1.5em;
div:nth-child(4n) {
  border-right:unset;
}
@media screen and (max-width: 990px) and (min-width: 280px)  {
>div{
    border-right:none;
}
`;
const ToolIcon = styled.div`
padding:1em 1em;
`;
const ToolBar = styled.div`
padding:1em 1em 1em 0;
cursor:pointer;

`;
const ToolTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: capitalize;
color: #1F4173;
`;
const ToolDesc = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
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

        const Data = this.props.userTools ? this.props.userTools.map(d => {
            const Image = d.name
            console.log('Image', Image)
            return (

                <ToolsWrapper onClick={() => this.props.history.push({
                    pathname: '/dashboard',
                    state: { details: d }
                })}>
                    <ToolIcon>
                        <img src={require(`../../../assets/images/icons/${Image? Image : hubspot}.png`)} alt="" style={{ width: '35px', maxWidth: '40px', alignSelf: 'center' }} />
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
                <Title>Tools and Platforms</Title>
                 <ToolBox>{Data}</ToolBox>
            </Wrapper>
        );
    }
}
 
export default Tools;