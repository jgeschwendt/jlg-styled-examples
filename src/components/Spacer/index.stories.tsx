import React from 'react';
import styled from 'styled-components';
import {
  Col,
  Container,
  Row,
  Spacer,
} from '../';

const example01 = () => (
  <Container maxWidth='1200px' style={{ outline: '1px solid blue' }}>
    <h2>Example 01</h2>
    {[1, 2, 3].map((row) => (
      <Row justify='center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
          <Col
            key={`${row}-${col}`}
            xs={1 / 2}
            sm={1 / 3}
            md={1 / 4}
            lg={1 / 5}
            xl={1 / 6}
          ><Spacer>{row}:{col}</Spacer>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);


export default { title: 'Spacer' };
export {
  example01,
};

