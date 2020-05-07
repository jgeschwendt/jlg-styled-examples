import React from 'react';
import styled from 'styled-components';
import {
  Col,
  Container,
  Row,
  Spacer,
} from '../';

// import original module declarations
import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
    };
  };
};

const BoxColor = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  text-align: center;
`;

const BoxBadge = styled.div`
  background-color: #eee;
  border-radius: 1.5rem;
  color: #333;
  display: inline-block;
  font-size: 1rem;
  padding: 1rem;
`;

const Box: any = ({ children, ...props }: any) => (
  <BoxColor color={getRandomColor()} {...props}>
    <BoxBadge>{children}</BoxBadge>
  </BoxColor>
);

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
          >
            <Box>{row}:{col}</Box>
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);

const example02 = () => (
  <div style={{ margin: 'auto', maxWidth: '1200px', outline: '1px solid blue' }}>
    <h2>Example 02</h2>
    {[1, 2, 3].map((row) => (
      <Row gutter='0' justify='center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((col) => (
          <Col
            key={`${row}-${col}`}
            xs={1 / 2}
            sm={1 / 3}
            md={1 / 4}
            lg={1 / 5}
            xl={1 / 6}
          ><Box>{row}:{col}</Box>
          </Col>
        ))}
      </Row>
    ))}
  </div>
);

const example03 = () => (
  <div style={{ margin: 'auto', maxWidth: '1200px', outline: '1px solid blue' }}>
    <h2>Example 02</h2>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
      <Row>
        {[1].map((col) => (
          <React.Fragment key={`${row}-${col}`}>
            <Col
              sm={3 / 12}
            ><Box>{row}:{col}</Box>
            </Col>
            <Col
              sm={1 / 12}
            ><Box>&nbsp;</Box>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    ))}
  </div>
);

const example04 = () => (
  <Container maxWidth='1200px' style={{ outline: '1px solid blue' }}>
    <Row>
      <Col md={8 / 12} style={{ outline: '1px solid blue' }}>
        <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
          col-md-8
        </Spacer>
        <Row>
          <Col md={6 / 12} style={{ outline: '1px solid blue' }}>
            <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
              col-md-6
            </Spacer>
          </Col>
          <Col md={6 / 12} style={{ outline: '1px solid blue' }}>
            <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
              col-md-6
            </Spacer>
          </Col>
        </Row>
      </Col>
      <Col md={4 / 12} style={{ outline: '1px solid blue' }}>
        <Spacer py={['1rem', { sm: '2rem', md: '3rem', lg: '4rem', xl: '5rem' }]}>
          col-md-4
        </Spacer>
      </Col>
    </Row>
  </Container>
);

export default { title: 'Grid' };
export {
  example01,
  example02,
  example03,
  example04,
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
