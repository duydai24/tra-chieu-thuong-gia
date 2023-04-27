import Modal from 'lib/Containers/Modal';
import ImageViewer from 'lib/Image/ImageViewer';
import NavLink from 'lib/NavLink';
import {login_toggle} from 'modules/user/actions';
import LoginControl from 'modules/user/LoginControl';
import {processLogout} from 'modules/user/processLogout';
import React, {useState} from 'react';
import {IoIosPerson} from 'react-icons/io';
import {connect} from 'react-redux';
import {ROUTES} from 'routers/routes';

import {_layToggleMenuUser} from './actions';
import {topMenuSelector} from './selectors';

function Login({userId, dispatch, photoURL, fName, userMenu}) {
  const [doLogout, setLogout] = useState(false);
  const onStartLogout = () => {
    setLogout(l => !l);
  };
  return (<>
    <div className="fixed z-50 right-2 top-2">
      <button
        title={fName || (userId ? 'NoName' : 'Đăng nhập')}
        onClick={() => {
          if (!userId) {
            dispatch(login_toggle(true));
          } else {
            dispatch(_layToggleMenuUser());

          }
        }}
        className={'flex items-center focus:outline-none relative'}>
        <ImageViewer
          width={40}
          height={40}
          className="w-10 h-10 rounded-full ring-1 ring-gray-100 ring-opacity-60 bg-gray-400 hover:animation-ping" src={photoURL}
          NullIcon={IoIosPerson}
          nullIconStyle="w-8 h-8 m-1 text-gray-800"
          alt="Avatar of User" />
        <div className={'fixed cursor-pointer text-right  text-gray-100  flex flex-col gap-4 top-4 ' + (userMenu ? 'right-16' : '-right-96')}>
          <p
            onClick={(e) => {
              e.stopPropagation();
              onStartLogout();
            }}
            title={userId ? 'Đăng xuất tài khoản' : 'Đăng nhập tài khoản'}
            className={'min-w-max hover:text-yellow-600 '}>{userId ? 'Hi,' : ''}{fName || (userId ? 'NoName' : '')}</p>
          <NavLink
            to={ROUTES.Admin}
            text="Quản trị"
            className={'min-w-max hover:text-yellow-600 '} />
        </div>

      </button>
    </div>

    <Modal visible={userId && doLogout}
      text={`Bạn muốn thoát khỏi tài khoản ${fName} trên thiết bị này`}
      onAccept={() => dispatch(processLogout(userId))}
      cancelText="Không"
      onCancel={onStartLogout}
      confirmText="Thoát tài khoản"
    />
    <LoginControl />
  </>);
}
export default connect(topMenuSelector)(Login);