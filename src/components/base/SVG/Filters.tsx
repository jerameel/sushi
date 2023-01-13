import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Filters = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill={fill || 'currentColor'}
        d="M10 18v-2h4v2Zm-4-5v-2h12v2ZM3 8V6h18v2Z"
      />
    </Svg>
  );
};

export default Filters;
