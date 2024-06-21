import './Home.scss'
import CardLuggage from '../../components/CardLuggageContent/CardLuggageContent'

const CardLuggageContents = [
    {
        image: 'images/lug1.jpg',
        headerText: 'Elegance Black',
        priceText: '4.000,00 zł'

    },
    {
        image: 'images/lug2.jpg',
        headerText: 'Silver Voyager',
        priceText: '3.900,00 zł'

    },
    {
        image: 'images/lug3.jpg',
        headerText: 'Golden Stripe',
        priceText: '3.700,00 zł'

    },
    {
        image: 'images/lug4.jpg',
        headerText: 'Prestige Onyx',
        priceText: '4.200,00 zł'

    },
    {
        image: 'images/lug5.jpg',
        headerText: 'Royal Gold',
        priceText: '3.600,00 zł'

    },
    {
        image: 'images/lug6.jpg',
        headerText: 'Classic Bronze',
        priceText: '4.100,00 zł'

    },
    {
        image: 'images/lug7.jpg',
        headerText: 'Titanium Case',
        priceText: '3.400,00 zł'

    },
    {
        image: 'images/lug8.jpg',
        headerText: 'Midnight Traveler',
        priceText: '3.800,00 zł'

    },
  ]

const Home = () => {
    return (
        <div className="home--container">
            <div className="home--banner-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </div>
            <div className="home--products-container">
                <img src="images/1585002.svg" alt="svg" />
                <h2>Odkryj luksus w podróży</h2>
            <div className="home--products-list">
            {CardLuggageContents.map((card, index) => (
    <CardLuggage
      key={index}
      image={card.image}
      headerText={card.headerText}
      priceText={card.priceText}
    />
  ))}
            </div>
        </div>
        </div>
    )
}

export default Home;