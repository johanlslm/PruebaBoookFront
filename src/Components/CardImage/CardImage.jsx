import React from "react";
import "./CardImage.scss";

const CardImage = () => {
    const cards = [
        {
            img: '/images/card01.jpg' ,
            key: 'card_01',
            title: 'Put something here',
            subtitle: 'Maybe here as well I think',
            body: 'Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus, Praesent sed semper amet bibendum tristique fringilla',
        },
        {
            img: '/images/card02.jpg',
            key: 'card_03',
            title: 'An interesting title',
            subtitle: 'This is also an interesting subtitle',
            body: 'Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus, Praesent sed semper amet bibendum tristique fringilla',
        },
        {
            img: '/images/card03.jpg',
            key: 'card_03',
            title: 'Oh, and Finally ...',
            subtitle: "Here's another intriguing subtitle",
            body: 'Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus, Praesent sed semper amet bibendum tristique fringilla',
        }
    ]
    return (
        

        <section className="section_cards">
            {cards.map((card) =>(
                <div className="card" key={card.key} >
                    <div className="card_image">
                        <img alt={card.title} src={card.img} />
                        <h3>{card.title}</h3>
                    </div>
                    <div className="card_text"> 
                        <h4>{card.subtitle}</h4>
                        <p>{card.body}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CardImage;

    
