import React from "react";
import PropTypes from "prop-types";

const cardContent = ({ label, content, contentClass }) => {
  return (
    <div className="row" data-testid="app-content">
      <div className="col-4 pr-0">{label}</div>
      <div className={`col-8 pr-0 truncate ${contentClass}`}>
        {content}
      </div>
    </div>
  );
};

cardContent.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  contentClass: PropTypes.string
}


export default cardContent;
