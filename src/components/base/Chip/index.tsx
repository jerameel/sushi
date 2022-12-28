import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ChipProps } from './props';
import ChipView from './view';

export const Chip = (props: ChipProps) => {
  const theme = useSelector((state: RootState) => state.theme);
  return <ChipView theme={theme} {...props} />;
};

export default Chip;
