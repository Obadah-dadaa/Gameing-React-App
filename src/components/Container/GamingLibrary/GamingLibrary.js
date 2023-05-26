import'./GamingLibrary.css'
import GamingLibraryCards from '../GamingLibraryCards/GamingLibraryCards'
import SectionHeader from '../SectionHeader/SectionHeader' 
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import GamingLibraryData from "../../../data/GamingLibraryData.js"

function GamingLibrary() {

    const card=GamingLibraryData.map(card => {
        return <GamingLibraryCards key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.downloaded} />
    })
  return (
    <>
    <SectionWrapper>
          <SectionHeader> <span className='underline'>Your Gaming</span> <span className='pink'>Library</span></SectionHeader>
        <div className="gaming-library-cards">
                {card}
        </div>
        </SectionWrapper>
    </>
  )
}

export default GamingLibrary