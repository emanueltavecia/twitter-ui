import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Header } from './components/header'
import { Separator } from './components/separator'
import { Sidebar } from './components/sidebar'
import { Tweet } from './components/tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/emanueltavecia.png"
                alt="Emanuel Tavecia"
              />
              <textarea name="" id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Post</button>
          </form>

          <Separator />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
)
