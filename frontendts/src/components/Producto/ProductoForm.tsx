
import React, { useState, useEffect } from "react";
import { AutoSuggest } from "react-autosuggestions";
import './ProductoForm.css'

const stateOptions = [
    { name: "AL", value: "AL", abbr: "Alabama" },
    { name: "AK", value: "AK", abbr: "Alaska" },
    { name: "AZ", value: "AZ", abbr: "Arizona" },
    { name: "AR", value: "AR", abbr: "Arkansas" },
    { name: "CA", value: "CA", abbr: "California" },
    { name: "CO", value: "CO", abbr: "Colorado" },
    { name: "CT", value: "CT", abbr: "Connecticut" },
    { name: "DE", value: "DE", abbr: "Delaware" },
    { name: "DC", value: "DC", abbr: "District of Columbia" },
    { name: "FL", value: "FL", abbr: "Florida" },
    { name: "GA", value: "GA", abbr: "Georgia" },
    { name: "HI", value: "HI", abbr: "Hawaii" },
    { name: "ID", value: "ID", abbr: "Idaho" },
    { name: "IL", value: "IL", abbr: "Illinois" },
    { name: "IN", value: "IN", abbr: "Indiana" },
    { name: "IA", value: "IA", abbr: "Iowa" },
    { name: "KS", value: "KS", abbr: "Kansas" },
    { name: "KY", value: "KY", abbr: "Kentucky" },
    { name: "LA", value: "LA", abbr: "Louisiana" },
    { name: "ME", value: "ME", abbr: "Maine" },
    { name: "MD", value: "MD", abbr: "Maryland" },
    { name: "MA", value: "MA", abbr: "Massachusetts" },
    { name: "MI", value: "MI", abbr: "Michigan" },
    { name: "MN", value: "MN", abbr: "Minnesota" },
    { name: "MS", value: "MS", abbr: "Mississippi" },
    { name: "MO", value: "MO", abbr: "Missouri" },
    { name: "MT", value: "MT", abbr: "Montana" },
    { name: "NE", value: "NE", abbr: "Nebraska" },
    { name: "NV", value: "NV", abbr: "Nevada" },
    { name: "NH", value: "NH", abbr: "New Hampshire" },
    { name: "NJ", value: "NJ", abbr: "New Jersey" },
    { name: "NM", value: "NM", abbr: "New Mexico" },
    { name: "NY", value: "NY", abbr: "New York" },
    { name: "NC", value: "NC", abbr: "North Carolina" },
    { name: "ND", value: "ND", abbr: "North Dakota" },
    { name: "OH", value: "OH", abbr: "Ohio" },
    { name: "OK", value: "OK", abbr: "Oklahoma" },
    { name: "OR", value: "OR", abbr: "Oregon" },
    { name: "PA", value: "PA", abbr: "Pennsylvania" },
    { name: "RI", value: "RI", abbr: "Rhode Island" },
    { name: "SC", value: "SC", abbr: "South Carolina" },
    { name: "SD", value: "SD", abbr: "South Dakota" },
    { name: "TN", value: "TN", abbr: "Tennessee" },
    { name: "TX", value: "TX", abbr: "Texas" },
    { name: "UT", value: "UT", abbr: "Utah" },
    { name: "VT", value: "VT", abbr: "Vermont" },
    { name: "VA", value: "VA", abbr: "Virginia" },
    { name: "WA", value: "WA", abbr: "Washington" },
    { name: "WV", value: "WV", abbr: "West Virginia" },
    { name: "WI", value: "WI", abbr: "Wisconsin" },
    { name: "WY", value: "WY", abbr: "Wyoming" },
];


function ProductoForm() {

    const [state, setState] = React.useState();
    return (
        <div>
            <AutoSuggest

                options={stateOptions}
                handleChange={setState}
                value={state}
                name="State"
                
            />
        </div>
    )
}


export default ProductoForm;