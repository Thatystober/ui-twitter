import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../Header"
import { Separator } from "../Separator"
import { Tweet } from "../Tweet"

import './Status.css';
import { PaperPlaneRight } from "phosphor-react";
export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "Concordo..",
    "Olha, faz sentido",
    "Parabéns pelo progresso"
  ])
  function createNewAnswer(event: FormEvent){
    event.preventDefault();
    
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return(
    <main className='status'>
      <Header title='Tweet'/>

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate ad nihil tenetur, voluptates recusandae sit incidunt quas, sapiente enim explicabo quo assumenda quisquam hic. Corrupti nostrum excepturi voluptates maiores."/>
      
      <Separator/>
      <form  onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/Thatystober.png" alt="Thaty Stober" />
          <textarea 
            id='tweet' 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}