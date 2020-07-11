import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import TampilImage from '../assets/header.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${TampilImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2x;
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div clasName="overlay"></div>
            <Container>
                <h1>Final Project Sanber Bootcamp</h1>
            </Container>
        </Jumbo>
    </Styles>
)