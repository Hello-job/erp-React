import React, { useEffect, useState, useContext } from 'react'
import { Menu, Dropdown, DropdownHoverTrigger, DropdownContent, DropdownPosition, Icon } from 'zent'
import { useHistory, useLocation } from 'react-router-dom'
import apiServe from '../../api/index'
// 引入路由组件
import MenuRouter from './menuRouter'
import './index.scss'
// 图片获取
import logo from '../../assets/images/logo.png'
import head from '../../assets/images/head.png'
import iconDefalut01 from '../../assets/images/iconDefalut01.png'
import { Context } from '../../App'
export default function Main() {
	// 用户名称
	const [usernam, setname] = useState('')
	// 用户显示菜单数据
	const [menuList, setmenulist] = useState([])
	// 动画数据
	const [animateState, setAnimate] = useState(0)
	// 进入hover
	const [Acindex, setindex] = useState(0)
	// 子模块列表
	const [mneuChildren, setChildmenu] = useState([])
	// 子模块移入index
	const [itemIndex, setItemindex] = useState(0)
	// 跳转路由参数
	const history = useHistory()
	const { pathname } = useLocation()
	const { MenuItem } = Menu
	// 当前路由
	const [currentRouter, setCurrent] = useState('')
	// 导航数据
	const [navlist, setNavlist] = useState([])
	// 全局loading
    const [loading, setLoading] = useState(true)
    // reduce
    const reduce = useContext(Context)
	// 页面初始化
	useEffect(() => {
		// 获取当前导航栏
		let navlist = localStorage.getItem('navList') ? JSON.parse(localStorage.getItem('navList')) : []
		setNavlist(navlist)
		let userInfo = reduce.state.userInfo ? reduce.state.userInfo : JSON.parse(window.localStorage.getItem('username'))
        setname(userInfo.user_name)
        setLoading(true)
		// 获取当前可用显示的列表
		apiServe
			.roleFunc()
			.then(res => {
				// 数据转换
				let list = JSON.parse(JSON.stringify(res.data))
				let newList = []
				list.forEach(item => {
					item.src = ''
					newList.push(item)
				})
                setmenulist(newList)
                setLoading(false)
			})
			.catch(err => {
			})
	}, [])
	// 路由监听
	useEffect(() => {
		if (pathname === '/main') {
			history.push('/main/home')
		}
		setCurrent(pathname)
	}, [pathname])
	// 鼠标移入事件
	const MouseEnter = index => {
		return () => {
			setindex(index)
			menuChildren(index)
			if (index !== 0) {
				animate(1)
			} else {
				animate(0)
			}
		}
	}
	// 鼠标移出事件
	const MouseLeave = index => {
		return () => {
			animate(0)
		}
	}
	// 动画效果
	const animate = (num, type) => {
		setAnimate(num)
	}
	// 查看当前模块的子模块
	const menuChildren = index => {
		setChildmenu(menuList[index].children)
	}
	// 子模块hover
	const itemMouseEnter = (item, index) => {
		return () => {
			let path = '/main' + item.link
			// 存入当前的路由快
			let NavList = localStorage.getItem('navList') ? JSON.parse(localStorage.getItem('navList')) : []
			let obj = {
				...item,
				path,
			}
			let findex = NavList.findIndex(element => {
				return element.path === path
			})
			if (findex === -1) {
				NavList.push(obj)
				localStorage.setItem('navList', JSON.stringify(NavList))
				setNavlist(NavList)
			}
			history.push(path)
			setItemindex(index)
		}
	}
	// 点击左侧大标题
	const clickMenu = (item, index) => {
		return () => {
			if (item.func_name === '首页') {
				history.push('/main/home')
			}
		}
	}
	// 清除 导航订单快
	const closeNav = (item, index) => {
		return () => {
			let NavList = localStorage.getItem('navList') ? JSON.parse(localStorage.getItem('navList')) : []
			let deleteindex = NavList.findIndex(element => {
				return element.path === item.path
			})
			if (deleteindex !== -1) {
				setNavlist(NavList)
				if (NavList.length === 1) {
					history.push('/main/home')
					setindex(0)
					NavList.splice(deleteindex, 1)
					localStorage.setItem('navList', JSON.stringify(NavList))
					return
				}
				if (pathname === item.path) {
					let toindex = index === 0 ? 1 : index - 1
					let toPath = NavList[toindex].path
					history.push(toPath)
				}
				NavList.splice(deleteindex, 1)
				localStorage.setItem('navList', JSON.stringify(NavList))
			}
		}
	}
	// 路由跳转
	const goNavpath = item => {
		return () => {
			console.log(item)
			history.push(item.path)
		}
	}
	// 左边事件
	const leftNavClick = () => {
		return () => {
			navlist.forEach((item, index) => {
				if (item.path === pathname) {
					// if ()
				}
			})
		}
	}
	// 前进事件
	const rightNavClick = () => {
		return () => {}
    }
    // 修改密码
    const changePassword = () => {
        console.log('修改密码')
    }
    // 退出登录
    const outLogin = () => {
        history.push('/login')
        window.localStorage.removeItem('token')
    }
	return (
		<div className='main'>
			{/* 头部信息 */}
			<div className='header'>
				<div className='header-logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='header-info'>
					<div className='userImg'>
						<Dropdown position={DropdownPosition.AutoBottomLeft}>
							<DropdownHoverTrigger>
								<img src={head} alt='图像' />
							</DropdownHoverTrigger>
							<DropdownContent>
								<Menu>
                                    <MenuItem >
                                        <span onClick={changePassword}>修改密码</span>
                                    </MenuItem>
                                    <MenuItem >
                                        <span onClick={outLogin}>退出登录</span>
                                    </MenuItem>
								</Menu>
							</DropdownContent>
						</Dropdown>
					</div>
					<p>{usernam}</p>
				</div>
			</div>
			{/* main区域 */}
			<div className='content'>
				<div className='main-left' onMouseLeave={MouseLeave()}>
					<div className='main-left-box'>
						{menuList.map((item, index) => {
							return (
								<div className={`main-item  ${Acindex === index ? 'isActive' : null} `} key={index} onMouseEnter={MouseEnter(index)} onClick={clickMenu(item, index)}>
									<img src={iconDefalut01} alt='' />
									<p>{item.func_name}</p>
								</div>
							)
						})}
					</div>
					<div className={`maintransition ${animateState === 0 ? 'end-animation' : 'enter-animation'}  `}>
						{mneuChildren.map((item, index) => {
							return (
								<div key={index} className={`transtionItem ${itemIndex === index ? 'itemHover' : null}`} onClick={itemMouseEnter(item, index)}>
									<span>{item.func_name}</span>
									{itemIndex === index ? <span><Icon type="right" size="28px" /></span> : null}
								</div>
							)
						})}
					</div>
				</div>
				{/* 右侧区域 */}
                <div className='main-content'>
                    {/* 顶部导航 */}
                    {pathname !== '/main/home' ? (
                        <div className='topNav'>
                            {/* 左 */}
                            <div className='leftBtn' onClick={leftNavClick()}>
                                <Icon type='left' />
                            </div>
                            {/* 导航区域 */}
                            <div className='NavContent'>
                                {navlist.map((item, idx) => {
                                    return (
                                        <div className='NavItem' key={idx} onClick={goNavpath(item)}>
                                            <div className={`check ${currentRouter === item.path ? 'action' : ''} `}></div>
                                            <span className='titlespan'>{item.func_name}</span>
                                            <span onClick={e => e.stopPropagation()}>
                                                <Icon type='close' onClick={closeNav(item, idx)} />
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* 右侧 */}
                            <div className='rightNav' onClick={rightNavClick()}>
                                <Icon type='right' />
                            </div>
                        </div>
                    ) : null}
                    <MenuRouter></MenuRouter>
                </div>
			</div>
		</div>
	)
}
