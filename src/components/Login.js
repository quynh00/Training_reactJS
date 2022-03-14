import React, { Component } from 'react';
import { UsersData } from './User.js';
import './style/Login.css'
import { } from 'react-bootstrap';
import Stock from '../img/Stock.png';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {password} = this.state
    if(password.length < 5) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải từ 5 kí tự'
      }
    }
    return returnData;
  }

  submitForm(e) {
    e.preventDefault();
    const validation = this.validationForm()
    const toCompare = {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      };
    if (validation.error) {
        alert(validation.msg)
      } else if (UsersData.some(user => JSON.stringify(user) === JSON.stringify(toCompare))) {
        
        this.props.history.push('/Home');
      } else {
        alert('Sai tên đăng nhập hoặc mật khẩu');
      }
  }   
  render() {
    return (
      <div className="container">
          <div className="form-login">
              <div>
                  <img className="logo" src='https://online.bvsc.com.vn/sso/images/BVSC/logo-company.png'/>
              </div>
            <form className=''
            onSubmit={e => {
                this.submitForm(e);
            }}
            >
            <div className="form-group">
                <img className='icon-user' src="https://online.bvsc.com.vn/sso/images/graphics/user.svg"/>
                <input type="text" className="form-control1" id="username" name="username" placeholder="Username"
                onChange={e => this.changeInputValue(e)}
                />
            </div>
            <div className="form-group">
                <img className='icon-pass' src="https://online.bvsc.com.vn/sso/images/graphics/pass.svg"/>
                <input type="password" className="form-control2" id="password" name="password" placeholder="Password"
                onChange={e => this.changeInputValue(e)}
                />
            </div>
            <button value="submit" className="btn_login" onClick={this.postDetails}>
                Đăng nhập
            </button>
            </form>
            <div className='form-group1'>
                <NavLink className="navlink-name" to={"./Change_password"}>Mở tài khoản</NavLink>
                <NavLink className="navlink-pass" to={"./Register"}>Quên mật khẩu</NavLink>
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
        <div className="footer">
            <div className="footer-group">
                <img src={Stock} alt="" className="icon-stock"/>
                <p>Bảng giá</p>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
