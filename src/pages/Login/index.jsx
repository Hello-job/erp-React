import React, { useState, useEffect, useContext } from 'react'
import { Notify } from 'zent'
import { useHistory } from 'react-router-dom';
import apiServe from '../../api/index'
// 加密文件
import JSEncrypt from 'jsencrypt'
import './index.css'
import iconL from '../../assets/images/ico1.png'
import google from '../../assets/images/chorme1.png'
import { Context } from '../../App'
export default function Login () {
    // reduce
    const reduce = useContext(Context)
    const [usename, setname] = useState('')
    const [password, setpassword] = useState('')
    const [code, setCode] = useState('')
    const [codeImg, setCodeImg] = useState('')
    const history = useHistory()
    useEffect(() => {
        getCode()
       const timer = setInterval( () => {
           getCode()
       }, 1000*60);
        return () => {
           clearInterval(timer)
        }
    }, [])

    // 获取验证码
    const getCode =async function (params) {
        let res = await apiServe.getTestCode({})
        setCodeImg(res.data)
    }

    const goLogin = () => {
        return () => {
            if (!usename) {
                 return Notify.warn('账号不能为空')
            }
             if (!password) {
                 return Notify.warn('账号不能为空')
             }
             if (!password) {
                 return Notify.warn('账号不能为空')
             }
            apiServe.systemRsa().then(res => {
                console.log(res, '获取key')
                const loginPasswd = encrypt(res.data, password)
                let obj = {
                    username: usename,
                    password: loginPasswd,
                    image_code: code,
                    company_type: 'MANAGE',
                }
                apiServe.login(obj).then(res => {
                    console.log(res, '登录信息')
                    const token = res.data.token.value
                    // 保存token
                    window.localStorage.setItem('token', token)
                    // 用户信息
                    console.log(reduce.dispatch({
                        type: 'userInfo',
                        data: res.userInfo
                    }))
                    window.localStorage.setItem('username',JSON.stringify(res.userInfo))
                    Notify.success('登录成功')
                    history.push('/main')
                    
                })
            })
            // apiServe.login()
        }
    }
    // 登录加密
    const encrypt = function (key, str) {
        // 注册方法
        let pubKey = key // ES6 模板字符串 引用 rsa 公钥
        let encryptStr = new JSEncrypt()
        encryptStr.setPublicKey(pubKey) // 设置 加密公钥
        let data = encryptStr.encrypt(str.toString()) // 进行加密
        return data
    }
    return (
        <div className="page">
            <div className="loginDiv">
                <div className="loginImg"></div>
                <div className="login-right">
                    <div className="init">
                        {/* 输入账号 */}
                        <div className="item">
                            <div className="iconImg img1">
                            </div>
                            <input value={usename} type="text" onChange={(e) => setname(e.target.value)} placeholder="请输入账号"  />
                        </div>
                        {/* 输入密码 */}
                        <div className="item">
                            <div className="iconImg img2">
                            </div>
                            <input value={password} type="password" placeholder="请输入密码"  onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        {/* 输入验证码 */}
                        <div className="item">
                            <div className="iconImg img3">
                            </div>
                            <input value={code} type="text" placeholder="请输入验证码" onChange={(e) => setCode(e.target.value)} />
                            <img className="codeImg" src={codeImg} alt="" />
                        </div>
                        <div className="item borNone marginTop40" onClick={goLogin()}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flooter">
                <div className="flooterDiv">
                    <div className="flleft">
                        <p>为了更好的使用体验</p>
                        <p>
                            <img style={{marginRight: '10px'}} src={iconL} alt="图标" />
                            <span>推荐使用谷歌浏览器</span>
                        </p>
                    </div>
                    <div className="flright">
                        <img src={google} alt="" />
                        <div className="rightBtn">
                            <p>谷歌浏览器</p>
                            <div className="btn">
                                点击下载
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    )
}