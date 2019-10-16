import React from 'react';
import PropTypes from 'prop-types';
import TextHeader from '../../../common/AppTextHeader';
import Text from '../../../common/AppText';
import './styles.scss'

const Cards = ({ imageUrl, cardExtraClass, cardTitle, cardContent, linkText, onClick }) => {

  return (
    <div className={`card ${cardExtraClass}`} data-testid="app-card">
        <img className="card-img-top" src={imageUrl} alt="Card cap" />
        <div className="card-body">
          <TextHeader appTextHeaderExtraCSS="card-title" text={cardTitle} />
          <Text text={cardContent} appTextExtraCSS="card-text" />
          <a onClick={onClick} href="/" className="btn btn-primary">{linkText}</a>
        </div>
      </div>
   );
}

Cards.defaultProps = {
  imageUrl: 'https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png',
  cardExtraClass: '', 
  linkText: 'View More',
  cardTitle: 'Card Title', 
  cardContent: 'Some quick example text to build on the card title and make up the bulk of the cards content.', 
  onClick: () => {}
};

Cards.propTypes = {
  imageUrl: PropTypes.string,
  cardExtraClass: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardContent: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired
}
 
export default Cards;