import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Close = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      {...props}
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 32 32">
      <Path
        d="M2 30 30 2m0 28L2 2"
        fill="none"
        stroke={fill || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default Close;
