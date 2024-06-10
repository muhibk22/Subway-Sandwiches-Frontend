import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);

  const [reviewCustomerName, setReviewCustomerName] = useState('');
  const [reviewDate, setReviewDate] = useState('');
  const [reviewRating, setReviewRating] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');

  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackPhone, setFeedbackPhone] = useState('');
  const [feedbackDate, setFeedbackDate] = useState('');
  const [feedbackComment, setFeedbackComment] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/review/viewreview');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleNextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('api/review/createreview', {
        customername: reviewCustomerName,
        reviewDate,
        rating: reviewRating,
        comment: reviewComment,
      });
      setReviewMessage('Thank you for your review!');
      setReviewCustomerName('');
      setReviewDate('');
      setReviewRating('');
      setReviewComment('');
    } catch (error) {
      setReviewMessage('Error submitting review');
      console.error('Error submitting review:', error);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback/createfeedback', {
        name: feedbackName,
        email: feedbackEmail,
        phone: feedbackPhone,
        feedbackDate,
        comment: feedbackComment,
      });
      setFeedbackMessage('Thank you for your feedback!');
      setFeedbackName('');
      setFeedbackEmail('');
      setFeedbackPhone('');
      setFeedbackDate('');
      setFeedbackComment('');
    } catch (error) {
      setFeedbackMessage('Error submitting feedback');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="reviews-container">
      <div className="review-box">
        {reviews.length > 0 ? (
          <div className='center'>
            <h2>Reviews from our valuable customers</h2>
            <p>{reviews[currentReview].comment}</p>
            <p>{reviews[currentReview].rating}/5</p>
            <p><strong>- {reviews[currentReview].customername}</strong></p>
            <button onClick={handleNextReview}>Next Review</button>
          </div>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
      <div className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={reviewCustomerName}
            onChange={(e) => setReviewCustomerName(e.target.value)}
            required
          />
          <input
            type="date"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={reviewRating}
            onChange={(e) => setReviewRating(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {reviewMessage && <p>{reviewMessage}</p>}
      </div>
      <div className="feedback-form">
        <h2>Leave Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={feedbackName}
            onChange={(e) => setFeedbackName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={feedbackEmail}
            onChange={(e) => setFeedbackEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={feedbackPhone}
            onChange={(e) => setFeedbackPhone(e.target.value)}
            required
          />
          <input
            type="date"
            value={feedbackDate}
            onChange={(e) => setFeedbackDate(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={feedbackComment}
            onChange={(e) => setFeedbackComment(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>
    </div>
  );
}

export default Reviews;
