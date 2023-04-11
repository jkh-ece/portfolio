import '../styles/Home.css';
import mainImage from '../images/main-image.jpg';

function Home(home) {
    console.log(home.data);
    const data = home.data;

    return (
        <div className="portfolio-main">

            <div className="row-home">
                <div className="home-image">
                    <img src={mainImage} alt='Main' />
                </div>
                <div className="home-head">
                    <h1>{data.name}</h1>
                    <hr />
                    <h2>{data.title}</h2>

                </div>
            </div>
            <div className="row-home">
                <div className="home-message">
                    {data.messages.map((message) =>
                        <p key={message.id}>{message.content}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
