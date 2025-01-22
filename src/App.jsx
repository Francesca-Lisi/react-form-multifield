import React from 'react'
import Form from './components/Form'
import ArticleList from './components/ArticleList'

const App = () => {
  return (
    <div className='container'>
      <h1 className='text-center m-4'>I miei Articoli</h1>
      <Form />
      <ArticleList />
    </div>
  )
}

export default App