/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable @next/next/no-img-element */
import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react';

import {validEmail, validName, validPhone} from '../../lib/regex';
import ToastRoot from '../../lib/ToastRoot';

function ContactHome() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  const form = useRef();
  function sendEmail(e) {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validName.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!validPhone.test(message)) {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
    if (
      name !== '' &&
      email !== '' &&
      message !== '' &&
      nameErr == false &&
      emailErr == false &&
      messageErr == false
    ) {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_7neewdb',
          'template_kc59nqv',
          form.current,
          'VwZlg6jcwkd8mX0Oj'
        )
        .then(
          (result) => {
            console.log(result);
            ToastRoot.show(
              'Cảm ơn đã đến với chúng tôi, chúng tôi sẽ liên lạc với bạn sớm nhất!'
            );
            setEmail('');
            setName('');
            setMessage('');
            //window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior
          },
          (error) => {
            ToastRoot.show(error.text);
          }
        );
    }
  }
  return (
    <div className='w-full'>
      <div className='change-background-footer p-10 min-h-[450px]'>
        <p className='text-2xl font-semibold uppercase text-white'>đăng kí nhận thông tin</p>
        <p className='text-[#FFC292] text-base py-5'>Quý khách vui lòng điền thông tin bên dưới
          để đăng ký tham quan dự án Trà Chiều Thương Gia ngay </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='grid grid-cols-2 gap-4 mt-5 text-white'>
            <div className="relative w-full">
              <input className='pl-5 py-2 bg-[#00392D] border-none outline-none w-full'
                placeholder='Họ và tên'
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)} />
              {nameErr && (
                <p className="text-red-600 text-xs absolute lg:-bottom-4 -bottom-4 left-2">
                  Vui lòng nhập tên
                </p>
              )}
            </div>
            <div className="relative">
              <input className='pl-5 py-2 bg-[#00392D] outline-none border-none w-full'
                placeholder=' Điện thoại'
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)} />
              {messageErr && (
                <p className="text-red-600 text-xs absolute lg:-bottom-4 -bottom-4 left-2">
                  Vui lòng nhập số điện thoại
                </p>
              )}
            </div>
            <div className="relative col-span-2">
              <input className='pl-5 py-2 bg-[#00392D] outline-none border-none w-full'
                placeholder='Email'
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)} />
              {emailErr && (
                <p className="text-red-600 text-xs absolute lg:-bottom-4 -bottom-4 left-2">
                  Vui lòng nhập email
                </p>
              )}
            </div>
          </div>
          <div className='relative'>
            <input className='bg-gradient-to-r from-[#FFC292] to-[#A96F44] text-[#00392D] px-5 py-2 mt-5 md:mt-10 absolute left-1/2 -translate-x-1/2 lg:float-right mx-auto'
              value="Đăng kí ngay"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactHome;