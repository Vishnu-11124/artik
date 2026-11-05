import Link from 'next/link'
import React from 'react'

const CategoryList = () => {

  const categories = [
    {
      id: 1,
      cname: "name",
      image: 'bj',
      bgColor: 'bv'
    }
  ]
  return (
    <div>
      <h1>Popular Category</h1>
      <div>
        <div>
          <Link href='/name'>
            <img src="hhf" alt="" />
            <p>Name</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
