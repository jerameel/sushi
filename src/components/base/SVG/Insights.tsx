import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Insights = (props: SVGProps) => {
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
        d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"
      />
    </Svg>
  );
};

export default Insights;
