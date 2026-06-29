import React from 'react'
import './ReviewsComponent.css'
import {assets, reviews} from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <div className="reviews">
        {/*-------------------------*/}
        <div className="reviews-header">
            <div className="reviews-header-left">
                <h3>Reviews</h3>
                <p>What people says about Globe Air</p>
            </div>
            <div className="reviews-header-right">
                <button>See All</button>
            </div>
        </div>
        {/*-------------------------*/}
        <div className="reviews-class">
            {
                reviews.map(review=>(
                    <div key={review._id} className="review">
                        <div className="review-top">
                            <p>
                                <img src={assets.openQuote} alt="image" />
                                <span>{review.title}</span>
                                <img src={assets.closingQuote} alt="image" />
                            </p>
                        </div>
                        <div className="review-mid"> 
                            <p>{review.description}</p>
                            <h6>View more</h6>
                        </div>
                        <div className="review-rating">
                            <img src={assets.star} alt="star" />
                            <img src={assets.star} alt="star" />
                            <img src={assets.star} alt="star" />
                            <img src={assets.star} alt="star" />
                            <img src={assets.star} alt="star" />
                        </div>
                        <div className="review-user">
                            <h4>{review.user}</h4>
                            <p>{review.org}</p>
                        </div>
                        <div className="review-platform">
                            <img src={assets.google} alt="google" />
                            <p>Google</p>
                        </div>
                        <div className="review-image">
                            <img src={review.image} alt="image" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ReviewsComponent