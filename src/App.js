import React, { createContext, useReducer,Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch , Redirect,} from 'react-router-dom'
import Login from './pages/Login/index'
import Main from './pages/Main/index'
import { defaultState, reducer } from './utils/store'
export const Context = createContext(null)
function App() {
	const [state, dispatch] = useReducer(reducer, defaultState)
	return (
		<div className='App'>
			<Context.Provider value={{state, dispatch}}>
				<Suspense fallback={<h1>暂无页面</h1>}>
				<Router>
						<Switch>
						<Route exact path='/' render={() => <Redirect to='/main/home' />} />
						<Route path='/main' component={Main} />
						<Route path='/login' component={Login} />
						<Route  component={Main} />
					</Switch>
				</Router>
				</Suspense>
			</Context.Provider>
		</div>
	)
}

export default App
