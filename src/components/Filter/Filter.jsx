import React from "react";
// import { nanoid } from 'nanoid'
import '../Filter/Filter.css'

const Filter  = ({ filter, changeFilter }) => (

    <label>
        Find contact by name
        <input 
            type="text" 
            value={filter}
            onChange={changeFilter}
        />

    </label>
)

export default Filter;