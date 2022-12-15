import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import shortid from "shortid";

function Stars({count}) {
    if (count < 1 || count > 5) {
        return null;
    }

    const counts = Array.from({length: count}, () => "");
    const index = counts.map(() => ({id: shortid.generate()}))
    const list = index.map((o)=> <li key={o.id}>{o.value}<Star /></li>);

    return (
            <ul className="card-body-stars u-clearfix" style={{listStyleType: "none", display: "flex"}}>
                {list}
            </ul>
    )

}

Stars.dafaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};

export default Stars;