module.exports = {
  passwordValidator: password => {
    // 8자 이상의 영문, 숫자 조합
    const regExp = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
    return regExp.test(password);
  },

  passwordMatchValidator: (password, retypePassword) => {
    if (password === '' || retypePassword === '') return false;
    return password === retypePassword;
  },

  nicknameValidator: nickname => {
    // 1~12자의 영문, 숫자, 한글 사용 가능
    const regExp = /^[A-Za-z0-9_ㄱ-ㅎㅏ-ㅣ가-힣]{1,12}$/;
    return regExp.test(nickname);
  },
};
