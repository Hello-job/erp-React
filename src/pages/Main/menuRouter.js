import React, { Suspense } from 'react'
import {  Route, Switch ,Redirect } from 'react-router-dom'
import { routers } from '../../router/index'
import NUllpage from '../NullPage/index'
import Loading from '../Loading/index'
export default function menuRouter (props) {
  console.log(routers,'路由数据')
  return (
    <div className='routerview'>
      <Suspense fallback={Loading}>
        <Switch>
            {
              routers.map((item, index) => {
                return  <Route exact key={index} path={item.path} component={item.component}></Route>
              })
            }
        	<Route  component={NUllpage} />
        </Switch>
      </Suspense>
    </div>
  )
}
