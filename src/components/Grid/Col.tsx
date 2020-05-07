import media from '@jlg/styled-media';
import styled, { css, DefaultTheme, FlattenSimpleInterpolation, FlattenInterpolation, ThemeProps, SimpleInterpolation } from 'styled-components';


type Breakpoint = keyof DefaultTheme['breakpoints'];

type ColOptions = {
  offset?: number;
  order?: number;
};

type ColProps = {
  [breakpoint in Breakpoint]?: number | [number, ColOptions];
} & {
  gutter?: string;
  withCSS?: FlattenSimpleInterpolation | FlattenSimpleInterpolation[];
};

export const Col = styled.div<ColProps>`
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  width: 100%;

  ${(props) => {
    const cssProps: FlattenSimpleInterpolation[] = [];

    if (props.gutter) {
      cssProps.push(css`
        padding-left: ${props.gutter};
        padding-right: ${props.gutter};
      `);
    } else {
      cssProps.push(css`
        padding-left: .5rem;
        padding-right: .5rem;
      `);
    }

    let i = (css`
      color: pink;
      ${media.breakpoint.up('md', css`
        color: red;
      `)}
    `)

    Object.keys(props.theme.breakpoints).map((breakpoint) => {
      if (props.hasOwnProperty(breakpoint)) {
        const [col, { offset, order }] = (
          Array.isArray(props[breakpoint]) ? props[breakpoint] : [props[breakpoint], {}]
        ) as [number, ColOptions];

        if (props.theme.breakpoints[breakpoint] === 0) {
          if (col !== 0) {
            cssProps.push(css`
              flex: 0 0 ${col * 100}%;
              max-width: ${col * 100}%;
            `);
          } else {
            cssProps.push(css`
              flex: 0 0 100%;
              max-width: 100%;
            `);
          }

          if (typeof offset === 'number') {
            cssProps.push(css`margin-left: ${offset * 100}%;`);
          }

          if (typeof order === 'number') {
            cssProps.push(css`order: ${order};`);
          }

        } else {
          cssProps.push(media.breakpoint.up(breakpoint, css`
            flex: 0 0 ${col * 100}%;
            max-width: ${col * 100}%;
          `) as any);

          if (typeof offset === 'number') {
            cssProps.push(media.breakpoint.up(breakpoint, css`margin-left: ${offset * 100}%;`) as any);
          }

          if (typeof order === 'number') {
            cssProps.push(media.breakpoint.up(breakpoint, css`order: ${order};`) as any);
          }
        }
      }
    });

    return cssProps;
  }}
`;
