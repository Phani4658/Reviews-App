import './index.css'
import {Component} from 'react'

class ReviewCarousel extends Component {
  state = {arrayIndex: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {arrayIndex} = this.state
    if (reviewsList.length - 1 === arrayIndex) {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex}))
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {arrayIndex} = this.state
    if (arrayIndex === 0) {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex}))
    } else {
      this.setState(prevState => ({arrayIndex: prevState.arrayIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {arrayIndex} = this.state
    const {companyName, description, imgUrl, username} = reviewsList[arrayIndex]
    console.log(reviewsList)
    return (
      <div className="bg-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>

          <div className="review-card" key={arrayIndex}>
            <img src={imgUrl} alt={username} className="user-image" />
            <p className="username">{username}</p>
            <div className="arrows-container">
              <button onClick={this.onClickLeftArrow} type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="arrow left-arrow"
                />
              </button>
              <button onClick={this.onClickRightArrow} type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="arrow right-arrow"
                />
              </button>
            </div>
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
