import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/header'
import { Separator } from '../components/separator'
import { Tweet } from '../components/tweet'

import './timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar',
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotketSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/emanueltavecia.png"
            alt="Emanuel Tavecia"
          />
          <textarea
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
            id="tweet"
            value={newTweet}
            onKeyDown={handleHotketSubmit}
            placeholder="What's happening?"
          />
        </label>

        <button type="submit">Post</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
