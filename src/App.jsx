import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Fellipe Calixto"
        content="Post 1"
      />
      <Post
        author="Nicolle Calixto"
        content="Post 2"
      />
    </div>
  )
}