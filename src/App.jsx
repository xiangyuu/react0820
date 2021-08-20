import logo from './logo.svg';
import  {useCookies} from 'react-cookie'
import LoginForm from "./Component/LoginForm";
import './App.css';
import {useState} from "react";

const App = () => {
  const [isEnter, setIsEnter] = useState(false)
  const [isOut, setIsOut] = useState(true)
  const [isShow, setIsShow] = useState(false)
  const auser = {username: '', password: ''}
  const [user, setUser] = useState(auser)

  function login() {
    setIsShow(true)
  }
  return (
    <div className="App" >
      <div id={isShow?'blackContainer':'whiteContainer'}>
        <div id='noLogin' className={isEnter ? 'hide' : 'show'}>
          <p>未登入</p>
          <div onClick={login} id='begin'>login</div>
        </div>
        <div id='login' className={isOut ? 'hide' : 'show'}>
          <p>已登入</p>
          <div>hello~{user.username}</div>
          <div>Hello</div>
          <div>Hello2</div>
        </div>
        {/*<form  className={isShow ? 'showForm' : 'hideForm'}*/}
        {/*      onSubmit={(event) => {*/}
        {/*        event.preventDefault();*/}
        {/*        setIsUserError(false)*/}
        {/*        setIsPassError(false)*/}
        {/*        if (user.username !== userInfo.username) {*/}
        {/*          setIsUserError(true)*/}
        {/*        } else if (user.password !== userInfo.password) {*/}
        {/*          setIsPassError(true)*/}
        {/*        } else if (user.password !== userInfo.password && user.username !== userInfo.username) {*/}
        {/*          setIsUserError(true)*/}
        {/*          setIsPassError(true)*/}
        {/*        } else {*/}
        {/*          setIsEnter(true)*/}
        {/*          setIsOut(false)*/}
        {/*          setIsShow(false)*/}
        {/*        }*/}
        {/*      }}>*/}
        {/*  <label><p>請輸入帳號:</p><input onChange={handleInputChange} value={user.username} name='username'*/}
        {/*                             required/></label>*/}
        {/*  <div className={isUserError ? 'usernameError' : 'NotUsernameError'}>帳號輸入錯誤</div>*/}
        {/*  <label><p>請輸入密碼:</p><input onChange={handleInputChange} value={user.password} name='password' required*/}
        {/*                             type='password'/></label>*/}
        {/*  <div className={isPassError ? 'passwordError' : 'NotPasswordError'}>密碼輸入錯誤</div>*/}
        {/*  <div>*/}
        {/*    <button  className='btn'>提交</button>*/}
        {/*  </div>*/}
        {/*</form>*/}
        <LoginForm
          isShow={isShow}
          user={user}
          setUser={setUser}
          setIsEnter={setIsEnter}
          setIsOut={setIsOut}
          setIsShow={setIsShow}
        />
      </div>
    </div>
  );
}

export default App;
