import React from 'react'
import styled from 'styled-components';
const tit = styled.title` background-color: black;`
const head = (props) => {
    return (
        <tit>
        <h1> props.title </h1>
        <br></br>
        </tit>
    )
}
export default head;