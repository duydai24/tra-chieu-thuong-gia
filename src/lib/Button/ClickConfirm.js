import {ModalCustom} from 'lib/Containers/Modal';
import React, {useState} from 'react';

import {ButtonCircle} from '.';

export function ClickConfirm({question, title, text, className, children, onClick, onConfirm, hidden}) {
  const [asking, setAsking] = useState(false);
  const toggleAsk = () => {
    setAsking(f => !f);
  };
  const onAccept = () => {
    const _onClick = onConfirm || onClick;
    if (_onClick) {
      setAsking(false);
      _onClick();
    }
  };

  if ((!onConfirm && !onClick) || hidden) return null;

  if (asking) {
    const _question = question ? (
      <p className="font-extrabold text-red-500">{question}</p>
    ) : (
      <></>
    );
    return (<ModalCustom visible={asking} onClick={toggleAsk}>
      <div
        className="p-4"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {_question}
        {children}
        <div className="mt-4 -my-4 flex justify-end gap-3">
          <ButtonCircle
            className="text-blue-500"
            onClick={onAccept}
          >
            <span>Xác nhận</span>
          </ButtonCircle>
          <ButtonCircle
            className="text-blue-500"
            onClick={toggleAsk}
          >
            <span>Không</span>
          </ButtonCircle>
        </div>
      </div>
    </ModalCustom>
    );

  }

  return (
    <ButtonCircle className={className} title={title || text} onClick={toggleAsk} >
      <span>{text}</span>
    </ButtonCircle>
  );

}

