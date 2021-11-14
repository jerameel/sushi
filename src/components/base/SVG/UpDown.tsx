import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { SVGProps } from './props';

const UpDown = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      {...props}
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={fill || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M6 3v18M6 3l4 4M6 3L2 7M18 21V3m0 18l4-4m-4 4l-4-4" />
      </G>
    </Svg>
  );
};

export default UpDown;
