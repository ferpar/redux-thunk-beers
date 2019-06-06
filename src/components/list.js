import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBeers } from '../actions/actions.js'

const ListP = ({beers, getBeers}) => {

console.log(beers)

useEffect(() => {

})

return(
  <div>
    <button onClick={()=>getBeers()}> get beers!</button>
   {(beers.length !== 0) ?
    beers.map((beer, idx)=>(
      <h1 key={idx} >{beer.name}</h1>
    ))
   :
     <div>loading...</div>
   }
  </div>
)
}

const mapStateToProps = state => {
  return {
    beers: state.beers
  }
}

const List = connect(
  mapStateToProps,
  {getBeers}
) (ListP)

export default List
