import {gateAPI} from 'core/gateAPI';
import ToastRoot from 'lib/ToastRoot';
import {authDirectSelector} from 'modules/user/selectors';
import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import Button from './Button';
import CheckEditor from './Check/CheckEditor';

const componentSelector = () => createSelector(
  [authDirectSelector],
  ({isAdmin: canAccessUser,
    isSa: canDisable,
    disable,
    id: processId}) => {
    return {
      canAccessUser, canDisable, disable, processId
    };
  }
);
const RoleEditor = ({
  id,
  values,
  onChange,
  block,
  onUpdateComplete,
  canAccessUser, canDisable, disable, processId
}) => {

  const newValues = values ? values : {};

  const changeRole = (name, value) => {
    if (onChange) onChange(name, value);
  };

  const onSystemBlock = async () => {
    if (!block) {
      const serverData = await gateAPI('auth/systemblock', {
        id: id,
      });
      if (serverData) {
        ToastRoot.show('Đã khóa tài khoản 2 năm');
        onUpdateComplete && onUpdateComplete();
      }
    }
  };
  const onDisableRole = async () => {
    const serverData = await gateAPI('auth/disablerole', {id: id});
    if (serverData) onUpdateComplete && onUpdateComplete();
  };

  const onEnableRole = async () => {
    const serverData = await gateAPI('auth/enablerole', {id});
    if (serverData) onUpdateComplete && onUpdateComplete();
  };

  if (!processId || disable || !canAccessUser)
    return (
      <div>
        <h3>Không đủ quyền truy cập</h3>
      </div>
    );

  return (
    <div className={'m-2'}>
      <div className={'grid auto-cols-max'}>

        <CheckEditor
          name='isContent'
          value={newValues.isContent}
          onChange={changeRole}
          label='Quản trị nội dung'
          truthCheck
        />

        <CheckEditor
          name='isAdmin'
          value={newValues.isAdmin}
          onChange={changeRole}
          label='Quản lý'
          truthCheck
        />
        <CheckEditor
          name='isSA'
          value={newValues.isSA}
          onChange={changeRole}
          label='Quản trị hệ thống'
          truthCheck
        />

      </div>
      <div className={'grid grid-cols-4 gap-2 my-2 p-2 rounded-md'}>

        <Button
          disabled={!canDisable}
          onClick={() => {
            newValues.disable ? onEnableRole() : onDisableRole();
          }}
        >
          <p> {newValues.disable ? 'Mở quyền hạn' : 'Khóa quyền hạn'}</p>
        </Button>
        <Button
          disabled={!canAccessUser}
          onClick={onSystemBlock}
        >
          <p> Khóa 2 năm </p>
        </Button>
      </div>
    </div>
  );
};

export default connect(componentSelector)(RoleEditor);
