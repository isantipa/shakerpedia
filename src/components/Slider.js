import React from "react";
import '../styles/slider.css';
import libraryImage from '../assets/img/library.jpeg';
import cocktailImage from '../assets/img/cocktail.jpeg';
import quizImage from '../assets/img/quiz.jpg';

function Slider() {
    const slidesData = [
        {
          image: libraryImage,
          title: 'Library',
          description: 'Consult our cocktails, from our index or do it simply using our search engine by name or ingredient.',
          link: '/library'
        },
        {
          image: cocktailImage,
          title: 'Favorite',
          description: "Check out our list of the world's most popular cocktails.",
          link: '/favorites'
        },
        {
          image: quizImage,
          title: 'Quiz',
          description: 'Play our BartenderQuiz, guess the name of the cocktail with the ingredients that we give.',
          link: '/quiz'
        }
      ];

    const [currentSlide, setCurrentSlide] = React.useState(0);
  
    const prevSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1));
    };
    
    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
        <div id="slider">
          <ul>
            {slidesData.map((slide, index) => (
              <li key={index} style={{ display: currentSlide === index ? 'block' : 'none' }}>
                <a href={slide.link}>
                  <img src={slide.image} alt={slide.title} />
                  <div className="text-container">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
    
          <div className="carousel-controls">
            <button id="prev-slide" onClick={prevSlide}>
              &lt;
            </button>
            <button id="next-slide" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      );
    }
  
export default Slider;

