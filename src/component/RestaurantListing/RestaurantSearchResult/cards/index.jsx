import React from "react";
import PropTypes from "prop-types";
import TextHeader from "../../../common/AppTextHeader";
import RowContent from "./content";
import "./styles.scss";

const Cards = ({
  cuisines,
  user_rating,
  cost_for_two,
  currency,
  location,
  imageUrl,
  cardExtraClass,
  cardTitle,
  linkText,
  timings,
  onClick
}) => {
  const ratingContent = user_rating && (
    <>
      <div className="rating" style={{ background: `#${user_rating.rating_color}` }}>
        {user_rating.aggregate_rating}
      </div>
      <div className="pl-2" style={{ color: `#${user_rating.rating_color}` }}>
        {user_rating.rating_text}
      </div>
    </>
  );

  return (
    <div className={`card ${cardExtraClass}`} data-testid="app-card">
      <img className="card-img-top" src={imageUrl} alt="Card cap" />
      <div className="card-body">
        <TextHeader
          appTextHeaderExtraCSS="card-title truncate"
          text={cardTitle}
        />
        <RowContent label="Cuisines" content={cuisines} />
        <RowContent label="Locality" content={location.locality} />
        <RowContent label="Hours" content={timings} />
        <RowContent
          label="Ratings"
          contentClass="inline-display"
          content={ratingContent}
        />
        <RowContent label="Cost" content={`${currency}${cost_for_two}`} />

        <br />

        <a onClick={onClick} href="/" className="btn prim">
          {linkText}
        </a>
      </div>
    </div>
  );
};

Cards.defaultProps = {
  imageUrl:
    "https://res.cloudinary.com/nesterpod-com/image/upload/v1570649796/1_Drinks_gtdgfr.png",
  cost_for_two: 0,
  currency: '$',
  cardExtraClass: "",
  linkText: "View More",
  cardTitle: "Card Title",
  onClick: () => {}
};

Cards.propTypes = {
  cuisines: PropTypes.string,
  user_rating: PropTypes.object,
  cost_for_two: PropTypes.number,
  currency: PropTypes.string,
  location: PropTypes.object,
  cardExtraClass: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  timings: PropTypes.string,
};

export default Cards;
