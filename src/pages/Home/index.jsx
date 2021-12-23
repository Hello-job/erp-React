import React, {  useEffect, useState } from 'react'
import './index.scss'
// import echarts from 'echarts'
import * as echarts from 'echarts'
import { Grid, Dialog } from 'zent'
import apiServe from '../../api/index'
// 导入图片内容
export default function Home() {
	// 获取订单统计
	const [orderStatistics, setOrderStatistics] = useState({})
	// 待办事件接口数据
	const [todoListData, setData] = useState({})
	// 预警信息
  const [datasets, setwarning] = useState([])
  // 预警详情信息
  const [datasets2, setDate] = useState([])
	// 弹窗一
	const [visibleDg1, setvisibleDg1] = useState(false)
	// 待办事项静态数据
	const todolist = [
		{
			title: '采购申请单审核',
			imgIcon: require('../../assets/images/mainMid1.png').default,
			color: '#8792f2',
			num: 0,
			lookPath: '',
		},
		{
			title: '销售申请单审核',
			imgIcon: require('../../assets/images/mainMid2.png').default,
			color: '#58debc',
			num: 0,
			lookPath: '',
		},
		{
			title: '供应商审核',
			imgIcon: require('../../assets/images/mainMid3.png').default,
			color: '#ffbd82',
			num: 0,
			lookPath: '',
		},
		{
			title: '产品审核',
			imgIcon: require('../../assets/images/mainMid4.png').default,
			color: '#ffa2a2',
			num: 0,
			lookPath: '',
		},
		{
			title: '采购未完成',
			imgIcon: require('../../assets/images/mainMid6.png').default,
			color: '#e9a2e5',
			num: 0,
			lookPath: '',
		},
		{
			title: '销售未完成',
			imgIcon: require('../../assets/images/mainMid7.png').default,
			color: '#7aafff',
			num: 0,
			lookPath: '',
		},
		{
			title: '产品字典变更',
			imgIcon: require('../../assets/images/mainMid8.png').default,
			color: '#4cd3d8',
			num: 0,
			lookPath: '',
		},
	]
	const columns = [
		{
			title: '序号',
			name: 'index',
			width: 80,
			textAlign: 'center',
		},
		{
			title: '预警类别',
			name: 'warningType',
			textAlign: 'center',
		},
		{
			title: '预警数量',
			name: 'count',
			defaultText: 0,
			textAlign: 'center',
			bodyRender: item => {
				let count = item.count
				return (
					<div className='countColor' onClick={lookInfo(item)}>
						{count}
					</div>
				)
			},
		},
	]
	// 查看详情
	const lookInfo = item => {
		return () => {
			console.log('详情信息', item)
			const { no } = item
			if (no && no !== 6 && no !== 8) {
				setvisibleDg1(true)
				getWarningItemList(no)
			}
		}
	}
	// 查看警报信息
	const getWarningItemList = no => {
		let data = {
			page: 1,
			rows: 10,
			warning_type: no,
		}
		console.log(data)
		apiServe.getWarningDetailList(data).then(res => {
			if (res.status) {
        console.log(res, '详情信息s')
        let data = res.data
        data.forEach((item, index) => {
          item.code = item.code || item.factory_num
          item.factory_name = item.factory_name || item.supplier_name
          item.index = index + 1
        })
        setDate(res.data)
        
			}
		})
	}
	// table2
	const columns2 = [
		{
			title: '序号',
			name: 'index',
			width: 80,
			textAlign: 'center',
		},
		{
			title: '公司编号',
			name: 'code',
			textAlign: 'center',
		},
		{
			title: '公司名称',
			name: 'factory_name',
			textAlign: 'center',
		},
		{
			title: '营业执照有效期',
			name: 'index',
			textAlign: 'center',
		},
		{
			title: '近效期天数',
			name: 'days',
			textAlign: 'center',
		},
		{
			title: '状态',
			name: 'status',
			textAlign: 'center',
		},
		{
			title: '操作',
			name: 'index',
      textAlign: 'center',
      bodyRender: item => {
				return (
					<div className='countColor' onClick={ clickDisable() }>
						禁用
					</div>
				)
			},
		},
  ]
  // 禁用设置
  const clickDisable = () => {
    return () => {
       console.log('操作触发')
     }
  }
	// 图表初始化1
	const initCharts1 = data => {
		let element = document.getElementById('eachart1')
		let myChart = echarts.init(element)
		let { amountArray, dateArray } = data
		let option = {
			title: {
				text: '每月采购统计',
				left: 36,
				top: 22,
				textStyle: {
					fontSize: 16,
					fontWeight: 'normal',
					color: 'rgba(0, 0, 0, 1)',
				},
			},
			color: ['#7CAAFF'],
			legend: {
				data: ['采购额'],
				right: 33,
				top: 33,
				itemWidth: 30,
				itemHeight: 10,
				textStyle: {
					fontSize: 16,
					fontWeight: 'normal',
					color: 'rgba(82, 91, 109, 1)',
				},
			},
			grid: {
				containLabel: true,
				left: 30,
				right: 30,
				top: 70,
				bottom: 0,
			},
			xAxis: {
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					rotate: 40,
					margin: 30,
					color: '#666666',
				},
				axisLine: {
					lineStyle: {
						color: '#ddd',
					},
				},
				type: 'category',
				data: dateArray,
			},
			yAxis: {
				axisLabel: {
					color: '#666666',
					formatter: '￥{value}',
					margin: 8,
				},
				axisLine: {
					lineStyle: {
						color: '#ddd',
					},
				},
				axisTick: {
					show: false,
				},
				type: 'value',
			},
			series: [
				{
					name: '销售额',
					data: amountArray,
					type: 'line',
				},
			],
			tooltip: {
				textStyle: {
					align: 'left',
					color: 'rgba(0, 0, 0, 0.6)',
				},
				trigger: 'item',
				//自定义echarts tooltip的显示位置，当鼠标移动到图表的左部时tip显示在右边，当鼠标移动到图表的右部时tip显示在左边
				position: function (position) {},
				formatter: '日期：{b0}' + '<br>' + '名称：{a0}' + '<br>' + '采购额：￥{c0}',
			},
		}
		myChart.setOption(option)
	}
	// 图标初始化2
	const intiCharts2 = data => {
		let element2 = document.getElementById('eachart2')
		let myChart2 = echarts.init(element2)
		let { amountArray, dateArray } = data
		let option2 = {
			title: {
				text: '每月销售统计',
				left: 36,
				top: 22,
				textStyle: {
					fontSize: 16,
					fontWeight: 'normal',
					color: 'rgba(0, 0, 0, 1)',
				},
			},
			color: ['#7CAAFF'],
			legend: {
				data: ['销售额'],
				right: 33,
				top: 33,
				itemWidth: 30,
				itemHeight: 10,
				textStyle: {
					fontSize: 16,
					fontWeight: 'normal',
					color: 'rgba(82, 91, 109, 1)',
				},
			},
			grid: {
				containLabel: true,
				left: 30,
				right: 30,
				top: 70,
				bottom: 0,
			},
			xAxis: {
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					rotate: 40,
					margin: 30,
					color: '#666666',
				},
				axisLine: {
					lineStyle: {
						color: '#ddd',
					},
				},
				type: 'category',
				data: dateArray,
			},
			yAxis: {
				axisLabel: {
					color: '#666666',
					formatter: '￥{value}',
					margin: 8,
				},
				axisLine: {
					lineStyle: {
						color: '#ddd',
					},
				},
				axisTick: {
					show: false,
				},
				type: 'value',
			},
			series: [
				{
					name: '销售额',
					data: amountArray,
					type: 'line',
				},
			],
			tooltip: {
				textStyle: {
					align: 'left',
				},
				trigger: 'item',
				//自定义echarts tooltip的显示位置，当鼠标移动到图表的左部时tip显示在右边，当鼠标移动到图表的右部时tip显示在左边
				position: function (position) {},
				formatter: '日期：{b0}' + '<br>' + '名称：{a0}' + '<br>' + '采购额：￥{c0}',
			},
		}
		myChart2.setOption(option2)
	}
	useEffect(() => {
		// 获取订单统计信息
		console.log(todolist)
		apiServe.getOrderList().then(res => {
			if (res.status) {
				setOrderStatistics(res.data.order_statistics)
				setData(res.data.backlog)
			}
		})
		// 获取每月采购统计数量
		apiServe.getMonthlyShop().then(res => {
			if (res.status) {
				console.log(res, '数字')
				intiCharts2(res.data)
			}
		})
		// 获取每月销售统计
		apiServe.getMonthlySales().then(res => {
			if (res.status) {
				initCharts1(res.data)
			}
		})
		// 获取系统预警信息
		apiServe.getTableList().then(res => {
			if (res.status) {
				console.log(res.data, '预警信息数据')
				let data = res.data
				data.forEach((item, index) => {
					item.index = index + 1
				})
				setwarning(data)
			} else {
			}
		})
	}, [])
	return (
		<>
					{/* header 数据信息页 */}
					<div className='headerDiv'>
						<div className='headerItem item1'>
							<p>当日采购订单</p>
							<p>数量：{orderStatistics.daily_purchase_order_total}</p>
							<p>金额：{orderStatistics.daily_purchase_order_amount}</p>
						</div>
						<div className='headerItem item2'>
							<p>合计采购订单</p>
							<p>数量：{orderStatistics.count_purchase_order_total}</p>
							<p>金额：￥{orderStatistics.count_purchase_order_amount}</p>
						</div>
						<div className='headerItem item3'>
							<p>当日销售订单</p>
							<p>数量：{orderStatistics.daily_sale_order_total}</p>
							<p>金额：{orderStatistics.daily_sale_order_amount}</p>
						</div>
						<div className='headerItem item4'>
							<p>合计销售订单</p>
							<p>数量：{orderStatistics.count_sale_order_total}</p>
							<p>金额：￥{orderStatistics.count_sale_order_amount}</p>
						</div>
					</div>
					{/* 待办事项 */}
					<div className='title'>
						<p>待办事件</p>
					</div>
					<div className='toDoList'>
						{todolist.map((item, index) => {
							return (
								<div className='toDolist_item' key={index}>
									<div className='toItem_top'>
										<div className='top_img'>
											<img src={item.imgIcon} alt='' />
										</div>
										<div className='top_title'>
											<p>{item.title}</p>
											<p>
												待办事项: <span>5条</span>
											</p>
										</div>
									</div>
									<div className='bottom_btn'>
										<div style={{ backgroundColor: item.color }} className='btn'>
											立即查看
										</div>
									</div>
								</div>
							)
						})}
					</div>
					{/* eachar图表 */}
					<div className='chart'>
						<div className='chartDiv marginR20'>
							<div id={'eachart1'} style={{ height: 400 }}></div>
						</div>
						<div className='chartDiv'>
							<div id={'eachart2'} style={{ height: 400 }}></div>
						</div>
					</div>
					{/* 系统预警 */}
					<div className='system'>
						<p className='system-title'>系统警告</p>
						<Grid
							bordered={true}
							columns={columns}
							datasets={datasets}
							rowClassName={(data, index) => `${data.index}-${index}`}
							onRowClick={(data, index, event) => {
								console.log(data, index, event.target, 'simple onRowClick')
							}}
						/>
					</div>
					{/* 弹窗一 */}
					<Dialog visible={visibleDg1} onClose={() => setvisibleDg1(false)} title='营业执照近效期/过期列表' className="Dialog-top">
							<Grid
								bordered={true}
								columns={columns2}
								datasets={datasets2}
								rowClassName={(data, index) => `${data.index}-${index}`}
								onRowClick={(data, index, event) => {
									console.log(data, index, event.target, 'simple onRowClick')
								}}
					      rowKey='index'
							/>
					</Dialog>
		</>
	)
}
