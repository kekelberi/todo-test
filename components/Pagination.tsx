import { NextPage } from 'next'
import React from 'react'

const Pagination: NextPage<{
  postsPerPage: number
  totalPosts: number
  paginate: (number: number) => number
}> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul>
        {pageNumbers?.map((number: number) => (
          <a href='#!' key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
