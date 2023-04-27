import TextEditor from 'lib/TextEditor';
import {sendListId, sendOne} from 'modules/notification/creators';
import React, {useState} from 'react';
import {MdSend} from 'react-icons/md';
import {useDispatch} from 'react-redux';

import {Device} from './Device';

export function Devices({notifications, userId, }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const [selected, setSelected] = useState([]);
  const onSelected = (id, value) => {
    if (!value) {
      setSelected(d => {
        const newD = [...d];
        const findIndex = newD.findIndex(x => x === id);
        if (findIndex > -1) {
          newD.splice(findIndex, 1);
          return newD;
        }
        return d;
      });
    }
    else {
      setSelected(d => ([...d, id]));
    }
  };
  const onChangeMessage = (name, value) => setMessage(value);

  const onSend = () => {
    if (!selected?.length) {
      dispatch(sendOne({id: userId, body: message}));
    }
    else {
      dispatch(sendListId(selected, {body: message}));
    }
  };
  return <div className={'flex-1 overflow-y-auto flex flex-col justify-between h-52'}>
    <div className={'flex-1 overflow-y-auto'}>
      {notifications?.map((item) => (
        <Device key={item.id} item={item} selected={selected.includes(item.id)} onSelected={onSelected}></Device>
      ))}
    </div>
    <div className={'relative h-14'}>
      <TextEditor
        label='Nội dung thông báo'
        value={message}
        name='message'
        onChange={onChangeMessage}
        onComplete={onSend}
      ></TextEditor>
      <button
        className="absolute right-3 top-2"
        onClick={onSend}
        title='Gửi thông báo đến tất cả thiết bị tài khoản này sở hữu'
        disabled={!message}
      >
        <MdSend />
      </button>
    </div>
  </div>;
}
