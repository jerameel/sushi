import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { EditorPrivateProps, EditorPublicProps } from './props';
import EditorView from './view';

const EditorContainer = (props: EditorPublicProps) => {
  const generatedProps: EditorPrivateProps = {
    // TODO
  };

  return <EditorView {...props} {...generatedProps} />;
};

export default EditorContainer;
