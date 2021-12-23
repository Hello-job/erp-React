import { lazy } from 'react'
export const routers = [
      // 首页
      {
        path: '/main/home',
        name: 'home',
        component: lazy(() => import('../pages/Home/index.jsx')),
        meta: {
          title: '首页',
          keepAlive: true,
        },
      },
      // 信息管理
      {
        path: '/main/supplierManage',
        name: 'supplierManage',
        component: lazy(() => import('../pages/msgManage/supplierManage')),
        meta: {
          title: '信息管理',
          navName: '厂家管理',
          keepAlive: true,
        },
      },
      {
        path: '/main/SupplierEvaluationform',
        name: 'SupplierEvaluationform',
        component: lazy(() => import('../pages/SupplierEvaluationform')),
        meta: {
          title: '信息管理',
          navName: '供应商评价表',
          keepAlive: true,
        },
     },
     {
        path: '/main/menuManage',
        name: 'menuManage',
        component: lazy(() => import('../pages/menuManage')),
        meta: {
          title: '权限管理',
          navName: '菜单管理',
          keepAlive: true,
        },
      },
      {
        path: '/main/factoryManage',
        name: 'menuManage',
        component: lazy(() => import('../pages/factoryManage')),
        meta: {
          title: '信息管理',
          navName: '供应商管理',
          keepAlive: true,
        },
      },
    //  factoryManage
      // {
      //   path: '/main/outlandManage',
      //   name: 'outlandManage',
      //   meta: {
      //     title: '信息管理',
      //     navName: '境外厂家管理',
      //   },
      // },
      // {
      //   path: '/main/manufacturerManage',
      //   name: 'manufacturerManage',
      //   meta: {
      //     title: '信息管理',
      //     navName: '厂家管理',
      //     triName: '厂家管理详情',
      //   },
      // },
      // {
      //   path: '/main/productManage',
      //   name: 'productManage',
      //   meta: {
      //     title: '信息管理',
      //     navName: '产品管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/productFrame',
      //   name: 'productFrame',
      //   meta: {
      //     title: '信息管理',
      //     navName: '产品管理',
      //     triName: '产品管理详情',
      //   },
      // },
      // {
      //   path: '/main/clientManage',
      //   name: 'clientManage',
      //   meta: {
      //     title: '信息管理',
      //     navName: '客户管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/clientManageFrame',
      //   name: 'clientManageFrame',
      //   meta: {
      //     title: '信息管理',
      //     navName: '客户管理',
      //     triName: '医院',
      //   },
      // },
      // {
      //   path: '/main/clientManageAgentFrame',
      //   name: 'clientManageAgentFrame',
      //   meta: {
      //     title: '信息管理',
      //     navName: '客户管理',
      //     triName: '经销商',
      //   },
      // },
      // {
      //   path: '/main/factoryManage',
      //   name: 'factoryManage',
      //   meta: {
      //     title: '信息管理',
      //     navName: '供应商管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/firstCampApproval',
      //   name: 'firstCampApproval',
      //   meta: {
      //     title: '信息管理',
      //     navName: '供应商管理',
      //     triName: '供应商管理详情',
      //   },
      // },
      // {
      //   path: '/main/factoryManageFrame',
      //   name: 'factoryManageFrame',
      //   meta: {
      //     title: '信息管理',
      //     navName: '供应商管理',
      //   },
      // },
      // {
      //   path: '/main/SupplierEvaluationform',
      //   name: 'SupplierEvaluationform',
      //   meta: {
      //     title: '信息管理',
      //     navName: '供应商评价表',
      //     keepAlive: true,
      //   },
      // },
      // // 采购管理
      // {
      //   path: '/main/purchaseRequisition',
      //   name: 'purchaseRequisition',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购申请单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/addPurchaseRequisition',
      //   name: 'addPurchaseRequisition',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购申请单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/editPurchaseRequisition',
      //   name: 'editPurchaseRequisition',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购申请单',
      //     triName: '编辑',
      //   },
      // },
      // {
      //   path: '/main/purchaseOrder',
      //   name: 'purchaseOrder',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购订单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/editPurchaseOrder',
      //   name: 'editPurchaseOrder',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购订单',
      //     triName: '编辑',
      //   },
      // },
      // {
      //   path: '/main/addPurchaseOrder',
      //   name: 'addPurchaseOrder',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购订单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/purchaseOrderDetails',
      //   name: 'purchaseOrderDetails',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购订单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/entrustSettlement',
      //   name: 'entrustSettlement',
      //   meta: {
      //     title: '采购管理',
      //     navName: '委托代销结算单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/entrustSettlementDetails',
      //   name: 'entrustSettlementDetails',
      //   meta: {
      //     title: '采购管理',
      //     navName: '委托代销结算单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/purchaseReturns',
      //   name: 'purchaseReturns',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购退货通知单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/addPurchaseReturns',
      //   name: 'addPurchaseReturns',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购退货通知单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/editPurchaseReturn',
      //   name: 'editPurchaseReturn',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购退货通知单',
      //     triName: '编辑',
      //   },
      // },
      // {
      //   path: '/main/purchaseReturnsDetails',
      //   name: 'purchaseReturnsDetails',
      //   meta: {
      //     title: '采购管理',
      //     navName: '采购退货通知单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/quotation',
      //   name: 'quotation',
      //   meta: {
      //     title: '销售管理',
      //     navName: '报价单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/quotationDetails',
      //   name: 'quotationDetails',
      //   meta: {
      //     title: '销售管理',
      //     navName: '报价单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/quotationAdd',
      //   name: 'quotationAdd',
      //   meta: {
      //     title: '销售管理',
      //     navName: '报价单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/adjustOrder',
      //   name: 'adjustOrder',
      //   meta: {
      //     title: '销售管理',
      //     navName: '调价单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/adjustOrderAdd',
      //   name: 'adjustOrderAdd',
      //   meta: {
      //     title: '销售管理',
      //     navName: '调价单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/adjustOrderDetails',
      //   name: 'adjustOrderDetails',
      //   meta: {
      //     title: '销售管理',
      //     navName: '调价单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/salesApplication',
      //   name: 'salesApplication',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售申请单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/salesApplicationEdit',
      //   name: 'salesApplicationEdit',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售申请单',
      //     triName: '编辑',
      //   },
      // },
      // {
      //   path: '/main/salesOrder',
      //   name: 'salesOrder',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售订单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/salesOrderAdd',
      //   name: 'salesOrderAdd',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售订单',
      //     triName: '新增',
      //   },
      // },
      // {
      //   path: '/main/salesOrderDetails',
      //   name: 'salesOrderDetails',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售订单列表',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/settlementOrder',
      //   name: 'settlementOrder',
      //   meta: {
      //     title: '销售管理',
      //     navName: '委托代销结算单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/settlementOrderDetails',
      //   name: 'settlementOrderDetails',
      //   meta: {
      //     title: '销售管理',
      //     navName: '委托代销结算单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/salesReturn',
      //   name: 'salesReturn',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售退货通知单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/salesReturnEdit',
      //   name: 'salesReturnEdit',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售退货通知单',
      //   },
      // },
      // {
      //   path: '/main/salesReturnDetail',
      //   name: 'salesReturnDetail',
      //   meta: {
      //     title: '销售管理',
      //     navName: '销售退货通知单',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/acceptanceDetails',
      //   name: 'acceptanceDetails',
      //   meta: {
      //     title: '销售管理',
      //     navName: '客户收货验收明细',
      //     keepAlive: true,
      //   },
      // },
      // // 仓库管理
      // {
      //   path: '/main/receivingAcceptance',
      //   name: 'receivingAcceptance',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '收货验收',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/enterStorage',
      //   name: 'enterStorage',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '入库',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/orderPicking',
      //   name: 'orderPicking',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '拣货',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/outStorage',
      //   name: 'outStorage',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '出库',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/inventoryManage',
      //   name: 'inventoryManage',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '库存管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/inventoryManageDetail',
      //   name: 'inventoryManageDetail',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '库存管理',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/allocate',
      //   name: 'allocate',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '调拨',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/addAllocate',
      //   name: 'addAllocate',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '调拨',
      //     triName: '新增调拨',
      //   },
      // },
      // {
      //   path: '/main/allocateDetail',
      //   name: 'allocateDetail',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '调拨',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/inventoryStock',
      //   name: 'inventoryStock',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '库存盘存',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/inventoryStockDetail',
      //   name: 'inventoryStockDetail',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '库存盘存',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/inventoryStockToExamins',
      //   name: 'inventoryStockToExamins',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '报溢报损审核',
      //     triName: '审核',
      //   },
      // },
      // {
      //   path: '/main/addInventoryStock',
      //   name: 'addInventoryStock',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '库存盘存',
      //     triName: '新增盘存',
      //   },
      // },
      // {
      //   path: '/main/maintenance',
      //   name: 'maintenance',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '在库养护',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/changeBatch',
      //   name: 'changeBatch',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '批号修改',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/addChangeBatch',
      //   name: 'addChangeBatch',
      //   meta: {
      //     title: '仓库管理',
      //     navName: '批号修改',
      //     triName: '详情',
      //   },
      // },
      // // 财务管理
      // {
      //   path: '/main/receivableManage',
      //   name: 'receivableManage',
      //   meta: {
      //     title: '财务管理',
      //     navName: '应收管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/copeManage',
      //   name: 'copeManage',
      //   meta: {
      //     title: '财务管理',
      //     navName: '应付管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/invoiceManage',
      //   name: 'invoiceManage',
      //   meta: {
      //     title: '财务管理',
      //     navName: '发票管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/editInvoices',
      //   name: 'editInvoices',
      //   meta: {
      //     title: '财务管理',
      //     navName: '发票管理',
      //     triName: '供应商发票',
      //   },
      // },
      // {
      //   path: '/main/addCustomerInvoices',
      //   name: 'addCustomerInvoices',
      //   meta: {
      //     title: '财务管理',
      //     navName: '发票管理',
      //   },
      // },
      // {
      //   path: '/main/newZinvoice',
      //   name: 'newZinvoice',
      //   meta: {
      //     title: '财务管理',
      //     navName: '发票管理',
      //     triName: '新增',
      //   },
      // },
      // // 报表中心
      // {
      //   path: '/main/purchaseAndSale',
      //   name: 'purchaseAndSale',
      //   meta: {
      //     title: '报表中心',
      //     navName: '进销存变动表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/purchaseAndSaleFirstDetail',
      //   name: 'purchaseAndSaleFirstDetail',
      //   meta: {
      //     title: '报表中心',
      //     navName: '进销存变动表',
      //     triName: '进销存变动表详情',
      //   },
      // },
      // {
      //   path: '/main/purchaseAndSaleSecendDetail',
      //   name: 'purchaseAndSaleSecendDetail',
      //   meta: {
      //     title: '报表中心',
      //     navName: '进销存变动表',
      //     triName: '进销存变动表二级详情',
      //   },
      // },
      // {
      //   path: '/main/supplierSupplyList',
      //   name: 'supplierSupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '供应商供货表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsSupplierSupplyList',
      //   name: 'detailsSupplierSupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '供应商供货表',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/detailsThirdSupplierSupplyList',
      //   name: 'detailsThirdSupplierSupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '供应商供货表',
      //     triName: '三级详情',
      //   },
      // },
      // {
      //   path: '/main/factorySupplyList',
      //   name: 'factorySupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '厂家供货表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsFactorySupplyList',
      //   name: 'detailsFactorySupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '厂家供货表',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/detailsTirdFactorySupplyList',
      //   name: 'detailsTirdFactorySupplyList',
      //   meta: {
      //     title: '报表中心',
      //     navName: '厂家供货表',
      //     triName: '三级详情',
      //   },
      // },
      // {
      //   path: '/main/customerSalesTable',
      //   name: 'customerSalesTable',
      //   meta: {
      //     title: '报表中心',
      //     navName: '客户销售表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsCustomerSalesTable',
      //   name: 'detailsCustomerSalesTable',
      //   meta: {
      //     title: '报表中心',
      //     navName: '客户销售表',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/warehouseOutTable',
      //   name: 'warehouseOutTable',
      //   meta: {
      //     title: '报表中心',
      //     navName: '仓库出库表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsWarehouseOutTable',
      //   name: 'detailsWarehouseOutTable',
      //   meta: {
      //     title: '报表中心',
      //     navName: '仓库出库表',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/productTraceabilitySheet',
      //   name: 'productTraceabilitySheet',
      //   meta: {
      //     title: '报表中心',
      //     navName: '产品追溯表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/customerScale',
      //   name: 'customerScale',
      //   meta: {
      //     title: '报表中心',
      //     navName: '调用客户用量表',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/customerScaleDetail',
      //   name: 'customerScaleDetail',
      //   meta: {
      //     title: '报表中心',
      //     navName: '调用客户用量表-详情',
      //   },
      // },
      // {
      //   path: '/main/customerScaleAdd',
      //   name: 'customerScaleAdd',
      //   meta: {
      //     title: '报表中心',
      //     navName: '调用客户用量表-补充',
      //   },
      // },
      // {
      //   path: '/main/dataDictionary',
      //   name: 'dataDictionary',
      //   meta: {
      //     title: '报表中心',
      //     navName: '产品字典',
      //     keepAlive: true,
      //   },
      // },
      // // GSP管理
      // {
      //   path: '/main/purchaseOrderRecord',
      //   name: 'purchaseOrderRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购订单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsPurchaseOrderRecord',
      //   name: 'detailsPurchaseOrderRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购订单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/purchaseRecord',
      //   name: 'purchaseRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/receiptRecord',
      //   name: 'receiptRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '收货单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsReceiptRecord',
      //   name: 'detailsReceiptRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '收货单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/recordProductsReceived',
      //   name: 'recordProductsReceived',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '收货产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/acceptanceRecord',
      //   name: 'acceptanceRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '验收记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsAcceptanceRecord',
      //   name: 'detailsAcceptanceRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '验收记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/acceptanceProductRecord',
      //   name: 'acceptanceProductRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '验收产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/warehouseEntryRecord',
      //   name: 'warehouseEntryRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '入库单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsWarehouseEntryRecord',
      //   name: 'detailsWarehouseEntryRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '入库单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/recordIncomingProducts',
      //   name: 'recordIncomingProducts',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '入库产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/purchaseReturnRecord',
      //   name: 'purchaseReturnRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购退货单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsPurchaseReturnRecord',
      //   name: 'detailsPurchaseReturnRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购退货单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/purchaseReturnedProductRecords',
      //   name: 'purchaseReturnedProductRecords',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '采购退货产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/salesRecord',
      //   name: 'salesRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '销售产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/pickingListRecord',
      //   name: 'pickingListRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '拣货单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsPickingListRecord',
      //   name: 'detailsPickingListRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '拣货单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/recordPickingProducts',
      //   name: 'recordPickingProducts',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '拣货产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/warehouseReceiptRecord',
      //   name: 'warehouseReceiptRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsWarehouseReceiptRecord',
      //   name: 'detailsWarehouseReceiptRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/outgoingProductRecord',
      //   name: 'outgoingProductRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/outboundReviewListRecord',
      //   name: 'outboundReviewListRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库复核单记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsOutboundReviewListRecord',
      //   name: 'detailsOutboundReviewListRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库复核单记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/outboundReviewProductRecords',
      //   name: 'outboundReviewProductRecords',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '出库复核产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/salesReturnRecord',
      //   name: 'salesReturnRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '销售退货产品记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/transferRecord',
      //   name: 'transferRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '调拨记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/InventorySurplus',
      //   name: 'InventorySurplus',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘盈单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsInventorySurplus',
      //   name: 'detailsInventorySurplus',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘盈单',
      //     triName: '盘盈单-详情',
      //   },
      // },
      // {
      //   path: '/main/InventorySurplusRecord',
      //   name: 'InventorySurplusRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘盈记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/InventoryLoss',
      //   name: 'InventoryLoss',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘亏单',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/detailsInventoryLoss',
      //   name: 'detailsInventoryLoss',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘亏单',
      //     triName: '盘亏单-详情',
      //   },
      // },
      // {
      //   path: '/main/InventoryLossRecord',
      //   name: 'InventoryLossRecord',
      //   meta: {
      //     title: 'GSP管理',
      //     navName: '盘亏记录',
      //     keepAlive: true,
      //   },
      // },
      // // 权限管理
      // {
      //   path: '/main/changePwd',
      //   name: 'changePwd',
      //   meta: {
      //     title: '权限管理',
      //     navName: '修改密码',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/roleManage',
      //   name: 'roleManage',
      //   meta: {
      //     title: '权限管理',
      //     navName: '角色管理',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/storeManage',
      //   name: 'storeManage',
      //   meta: {
      //     title: '权限管理',
      //     navName: '仓库设置',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/userManage',
      //   name: 'userManage',
      //   meta: {
      //     title: '权限管理',
      //     navName: '用户设置',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/userRole',
      //   name: 'userRole',
      //   meta: {
      //     title: '权限管理',
      //     navName: '用户所属角色',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/roleMenuAuth',
      //   name: 'roleMenuAuth',
      //   meta: {
      //     title: '权限管理',
      //     navName: '角色菜单权限',
      //     keepAlive: true,
      //   },
      // },
      // // 基础数据
      // {
      //   path: '/main/OrderEqualRecord',
      //   name: 'OrderEqualRecord',
      //   meta: {
      //     title: '基础数据',
      //     navName: '订单同步记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/OrderEqualRecordDetail',
      //   name: 'OrderEqualRecordDetail',
      //   meta: {
      //     title: '基础数据',
      //     navName: '订单同步记录',
      //     triName: '详情',
      //   },
      // },
      // {
      //   path: '/main/ProductEqualRecord',
      //   name: 'ProductEqualRecord',
      //   meta: {
      //     title: '基础数据',
      //     navName: '产品同步记录',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/PrintTemplete',
      //   name: 'PrintTemplete',
      //   meta: {
      //     title: '基础数据',
      //     navName: '打印模版',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/notice',
      //   name: 'notice',
      //   meta: {
      //     title: '消息管理',
      //     navName: '通知公告',
      //     keepAlive: true,
      //   },
      // },
      // {
      //   path: '/main/fileDownload',
      //   name: 'fileDownload',
      //   meta: {
      //     title: '消息管理',
      //     navName: '文件下载',
      //     keepAlive: true,
      //   },
      // },
]