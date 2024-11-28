import { Header, Post, Sidebar } from './components'

import { posts } from './utils'

import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.main}>
          {posts.map((post) => (
            <Post 
              key={post.id} 
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
