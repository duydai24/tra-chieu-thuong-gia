import {NavMenuItem, SControl, SLeft, SMain, STab} from 'lib/Containers/SplitControls';
import Logo from 'lib/Logo';
import {login_toggle} from 'modules/user/actions';
import {authenSelector} from 'modules/user/authenSelector';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {FaUserFriends} from 'react-icons/fa';
import {connect} from 'react-redux';
import {ROUTES} from 'routers/routes';

import Login from './Login';

function LayoutAdmin({isContent, isAdmin, isSA, dispatch, children}) {
  const hasPerm = isContent || isAdmin || isSA;
  const router = useRouter();
  const tab = router.asPath;

  useEffect(() => {
    dispatch(login_toggle(!hasPerm));
  }, [hasPerm, dispatch]);

  return (<div className='container-admin mt-2 m-auto'>
    <SControl className='bb min-h-60'>
      <SLeft >
        <STab>
          <Logo />
          <NavMenuItem exact active={tab} link={ROUTES.Admin} text="Quản trị" className={'mt-3'} />
          <NavMenuItem active={tab} link={ROUTES.AdminBanner} text="Quản lý Banner" />
          <NavMenuItem active={tab} link={ROUTES.AdminProjects} text="Quản lý Tiện ích" />
          <NavMenuItem active={tab} link={ROUTES.AdminServices} text="Quản lý Banner Slide Lý Do" />
          <NavMenuItem active={tab} link={ROUTES.AdminBlogs} text="Quản lý Tin Tức" />
          <NavMenuItem active={tab} link={ROUTES.AdminConfig} text="Quản lý thông tin khác" />
          <NavMenuItem active={tab} link={ROUTES.AdminAccounts} icon={FaUserFriends} text="Phân quyền " />
        </STab>
      </SLeft>
      <SMain >
        {children}
      </SMain>
    </SControl>
    <Login />
  </div>

  );
}
export default connect(authenSelector)(LayoutAdmin);