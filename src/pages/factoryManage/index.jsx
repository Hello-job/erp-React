import React, { useState, useEffect } from 'react'
import './index.scss'
import { Form, FormStrategy, FormSelectField, FormDateRangePickerField, Button, Notify, FormContext } from 'zent'
// 表格组件
import Table from '../../components/Table/index'
import apiServe from '../../api/index'
const CONTROL_STYLE = { minWidth: 270, display: 'flex' }
export default function FactoryManage() {
	const form = Form.useForm(FormStrategy.View)
  // 表头信息
  // 表格表头
  const columns = [
    {
      title: '序号',
      name: 'index',
      textAlign: 'center',
      width: 80,
    },
    {
      title: '供应商编号',
      name: 'supplier_code',
      textAlign: 'center',
    },
    {
      title: '供应商名称',
      name: 'supplier_name',
      textAlign: 'center',
    },
    {
      title: '营业执照有效期',
      name: 'business_allows_end',
      width: 140,
      textAlign: 'center',
    },
    {
      title: '经营许可证有效期',
      name: 'business_end',
      width: 140,
      textAlign: 'center',
      // bodyRender: item => {

      //   return (<span>{ item }</span>)
      // }
    },
    {
      title: '备案日期',
      name: 'regist_end',
      width: 100,
      textAlign: 'center',
    },
    {
      title: '联系人',
      name: 'name',
      width: 140,
      textAlign: 'center',
    },
    {
      title: '联系电话',
      name: 'phone',
      width: 100,
      textAlign: 'center',
    },
    {
      title: '状态',
      name: 'status',
      width: 120,
      textAlign: 'center',
    },
    {
      title: '操作',
      name: '',
      fixed: 'right',
      textAlign: 'center',
    },
  ];
  // 表格数据
  const [datasets, setDatasets] = useState([])
  // 总数量信息
  const [total, setTotal] = useState(0)
  // 表格page
  const [page, setPage] = useState(1)
  // 获取数据
  useEffect(() => {
      // 获取供应商表信息
    let data = {
      page,
      rows: 10,
      }
    apiServe.getSupplierList(data).then(res => {
      let result = res.data.supplier
      result.forEach((item,index) => {
        item.index = index + 1
      })
      setDatasets(result)
      setTotal(res.data.total)
    }).catch(err => {
        console.log(err,'错误提示')
    })
     
      
  }, [page])
  // 页码切换
  const onChangePage = (page) => {
    const { current } = page
    setPage(current)
  }
  // 勾选切换
  const onSelect = (selectKey, selectArr, current) => {
    console.log(selectKey, selectArr, current,'勾选数据')
  }
  // 禁用勾选项
  const getSelectionProps = data => ({
        disabled: data.supplier_id === 'AT10076',
  })
	return (
		<div className='page'>
			<div className='serach'>
				<Form layout='horizontal' direction='row' form={form}>
					<FormContext.Provider value={{ controlStyle: CONTROL_STYLE }}>
						<FormSelectField
							name='name'
							label='供应商名称:'
							required
							props={{
								options: [
									{ key: 1, text: '普通用户' },
									{ key: 2, text: '高级用户' },
								],
							}}
						/>
						<FormDateRangePickerField
							name='dateRange'
							label='身份证有效期:'
							type='split'
							className='datawidth'
							dateFormat='YYYY-MM-DD HH:mm:ss'
							validators={[
								function required(value) {
									if (!value[0] || !value[1]) {
										return {
											name: 'required',
											message: '请填写有效期',
										}
									}
								},
							]}
						/>
						<FormSelectField
							name='type'
							label='状态:'
							required
							props={{
								options: [
									{ key: 1, text: '普通用户' },
									{ key: 2, text: '高级用户' },
								],
							}}
						/>
						<Button
							type='primary'
							onClick={() =>
								Notify.info(
									<code>
										<pre>{JSON.stringify(form.getValue(), null, 2)}</pre>
									</code>
								)
							}
						>
							查询
						</Button>
					</FormContext.Provider>
				</Form>
			</div>
			{/* table区域 */}
			<div className='tableDiv'>
				<Table columns={columns} datasets={datasets} total={total} onChangePage={onChangePage} current={page} onSelect={onSelect} getSelectionProps={getSelectionProps} rowKey={'supplier_id'}></Table>
			</div>
		</div>
	)
}
