import React from "react";
import PropTypes from "prop-types";

export default function AnyProps({ label, value, max }) {
  return (
    <section>
      <h5>{label}</h5>
      <progress {...{ max, value }} />
    </section>
  );
}

AnyProps.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  max: PropTypes.any
};