import { FormEvent, useState } from 'react'
import { formatDate, formatDistanceToNow } from '../../libs/date'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import { user } from '../../utils'

import styles from './styles.module.css'
import { IComment, IPost } from '../../types'

interface Form {
  commentText: HTMLTextAreaElement
}

interface PostProps {
  post: IPost
}

export const Post: React.FC<PostProps> = ({ 
  post
}) => {
  const [comments, setComments] = useState(post.comments)
  const [commentText, setCommentText] = useState("")

  const formattedPublishedDate = formatDistanceToNow(post.publishedAt)
  const formattedPublishedDateTitle = formatDate(post.publishedAt, { pattern: "dd 'de' MMMM 'às' hh:mm'h'" })

  const isPublishedButtonDisabled = commentText === ''

  const deleteComment = (commentId: number) => {
    setComments(prevComments => prevComments.filter(({ id }) => id !== commentId))
  }

  const handleCreateNewComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { commentText } = (e.target as unknown) as Form

    if (!commentText.value) {
      window.alert("Esse campo é obrigatório!")
      return
    }

    setCommentText("")

    const comment: IComment = {
      id: Math.random() * 1000,
      content: [{ type: 'paragraph', value: commentText.value }],
      author: user,
      likes: 0,
      publishedAt: new Date()
    }

    setComments(prevComments => [...prevComments, comment])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time 
          title={formattedPublishedDateTitle} 
          dateTime={post.publishedAt.toISOString()}
        >
          Publicado {formattedPublishedDate}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(({ type, value }) => (
          <p key={value}>
            {type === 'link' ? <a href="#">{value}</a> : value}
          </p>
        ))}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="commentText"
          placeholder="Deixe um comentário"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <footer>
          <button type="submit" tabIndex={0} disabled={isPublishedButtonDisabled}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment 
            key={comment.id} 
            comment={comment}
            onDelete={() => deleteComment(comment.id)}
          />
        ))}
      </div>
    </article>
  )
}