/* eslint-disable no-undef */
/* eslint-disable @next/next/no-img-element */
import {getRealImageUrl} from 'core/getRealImageUrl';
import {useRouter} from 'next/router';
import {ROUTES} from 'routers/routes';

export default function Logo({src, className}) {
  const router = useRouter();
  const gotoHome = () => router.push(ROUTES.LANDING);
  return <img
    className={'cursor-pointer w-40 md:w-auto ' + className}
    src={getRealImageUrl(src) || '/logo.png'} alt="ĐL" width={216} height={60}
    onClick={gotoHome} />;
}