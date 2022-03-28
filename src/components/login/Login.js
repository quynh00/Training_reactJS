import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {usersData} from '../../dataFile/User';
import { Logins } from '../../redux/action'; 
import { GetUserName } from '../../redux/action';
import checkLogin from '../../serviceAPI/UserService';
import '../../assets/style/Login.css';

function Login() {
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const {username, password} = data;
    const [status, SetStatus] = useState("true");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkUser = (usersData) => {
        const usercheck = checkLogin(username, password);
        if(usercheck) {
            navigate('/Home')
            dispatch(Logins(true))
            dispatch(GetUserName(data.username))
        }else {
            SetStatus("false");
        }
    }

    const changeInputValue = (e) => {
        setData({...data, [e.target.name]: e.target.value})
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
                  <img className="logo" src='https://online.bvsc.com.vn/sso/images/BVSC/logo-company.png' alt=""/>
              </div>
            <form className=''
            onSubmit={submitHandler}
            >
            <div className="form-group">
                <img className='icon-user' src="https://online.bvsc.com.vn/sso/images/graphics/user.svg" alt=""/>
                <input type="text" className="form-control1" id="username" name="username" placeholder="Username"
                onChange={changeInputValue}
                />
            </div>
            <div className="form-group">
                <img className='icon-pass' src="https://online.bvsc.com.vn/sso/images/graphics/pass.svg" alt="" />
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
                            <img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg" alt=""/>
                            <span>Việt Nam</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="language" >
                            <img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg" alt=""/>
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
      </div>
      </div>
    )
  }
export default Login;