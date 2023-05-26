
import "./MostPopular.css"
import {Card,SectionHeader,SectionWrapper} from "../../../components/index"
import MostPopularData from "../../../data/MostPopularData.js"

function MostPopular() {


  const card=MostPopularData.map(card => {
      return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })

  return (
    <>
    <SectionWrapper>
          <SectionHeader><span className="underline">Your Most popular</span> <span className="pink">Right Now</span></SectionHeader>
        <div className="most-popular-items">
              {card}
        </div>
        </SectionWrapper>
        </>
  )
}

export default MostPopular