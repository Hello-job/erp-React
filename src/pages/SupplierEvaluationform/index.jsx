import React, { useEffect, useState } from 'react'
import './index.scss'
import { Select, TextMark, DateRangePicker, Button, Grid } from 'zent';
import apiServe from '../../api/index'
import moment from 'moment'
const OPTIONS = [
   {
        text: '全部',
        key: 1,
    },
    {
        text: '待审核',
        key: 2,
    },
    {
        text: '已审核',
        key: 3,
    },
    {
        text: '审核驳回',
        key: 4,
    },
];
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
    title: '企业类型',
    name: 'supplier_type',
    width: 140,
    textAlign: 'center',
    bodyRender: item => {
      let type = item.supplier_type
      return (type === 1 ?
        <div className='countColor'>
          生产厂家
        </div> : <div className='countColor'>
          经销商
        </div>
      )
    },
  },
  {
    title: '评价时间',
    name: 'insert_time',
    width: 140,
    textAlign: 'center',
    bodyRender: item => {
      let time = item.insert_time ? moment(item.insert_time * 1000).format('YYYY-MM-DD') : '---'
      return (<span>{ time }</span>)
    }
  },
  {
    title: '评价人',
    name: 'evaluation_user',
    width: 100,
    textAlign: 'center',
  },
  {
    title: '审批时间',
    name: 'approval_time',
    width: 140,
    textAlign: 'center',
    bodyRender: item => {
      let time = item.approval_time ? moment(item.approval_time * 1000).format('YYYY-MM-DD') : '---'
      return (<span>{ time }</span>)
    }
  },
  {
    title: '审核人',
    name: 'audit_user',
    width: 100,
    textAlign: 'center',
  },
  {
    title: '状态',
    name: 'approval_status',
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

export default function SupplierEvaluationform () {
  // 供应商选择项
  const [options, setOptions] = useState([]);
  // 供应商模糊查询
  const [keyword, onKeywordChange] = useState('');
  // loading
  const [loading, setLoading] = useState(false);
  // 供应商选择项值
  const [value, setvalue] = useState({})
  // 评估时间选择默认值
  const [rangeValue, setrangeValue] = useState(['', ''])
  // 审批时间默认值
  const [rangeValue2, setrangeValue2] = useState(['', ''])
  // 状态下拉值
  const [options2,setOptions2] = useState(OPTIONS)
  // 状态默认值
  const [statevalue, setState] = useState({})

  const [current, setcurrent] = useState([])
  // 总数
  const [total, settotal] = useState(0)
  // 供应商数据
  const [supplier,setSupplier] = useState([])
  useEffect(() => {
    setLoading(true);
    if (keyword) {
        const timeout = setTimeout(() => {
          setOptions(options.filter(it => it.text.startsWith(keyword)));
          setLoading(false);
        }, 1000);
      return () => clearTimeout(timeout);
    }

    setLoading(false);
  }, [keyword]); 
  // 初始进入
  useEffect(() => {
    // 获取供应商下拉
    apiServe.getSupplierNameList().then(res => {
      if (res.status) {
        let arr = []
        res.data.forEach(item => {
          arr.push({
            key: item.id,
            text: item.name
          })
        })
        setOptions(arr)
       }
    })
    // 获取表格数据
    let data = {
        page: 1,
        rows: 10,
    }
    apiServe.supplierEvaluationList(data).then(res => {
      if (res.status) {
        console.log(res, '表格数据')
        let resultData = res.data.result
        resultData.forEach((item,index) => {
          item.index = index + 1
        })
        setSupplier(res.data.result)
        settotal(res.data.total)
      }
    })
  },[])
  // 查询事件
  const searchBtn = () => {
    console.log('点击查询')
  }
  // 新增数据
  const newAdd = () => {
    console.log('新增数据')
  }
  // 页数改变
  const pageonChange = (page) => {
    console.log('页数改变',page)
  }
  return (
      <div className="page">
        {/* 搜索区域 */}
        <div className="serach">
        {/* 搜索内容 */}
        <div className="From">
          <div className="From-item">
            <span>供应商名称：</span>
            <Select
            options={options}
            keyword={keyword}
            value={value}
            onChange={(value)=> setvalue(value)}
            onKeywordChange={onKeywordChange}
            placeholder="选择一项"
            filter={false}
            loading={loading}
            renderOptionContent={it => <TextMark searchWords={[keyword]} textToHighlight={it.text} />}
           />
          </div>
          <div className="From-item">
            <span>评估时间：</span>
            <DateRangePicker
              className="zent-datepicker-demo"
              value={rangeValue}
              onChange={ (value) => setrangeValue(value)}
              dateSpan={30}
              canClear={[false, true]}
            />
          </div>
          <div className="From-item">
            <span>审批时间：</span>
            <DateRangePicker
              className="zent-datepicker-demo"
              value={rangeValue2}
              onChange={ (value) => setrangeValue2(value)}
              dateSpan={30}
              canClear={[false, true]}
            />
          </div>
          <div className="From-item">
            <span>状态：</span>
            <Select
            options={options2}
            value={statevalue}
            onChange={(value)=> setState(value)}
            placeholder="状态"
           />
          </div>
          <div className="From-item">
            <Button type="primary" onClick={searchBtn}>查询</Button>
          </div>
          <div className="From-item">
            <Button type="primary" onClick={newAdd}>新增</Button>
          </div>
        </div>

        </div>
        {/* 主题部分 */}
        <div className="subcontent">
          <div className="tableDiv">
          <Grid
              bordered={true}
              columns={columns}
              datasets={ supplier}
              pageInfo={{
                current: current,
                pageSize: 10,
                total: total,
                pageSizeOptions: [5, 10],
              }}
              onChange={pageonChange}
              ellipsis
            />
          </div>
        </div>
      </div>
    )
}
