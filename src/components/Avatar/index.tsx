import { ImgHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({ hasBorder = true, ...rest }) => (
  <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...rest} />
)