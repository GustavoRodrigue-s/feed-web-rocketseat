import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import { formatDate, formatDistanceToNow } from '../../libs/date'

import styles from './styles.module.css'
import { IComment } from '../../types'

interface CommentProps {
  comment: IComment
  onDelete: () => void;
}

export const Comment: React.FC<CommentProps> = ({ comment, onDelete }) => {
  const [likesCount, setLikesCount] = useState<number>(comment.likes)

  const formattedPublishedDate = formatDistanceToNow(comment.publishedAt)
  const formattedPublishedDateTitle = formatDate(comment.publishedAt, { pattern: "dd 'de' MMMM 'às' hh:mm'h'" })

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={comment.author.avatarUrl} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author.name}</strong>
              <time 
                title={formattedPublishedDateTitle} 
                dateTime={comment.publishedAt.toISOString()}
              >
                {formattedPublishedDate}
              </time>
            </div>

            <button title="Deletar comentário" tabIndex={0} onClick={onDelete}>
              <Trash size={24} />
            </button>
          </header>

          {comment.content.map(({ type, value }) => (
            <p key={value}>
              {type === 'link' ? <a href="#">{value}</a> : value}
            </p>
          ))}
        </div>

        <footer>
          <button tabIndex={0} onClick={() => setLikesCount(prev => prev + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}