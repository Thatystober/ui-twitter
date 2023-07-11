import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css';
import { Link } from 'react-router-dom'

interface TweetProps{
  content: string
}
export function Tweet({content}: TweetProps){
  return (
    <Link to='/status' className='tweet'>
      <img src="https://github.com/Thatystober.png" alt="Thaty Stober" />
      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Thaty Stober</strong>
          <span>@thatystober</span>
        </div>
        <p>{content}</p>

        <div className='tweet-content-footer'>
          <button type='button'>
            <ChatCircle/>
            20
          </button>
          <button type='button'>
            <ArrowsClockwise/>
            20
          </button>
          <button type='button'>
            <Heart/>
            20
          </button>
        </div>
      </div>
    </Link>
  )
}