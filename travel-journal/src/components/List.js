import React from 'react'
import Item from '../components/Item'
import data from '../data'

export default function List() {
    const items = data.map(item => {
        return <Item 
            key={item.id}
            {...item}
        />
    })
    return (
      <section className='list'>
        {items}
      </section>
    )
}
