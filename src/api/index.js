import axios from '../server/http'
const appServer = {
	// 登录接口
	login: data => {
		return axios({
			url: '/system/login',
			data,
			method: 'post',
		})
	},
	// 获取验证码
	getTestCode: data => {
		return axios({
			url: '/system/image_code',
			params: data,
			method: 'get',
		})
	},
	// 获取key
  systemRsa: data => {
        return axios({
            url: '/system/rsa',
            data,
            method: 'get',
		})
	},
	// 获取当前角色显示菜单
	roleFunc: data => {
        return axios({
            url: '/permission/role_func',
            data,
            method: 'get',
		})
	},
	// 获取订单统计, 待办事项
	getOrderList: data => {
		return axios({
			url: '/manage/home/dashboard',
			data,
			method: 'get',
		})
	},
	// 获取每月采购统计
	getMonthlySales: data => {
		return axios({
			url: '/manage/home/monthly_sale',
			data,
			method: 'get',
		})
	},
	// 获取每月采购统计
	getMonthlyShop: data => {
		return axios({
			url: '/manage/home/monthly_purchase',
			data,
			method: 'get',
		})
	},
	// 获取系统预警表格列表
	getTableList: data => {
		return axios({
			url: '/manage/home/system_warning',
			data,
			method: 'get',
		})
	},
	// 获取系统预警表格详情列表
	getWarningDetailList: data => {
		return axios({
			url: '/manage/home/system_warning/list',
			params:data,
			method: 'get',
		 })
	},
	// 获取供应商名称列表
	getSupplierNameList: data => {
		return axios({
			url: '/supplier_list',
			data,
			method: 'get',
		})
	},
	// 供应商评价表列表
	supplierEvaluationList: data => {
		return axios({
			url: '/supplier_evaluation/list',
			params:data,
			method: 'get',
		})
	},
	// 获取供应商表格数据
	getSupplierList: data => {
		return axios({
			url: '/supplier/list',
			params:data,
			method: 'get',
		})
	}
}
export default appServer 
