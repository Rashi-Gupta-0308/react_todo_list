import React from 'react'
import Card from './card'

const list = (props) => {
  const items = props.data.map((singleData, index) => {
    return <Card handler={props.handler} item={singleData.item} key={index} id={index}/>
  })
  return (
    <>
    {items}
    </>
  )
}

export default list