import React, {useState} from "react";


const LoginForm = (props) => {
  const [isUserError, setIsUserError] = useState(false)
  const [isPassError, setIsPassError] = useState(false)
  const userInfo = {username: 'admin', password: 'admin'}
  const handleInputChange = (event) => {
    props.setUser({...props.user, [event.target.name]: event.target.value})
  }


  return (
    <form className={props.isShow ? 'show' : 'hide'}
          onSubmit={(event) => {
            event.preventDefault();
            setIsUserError(false)
            setIsPassError(false)
            if (props.user.username !== userInfo.username) {
              setIsUserError(true)
            } else if (props.user.password !== userInfo.password) {
              setIsPassError(true)
            } else if (props.user.password !== userInfo.password && props.user.username !== userInfo.username) {
              setIsUserError(true)
              setIsPassError(true)
            } else {
              props.setIsEnter(true)
              props.setIsOut(false)
              props.setIsShow(false)
            }
          }}>
      <label><p>請輸入帳號:</p><input onChange={handleInputChange} value={props.user.username} name='username'
                                 required/></label>
      <div className={isUserError ? 'usernameError' : 'NotUsernameError'}>帳號輸入錯誤</div>
      <label><p>請輸入密碼:</p><input onChange={handleInputChange} value={props.user.password} name='password' required
                                 type='password'/></label>
      <div className={isPassError ? 'passwordError' : 'NotPasswordError'}>密碼輸入錯誤</div>
      <div>
        <button className='btn'>提交</button>
      </div>
    </form>
  );
}

export default LoginForm;
