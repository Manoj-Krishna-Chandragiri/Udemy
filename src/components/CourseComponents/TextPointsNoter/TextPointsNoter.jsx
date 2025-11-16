import React from "react";

import css from "./TextPointsNoter.module.css";

const TextPointsNoter = (props) => {
  const { ttl = "", points = [], prefix = "✓" } = props.data;
  
  const renderPoint = (point, id) => {
    // Support both string format (legacy) and object format with checked property
    const isObject = typeof point === 'object' && point !== null;
    const text = isObject ? point.text : point;
    const checked = isObject ? point.checked : false;
    const displayPrefix = checked ? "✓" : prefix;
    
    return (
      <li className={css.li} data-content={displayPrefix} key={id}>
        {text}
      </li>
    );
  };

  return (
    <div className={css.box}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        <ul className={css.ul}>
          {points?.map((point, id) => renderPoint(point, id))}
        </ul>
      </div>
    </div>
  );
};

export default TextPointsNoter;
