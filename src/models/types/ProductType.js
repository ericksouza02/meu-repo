import React from "react"
import PropTypes from "prop-types";

const ProductType = () => PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
})

export default ProductType;