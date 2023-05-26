import './Buttons.css'

function PrimaryButtons(props) {
  return (
    <div className='button primary-btn'>
        <a href='/#'>{props.children} </a>
        </div>
  )
}

function SecondryButtons(props) {
    return (
        <div className='button secondry-btn'>
            <a href='/#'>{props.children} </a>
        </div>
        )
  }

export default PrimaryButtons
export {SecondryButtons}