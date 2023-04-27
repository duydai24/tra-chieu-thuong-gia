export const validate = {
  Address: add => !!add && add.length > 10,
  changeVN_phone_ToGlobal: phoneNumber => {
    if ((phoneNumber + '').indexOf('+') === 0)
      return '0' + phoneNumber.substr(3, phoneNumber.length - 3);
    return phoneNumber;
  },
  Phone: phoneNumber =>
    /(09|08|03|05|07|01[2|6|8|9])+([0-9]{8})\b/.test(phoneNumber),
  ConvertToPhoneNumberWith84: phoneNumber =>
    '+84' + phoneNumber.substr(1, phoneNumber.length - 1),
  Password: password => !!password && password.length > 3,
  Email: email => {
    var tester = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;

    if (email.length > 254) return false;

    var valid = tester.test(email);
    if (!valid) return false;

    // Further checking of some things regex can't handle
    var parts = email.split('@');
    if (parts[0].length > 64) return false;

    var domainParts = parts[1].split('.');
    if (
      domainParts.some(function (part) {
        return part.length > 63;
      })
    )
      return false;

    return true;
  },
  PasswordWithConfirm: (password, confirmPassword) =>
    !!password && password.length > 3 && password === confirmPassword,
};
export const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

