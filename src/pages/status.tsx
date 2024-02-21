import { Header } from '../components/header'
import { Separator } from '../components/separator'
import { Tweet } from '../components/tweet'
import './status.css'

const answers = ['Concordo...', 'Olha faz sentido', 'Parabéns pelo progresso!']

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, sed facilis quo iste fuga dolorum illo aut modi nam quisquam quam dicta rerum mollitia id incidunt voluptatum hic numquam perspiciatis!" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/emanueltavecia.png"
            alt="Emanuel Tavecia"
          />
          <textarea name="" id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}
