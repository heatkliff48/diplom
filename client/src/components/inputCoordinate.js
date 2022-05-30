import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useCoordinateContex } from '../../context/contex';
const inputCoordinate = ({id}) => {
  const { popugaTalk, setPopugaTalk, talkPopugaHandler } = useCoordinateContex();
  
  return (<>
    <InputGroup className="mb-3">
    <InputGroup.Text>A {id}</InputGroup.Text>
    <FormControl onChange={}/>
    <FormControl />
    </InputGroup>
  </>
  );
};
export default inputCoordinate;
