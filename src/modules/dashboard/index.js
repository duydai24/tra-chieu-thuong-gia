import Logo from 'lib/Logo';
import LayoutAdmin from 'modules/layout/LayoutAdmin';

export default function DashBoard() {
  return <LayoutAdmin title="http://trachieuthuonggia.vn/">
    <div className="min-h-screen  flex items-center justify-center flex-col logo-admin">
      <Logo className={'w-80 h-auto bg-blue-900 pr-5 '} />
      <p className='mt-5 text-2xl text-black'> Sử dụng thanh điều hướng để quản trị nội dung của trang web</p>
    </div>
  </LayoutAdmin>;
}