import React from 'react'
import { Grid } from 'zent'
import nullData from '../../assets/images/tableNoData.png'
import './index.scss'
export default function Table (props) {
  console.log(props, '拿到的数据信息')
  const { columns, datasets, onChangePage, total, current, rowKey, onSelect, getSelectionProps } = props
  return (
    <>
      <div className='page'>
      {
        datasets.length !== 0 ? <Grid
        columns={columns}
        bordered={true}
        datasets={datasets}
        rowClassName={(data, index) => `${data.id}-${index}`}
        pageInfo={{
            current,
            pageSize: 10,
            total: total,
            pageSizeOptions: [5, 10],
        }}
        selection={
          {
          onSelect: onSelect, // 选中触发事件
          getSelectionProps: getSelectionProps,// 禁用数据
          isSingleSelection: false,// 单选还是多选
          selectedRowKeys: [] // 默认选择
          }
        }
        rowKey={rowKey}
        onChange={onChangePage}
      /> : <div className="tableNoData">
            <img src={nullData} alt="" />
         </div>
      }
      </div>

    </>
  )
}
