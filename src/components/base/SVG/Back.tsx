import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Back = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 1024 1024"
      {...props}>
      <Path
        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
        fill={fill || '#000'}
      />
      <Path fill="rgba(0, 0, 0, 0)" d="M0 0h1024v1024H0z" />
    </Svg>
  );
};

export default Back;
