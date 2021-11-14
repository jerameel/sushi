import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { SVGProps } from './props';

const DownLeft = (props: SVGProps) => {
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
        <Path d="M6 18L18 6M6 8v10h10" />
      </G>
    </Svg>
  );
};

export default DownLeft;
