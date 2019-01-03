import React from 'react';
import styled, {css} from 'styled-components';
// import Markdown from './markdown';
import {devices} from '../styles/devices';
import {styles} from '../styles/styles.js';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 50px;
  background-position: center top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media ${devices.desktopPlus} {
    background-attachment: fixed;
  }

  @media ${devices.desktop} {
    height: calc(50vh - 50px);
    min-height: 600px;
  }

  @media ${devices.desktopPlus} {
    ${props => props.fullPage && css`
    min-height: 610px;
    padding-bottom: 200px;
  `}
  }
  }
`;
const Title = styled.h1`
  text-align: center;
  color: #fff;
  margin-top: 10px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  max-width: 875px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'proxima_novablack';
  line-height: 40px;
  font-size: 32px;

  @media ${devices.tablet} {
    font-size: 60px;
    line-height: 74px;
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 100vw !important;
  }
`;

class Banner extends React.Component {
    render() {
        const {title, Image} = this.props;

        return (
            <Container>
                <Hero className="banner" style={{backgroundImage: `url(${Image})`}}>
                    { title && <Title className="animated fadeIn fast">{title}</Title> }
                </Hero>
                {this.props.children}
            </Container>
        );
    }
}

export default Banner;
