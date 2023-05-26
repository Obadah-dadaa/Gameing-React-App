import { SecondryButton, SecondryButtons } from '../..'
import './GamingLibraryCards.css'

function GamingLibraryCards(props) {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.image}/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date Added</h4><span>{props.date_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.download}</span></li>
            <SecondryButtons>Download</SecondryButtons>
        </ul>
    </div>
  )
}

export default GamingLibraryCards