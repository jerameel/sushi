import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Add = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      {...props}>
      <Path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" fill={fill || '#000'} />
      <Path fill="rgba(0, 0, 0, 0)" d="M0 0h16v16H0z" />
    </Svg>
  );
};

export default Add;
