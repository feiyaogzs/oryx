//
// Copyright (c) 2022-2024 Winlin
//
// SPDX-License-Identifier: MIT
//
import React from "react";
import {Container, Carousel} from "react-bootstrap";
import srsStack from "../resources/oryx-1296x648.png";
import srsVideo from "../resources/srs-xingqiu-1296x648.png";
import {useSrsLanguage} from "../components/LanguageSwitch";

export default function Contact() {
  const language = useSrsLanguage();
  return language === 'zh' ? <ContactCn /> : <ContactEn />;
}

function ContactCn() {
  return (
    <Container fluid>
      <Carousel variant="dark" interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srsStack}
            alt="Oryx"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

function ContactEn() {
  return (
    <Container fluid>
      Welcome to contact us by 
     
    </Container>
  );
}
