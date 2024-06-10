import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img1 from './components/sub4.jpg';
import img2 from './components/sub1.jpg';
import img3 from './components/sub8.jpg';
import img4 from './components/sub3.jpg';
import img5 from './components/sub2.jpg';

function Home() {
  const [discounts, setDiscounts] = useState([]);
  const [currentDiscount, setCurrentDiscount] = useState(0);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await axios.get('/api/discount/viewdiscounts');
        setDiscounts(response.data);
      } catch (error) {
        console.error('Error fetching discounts:', error);
      }
    };

    fetchDiscounts();
  }, []);

  const handleNextDiscount = () => {
    setCurrentDiscount((prevIndex) => (prevIndex + 1) % discounts.length);
  };

  return (
    <div className="home">
      <header className="hero">
        <div className="heading">
          <div>
            <h1>Welcome to Subway</h1>
            <p>Fresh, healthy, and delicious sandwiches made just for you!</p>
          </div>
          <section className="about">
            <p>At Subway, we are committed to providing the freshest and healthiest sandwiches to our customers. Our ingredients are sourced from the best suppliers, and we offer a wide range of options to suit every taste.</p>
          </section>
        </div>
        <img src={img1} alt="sandwich" />
      </header>

      <div className="discount">
       <h1>We're offering exclusive discounts!</h1>
        <div className="currDisc">
          {discounts.length > 0 ? (
            <div className="disc">
              <div className='disc-heading'> <p><strong>{discounts[currentDiscount].name}</strong></p></div>
              <p><strong>Discount:</strong> {discounts[currentDiscount].discount_percentage}%</p>
              <p><strong>Valid from:</strong> {new Date(discounts[currentDiscount].valid_from).toLocaleDateString()}</p>
              <p><strong>Valid until:</strong> {new Date(discounts[currentDiscount].valid_until).toLocaleDateString()}</p>
              <button onClick={handleNextDiscount} className='order-now-button'>Next Discount</button>
            </div>
          ) : (
            <p>No discounts available at the moment.</p>
          )}
          <div className="discImg">
            <img src={img5} alt="discount" />
          </div>
        </div>
      </div>

      <section className="gallery">
        <h2>Our Delicious Sandwiches</h2>
        <div className="images">
          <img src={img2} alt="Sandwich 1" />
          <img src={img3} alt="Sandwich 2" />
          <img src={img4} alt="Sandwich 3" />
        </div>
      </section>

      <div className="order-now-container">
        <Link to="/menu" className="order-now-button">Order Now</Link>
      </div>
        <footer className="footer">
        <p>&copy; 2024 Subway. All rights reserved.</p>
      </footer>
  
    </div>
  );
}

export default Home;
