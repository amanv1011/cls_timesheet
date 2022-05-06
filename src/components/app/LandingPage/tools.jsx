import React, { Component } from "react";
import styled from "styled-components";
import { getTools } from "../../../actions/asyncActions";
import { hubspot } from "../../../assets/images";
import { Link } from "react-router-dom";
import { InactiveToolsStorageName } from "../../../assets/text";
const Wrapper = styled.div`
  background: #fff;
  padding: 2em;
  border-radius: 1em;
`;
const ToolsWrapper = styled.div`
  display: flex;
  flex-basis: 25%;
  border-right: 1px solid #eee;
  gap: 10px;
  cursor: pointer;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #000000;
`;
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
  padding: 1em 1em;
`;
const ToolBar = styled.div`
  padding: 1em 1em 1em 0;
  cursor: pointer;
`;
const ToolTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  color: #1f4173;
`;
const ToolDesc = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #1f4173;
  opacity: 0.5;
`;

var toolsArr = [];
var activetools = [];
var bool = true;
var toolsArr = [];
var bool = true;

let externalTools = [];
let internalTools = [];
class Tools extends React.Component {
  componentDidMount = () => {};

  render() {
    if (!this.props.userTools) {
      return <div />;
    }

    const sortTools = () => {
      this.props.userTools.map((d) => {
        if (d.type === 1) externalTools.push(d);
        if (d.type === 0) internalTools.push(d);
      });
    };

    if (bool) {
      localStorage.setItem(InactiveToolsStorageName, JSON.stringify(toolsArr));
      localStorage.setItem("ActiveToolsName", JSON.stringify(activetools));

      bool = false;
      sortTools();
    }
    return (
      <Wrapper>
        {/* {this.props.userTools ? (
          <Title>Tools and Platforms</Title>
        ) : (
          <div>Data not available</div>
        )} */}
        <h6 className="tools-class">External Tools</h6>
        <ToolBox className="pt-0">
          {externalTools.map((d, i) => {
            let Image;
            if (d.is_active === false) {
              Image = d.disabled_image_icon;
            } else if (d.is_active === true) {
              Image = d.active_image_icon;
            }
            return (
              <ToolsWrapper
                style={{
                  cursor: `${d.is_active === false ? "not-allowed" : ""}`,
                }}
                onClick={() => {
                  if (d.is_active === true) {
                    window.open(d.url);
                  }
                }}
                key={i}
              >
                <ToolIcon>
                  <img
                    className="imagetool"
                    src={require(`../../../assets/images/icons/${
                      Image ? Image : hubspot
                    }`)}
                    alt=""
                    style={{
                      width: "35px",
                      maxWidth: "40px",
                      alignSelf: "center",
                    }}
                  />
                </ToolIcon>
                <ToolBar
                  style={{
                    cursor: `${d.is_active === false ? "not-allowed" : ""}`,
                  }}
                >
                  <ToolTitle className="tool-title">{d.name}</ToolTitle>
                  <ToolDesc className="tool-description">
                    {d.description}
                  </ToolDesc>
                </ToolBar>
              </ToolsWrapper>
            );
          })}
        </ToolBox>
        <h6 className="tools-class">Internal Tools</h6>
        <ToolBox className="pt-0">
          {internalTools.map((d, i) => {
            let Image;
            if (d.is_active === false) {
              Image = d.disabled_image_icon;
            } else if (d.is_active === true) {
              Image = d.active_image_icon;
            }
            return (
              <ToolsWrapper
                style={{
                  cursor: `${d.is_active === false ? "not-allowed" : ""}`,
                }}
                onClick={() => {
                  if (d.is_active === true) {
                    window.open(d.url);
                  }
                }}
                key={i + 20}
              >
                <ToolIcon>
                  <img
                    className="imagetool"
                    src={require(`../../../assets/images/icons/${
                      Image ? Image : hubspot
                    }`)}
                    alt=""
                    style={{
                      width: "35px",
                      maxWidth: "40px",
                      alignSelf: "center",
                    }}
                  />
                </ToolIcon>
                <ToolBar
                  style={{
                    cursor: `${d.is_active === false ? "not-allowed" : ""}`,
                  }}
                >
                  <ToolTitle className="tool-title">{d.name}</ToolTitle>
                  <ToolDesc className="tool-description">
                    {d.description}
                  </ToolDesc>
                </ToolBar>
              </ToolsWrapper>
            );
          })}
        </ToolBox>
      </Wrapper>
    );
  }
}

export default Tools;

function RemoveBaseUrl(url) {
  /*
   * Replace base URL in given string, if it exists, and return the result.
   *
   * e.g. "http://localhost:8000/api/v1/blah/" becomes "/api/v1/blah/"
   *      "/api/v1/blah/" stays "/api/v1/blah/"
   */
  var baseUrlPattern = /^https?:\/\/[a-z\:0-9.]+/;
  var result = "";

  var match = baseUrlPattern.exec(url);
  if (match != null) {
    result = match[0];
  }

  if (result.length > 0) {
    url = url.replace(result, "");
  }

  return url;
}
