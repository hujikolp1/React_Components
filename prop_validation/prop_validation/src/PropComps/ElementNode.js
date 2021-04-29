import React from "react";
import PropTypes from "prop-types";

export default function ElementNode({ myHeader, myContent }) {
  return (
    <section>
      <header>{myHeader}</header>
      <main>{myContent}</main>
    </section>
  );
}

ElementNode.propTypes = {
  myHeader: PropTypes.element.isRequired,
  myContent: PropTypes.node.isRequired
};