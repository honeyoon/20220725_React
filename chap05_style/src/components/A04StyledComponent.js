// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React, { useState } from "react";
import {Button} from 'reactstrap'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import {MdAccessibilityNew} from 'react-icons/md'

import {MYBOX, MYBTN} from './css/A04Style'
/*
import styled from 'styled-components'
const MYBOX = styled.div`
  background: ${props => props.color || 'lightgray'};
  color: orange;
  font-size: 24pt;
  padding: 10px;
`;
const MYBTN = styled.button`
  background: ${props => props.color || 'lightgray'};
  color: white;
  border: 1px solid gray;
  padding: 3px;

  &:hover {
    background: white;
    color: orange;
  }
`
*/

function A04StyledComponent() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  return (
    <div>
      <h3>A04 Styled Component</h3>

      <MYBOX color="gray">This is Content</MYBOX>
      <MYBTN>CLICK</MYBTN>
      <br />

      <div>
        <h5>ICON</h5>

        <MdAccessibilityNew style={{fontSize: '50px', color: 'orange'}} />Hello World
      </div>

      <Button color="primary">Bootstrap</Button>

      <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            Accordion Item 1
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Accordion Item 2
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            Accordion Item 3
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    </div>
  );
}

export default A04StyledComponent;
