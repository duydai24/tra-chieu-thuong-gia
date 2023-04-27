import {toast} from 'react-toastify';

import {ERROR_CODE} from '../core/ERROR_CODE';

const ToastRoot = {
  // eslint-disable-next-line
  log: (...rest) => console.log(rest),
  showWarning: (data, callback) => {
    if (callback) {
      toast.warn(data + '', {
        delay: 3000, onClose: () => {
          !!callback && callback();
        }
      });
    } else toast.warning(data + '');
  },
  show: (data, callback) => {
    if (callback) {
      toast.info(data + '', {
        delay: 3000, onClose: () => {
          !!callback && callback();
        }
      });
    } else toast.info(data + '');
  },
  showError: (error, callback) => {
    if (!error) {
      callback && callback();
      return;
    }
    if (error.code === 'auth/invalid-email') {
      toast.error('Xin vui lòng kiểm tra lại email ');
      return;
    }
    if (!!error && error.code) {
      if (error.code === 'auth/invalid-verification-code') {
        toast.error('Mã xác nhận không chính xác', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });
        return;
      }
      if (error.code === 'auth/popup-closed-by-user') {
        toast.warn('Người dùng đã đóng cửa sổ đăng nhập', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });
        return;
      }
      if (error.code === 'auth/user-not-found') {
        toast.error(
          'Hệ thống không lưu trữ tài khoản này, có thể tài khoản này chưa đăng ký hoặc bị xóa',

          {
            delay: 3000, onClose: () => {
              !!callback && callback();
            }
          }
        );
        return;
      }
      if (error.code === 'auth/requires-recent-login') {
        toast.error('Cần đăng nhập lại để cập nhật thông tin', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });
        return;
      }
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'Email này đã được sử dụng để kích hoạt tài khoản khác',
          {
            delay: 3000, onClose: () => {
              !!callback && callback();
            }
          });
        return;
      }
      if (error.code === 'auth/invalid-verification-code') {
        toast.error('Mã xác nhận không chính xác', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });

        return;
      }
      if (error.code === 'auth/wrong-password') {
        toast.error('Sai mật khẩu', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });

        return;
      }
      if (error.code === 'auth/account-exists-with-different-credential') {
        toast.error(
          'Tài khoản có email này đã được đăng ký trước đó, xin vui lòng sử dụng chức năng quên mật khẩu',
          {
            delay: 3000, onClose: () => {
              !!callback && callback();
            }
          }
        );
        return;
      }
      if (error.code === 'auth/too-many-requests') {
        toast.error('Tài khoản này đang tạm khóa', {
          delay: 3000, onClose: () => {
            !!callback && callback();
          }
        });
        return;
      }
      if (error.code === 'auth/captcha-check-failed') {
        toast.error(
          'Website chưa đăng ký thành công với google, xin vui lòng liên hệ google',
          {
            delay: 3000, onClose: () => {
              !!callback && callback();
            }
          }
        );
        return;
      }
    }

    const errorCode = parseInt(error, 0);
    const err = error.Message || error.message || (errorCode >= 0 && ERROR_CODE.length > errorCode ? ERROR_CODE[errorCode] : error);
    if (callback) {
      toast.error(err + '', {
        delay: 3000, onClose: () => {
          !!callback && callback();
        }
      });
    } else {
      toast.error(err + '');
    }
  }
};
export default ToastRoot;