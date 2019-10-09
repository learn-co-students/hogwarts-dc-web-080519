import React from 'react'

const FilterSorts = props => {

  return (
    <div className="formBar">
    <select onChange={props.onFilterChange}>
      <option value="all">All</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
    <button onClick={props.filterGreased}>Filter for Greased Hoggos</button>
    </div>
  )
}

export default FilterSorts
