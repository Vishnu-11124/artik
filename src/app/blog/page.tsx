import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <section className="mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <div className="min-w-0">
            <CardList />
          </div>

          <aside className="min-w-0">
            <Menu />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
