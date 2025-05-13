import {memo, useState} from 'react';

const hotels = [
  {id: 1, name: 'Grand Palace Hotel'},
  {id: 2, name: 'Ocean View Resort'},
  {id: 3, name: 'Mountain Peak Inn'},
  {id: 4, name: 'City Center Suites'},
];
// TODO: Lazy-loading and content loader
function Feedback() {
  const [hotelId, setHotelId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted feedback:', {hotelId, feedback, rating});
    // handle submission logic
  };
  return (
    <div className="feedback">
      <div className="feedback-form-container">
        <h2 className="form-title">Hotel Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label className="form-label">Hotel Name</label>
            <select
              className="form-select"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              required
            >
              <option value="">Select a hotel</option>
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Feedback</label>
            <textarea
              className="form-textarea"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience..."
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    hoverRating >= star || rating >= star ? 'filled' : ''
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="form-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(Feedback);
