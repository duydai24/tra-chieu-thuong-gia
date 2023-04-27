import TextEditor from 'lib/TextEditor';
import React from 'react';

export default function MemoEditor({container, ...props}) {

  return (
    <TextEditor  {...props} element="textarea" container={'memo ' + (container || '')} />
  );

}
