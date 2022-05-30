import React, { useState } from "react"
import styled from 'styled-components';

const Wrapper = styled.div`
color: #1F4173;
flex:1;
/* opacity: 0.05; */
`;
const SearchBox = styled.input`
background: #1f41732b;
/* opacity: 0.01; */
border-radius: 10px;
border:none;
font-family: 'Proxima Nova';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
padding-left: 1em;
display:inline;
&:focus {
    outline: none;
  }
`;

const SearchFilter = (props) => {

    const [data, setData] = useState('')
    // console.log("props",props);
    return (
        <Wrapper>
            <SearchBox 
            type="text"
            onChange={ (event) => setData(event.target.value) }
            value={data}
            placeholder={props.placeholder}
            />
        </Wrapper>
    );
}

export default SearchFilter;