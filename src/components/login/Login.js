import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { } from 'react-bootstrap';
import {usersData} from '../../dataFile/User'
import '../../assets/style/Login.css'

function Login() {

  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const history = useHistory()
  const [status, SetStatus] = useState("true");
  const {username, password} = data;

  const changeInputValue = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const checkUser = (usersData) => {
    const usercheck = usersData.find(user => (
      user.username === username && user.password === password))
    if(usercheck) {
      history.push('/Home');
    }else {
      SetStatus("false");
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    checkUser(usersData);
  }
    
  return (
    <div className='body-login'>
      <div className="container">
          <div className="form-login">
              <div>
                  <img className="logo" src='https://online.bvsc.com.vn/sso/images/BVSC/logo-company.png'/>
              </div>
            <form className=''
            onSubmit={submitHandler}
            >
            <div className="form-group">
                <img className='icon-user' src="https://online.bvsc.com.vn/sso/images/graphics/user.svg"/>
                <input type="text" className="form-control1" id="username" name="username" placeholder="Username"
                onChange={changeInputValue}
                />
            </div>
            <div className="form-group">
                <img className='icon-pass' src="https://online.bvsc.com.vn/sso/images/graphics/pass.svg"/>
                <input type="password" className="form-control2" id="password" name="password" placeholder="Password"
                onChange={changeInputValue}
                />
            </div>
            <div className='error'>
                {/* {this.setState.err != '' ? this.state.err : ''}
                {this.setState.errpass != '' ? this.state.errpass : ''} */}
                {status === "false" && (<div> sai tên đăng nhập hoặc mật khẩu</div>)}
            </div>
            <button value="submit" className="btn_login" >
                Đăng nhập
            </button>
            </form>
            <div className='form-group1'>
                <NavLink className="navlink-name" to={""}>Mở tài khoản</NavLink>
                <NavLink className="navlink-pass" to={""}>Quên mật khẩu</NavLink>
            </div>
            <div className='form-group-flex'>
                <div className="row">
                    <div className="col">
                        <div className="language" >
                            <img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/>
                            <span>Việt Nam</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="language" >
                            <img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg"/>
                            <span>English</span>
                        </div>
                    </div>
                </div>  
                <hr id="line" />
            </div>
            <div className="contact">
                Liên hệ: (84-24) 3928 8080 - ext.699/(84-28) 3914 6888
            </div>
        </div>
        {/* <div className="footer">
            <div className="footer-group">
                <img src={Stock} alt="" className="icon-stock"/>
                <p>Bảng giá</p>
            </div>
        </div> */}
      </div>
      </div>
    )
  }
export default Login;