import React, { useRef, useState } from "react";

const MySelect = React.forwardRef(({options, defaultValue, value, onChange}, ref) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
          <option disabled={true} value="">{defaultValue}</option>
          {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
});

export default MySelect;