// import { Spacer } from '../Spacer';
import { Children, cloneElement, createElement } from 'react';
import styled, { css } from 'styled-components';

type JustifyContentProps = 'center' | 'flex-end' | 'flex-start';

interface RowProps {
  children: Element | Element[] | any;
  gutter?: string;
  justify?: JustifyContentProps;
}

const StyledRow = styled.div<RowProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props) => {
    const cssProps = [];

    if (props.gutter) {
      cssProps.push(css`
        margin-left: ${props.gutter === '0' ? 0 : `-${props.gutter}`};
        margin-right: ${props.gutter === '0' ? 0 : `-${props.gutter}`};
      `);
    } else {
      cssProps.push(css`
        margin-left: -0.5rem;
        margin-right: -0.5rem;
      `);
    }

    if (typeof props.justify === 'string') {
      cssProps.push(css`justify-content: ${props.justify};`);
    }

    return cssProps;
  }}
`;

export const Row = ({ children, gutter, ...props }: RowProps) => (
  createElement(
    StyledRow,
    { gutter, ...props } as RowProps,
    Children.map(children, (child) => cloneElement(child, { gutter }))
  )
);
