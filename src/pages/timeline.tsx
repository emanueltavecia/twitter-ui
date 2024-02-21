import { Header } from '../components/header'
import { Separator } from '../components/separator'
import { Tweet } from '../components/tweet'

import './timeline.css'

const tweets = ['Meu primeiro tweet', 'Teste', 'Deu certo tweetar']

export function Timeline() {
  return (
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

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
