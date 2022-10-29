import type { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
	children: ReactNode
	onClick?(event: MouseEvent<HTMLButtonElement>): void
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button type="button" className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
