import React, { Component } from 'react'
import { Grid } from 'zent';
const datasets = [{
  item_id: '5024217',
  bro_uvpv: '0/0',
  stock_num: '60',
  sold_num: 0,
}, {
  item_id: '5024277',
  bro_uvpv: '0/0',
  stock_num: 59,
  sold_num: 0,
}, {
  item_id: '13213123',
  bro_uvpv: '0/0',
  stock_num: 159,
  sold_num: 0,
}];
const columns = [{
  title: 'Product',
  width: '50px',
  fixed: true,
  bodyRender: (data) => {
    return (
      <div>{data.item_id}</div>
    );
  }
}, {
  title: 'PV',
  name: 'bro_uvpv',
  width: '100px'
}, {
  title: 'Stock',
  name: 'stock_num',
  width: '100px'
}, {
  title: 'Sales',
  name: 'sold_num',
  fixed: 'right'
}];
export default function MenuManage () {
  const getRowConf = (data, index) => {
    return {
      canSelect: true,
    };
  }

  const onChange = (conf) => {
   console.log(conf,'数字')
    this.setState(conf);
  }

 const onExpand = (conf) => {
    console.log(conf);
  }
  return (
    <div className="page">
      <p>菜单管理</p>
      <div className="tableDiv">
        <Grid
          columns={columns}
          datasets={datasets}
          onChange={onChange}
          getRowConf={getRowConf}
          rowKey="item_id"
          scroll={{ x: 1300 }}
          expandation={{
            // isExpanded(record, index) {
            //   return (index % 2 === 0);
            // },
            expandRender(record) {
              return (
                <div>
                  {/* {record.item_id} */}
                  9999
                </div>
              );
            }
          }}
          onExpand={onExpand}
        />
      </div>
    </div>
  )
}
