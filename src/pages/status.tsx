import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/header'
import { Separator } from '../components/separator'
import { Tweet } from '../components/tweet'
import './status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha faz sentido',
    'Parabéns pelo progresso!',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotketSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, sed facilis quo iste fuga dolorum illo aut modi nam quisquam quam dicta rerum mollitia id incidunt voluptatum hic numquam perspiciatis!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/emanueltavecia.png"
            alt="Emanuel Tavecia"
          />
          <textarea
            name=""
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotketSubmit}
            onChange={(event) => setNewAnswer(event.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}
