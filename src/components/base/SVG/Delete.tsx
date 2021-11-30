import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './props';

const Delete = (props: SVGProps) => {
  const { height, width, fill } = props;

  // https://react-svgr.com/playground/?native=true&typescript=true
  // Paste converted svg below
  return (
    <Svg
      aria-hidden="true"
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 32 32"
      {...props}>
      <Path d="M12 12h2v12h-2zM18 12h2v12h-2z" fill={fill || '#000'} />
      <Path
        d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zM12 2h8v2h-8z"
        fill={fill || '#000'}
      />
    </Svg>
  );
};

export default Delete;
