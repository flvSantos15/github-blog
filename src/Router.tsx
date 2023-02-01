import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Blog } from './Blog'
import { Post } from './Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:issue" element={<Post />} />
      </Route>
    </Routes>
  )
}
