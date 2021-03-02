import React from 'react'
import store from './store/store'
import {Provider} from 'react-redux'
import Header from './components/header/header'
import './index.scss'
import TodoList from './components/todo-list/todo-list'

const App= () =>
(
	<Provider store={store}>
		<div className="wrap">
			<Header/>
			<TodoList/>
    	</div>
	</Provider>
)

export default App