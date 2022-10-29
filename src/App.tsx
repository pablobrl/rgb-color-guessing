import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'

export default function App() {
	const [correctColor, setCorrectColor] = useState('')
	const [guessColors, setGuessColors] = useState<string[]>([])
	const [stats, setStats] = useState({
		correct: 0,
		misses: 0,
	})

	const getRandomColor = () => {
		const rgbArray = []

		for (let i = 0; i < 3; i++) {
			rgbArray.push(Math.floor(Math.random() * 255))
		}

		return `(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`
	}

	const generateColors = () => {
		const newCorrectColor = getRandomColor()

		setCorrectColor(newCorrectColor)
		setGuessColors(
			[newCorrectColor, getRandomColor(), getRandomColor()].sort(
				() => Math.random() - 0.5
			)
		)
	}

	const handleButtonClick = (answer: string) => {
		if (answer === correctColor) {
			generateColors()
			setStats({
				...stats,
				correct: stats.correct + 1,
			})
		} else {
			setStats({
				...stats,
				misses: stats.misses + 1,
			})
		}
	}

	useEffect(() => {
		generateColors()
	}, [])

	return (
		<main>
			<div className="container">
				<div className="stats">
					<div className="stat">
						<span className="stat-title">Correct</span>
						<span className="stat-value">{stats.correct}</span>
					</div>
					<div className="stat">
						<span className="stat-title">Misses</span>
						<span className="stat-value">{stats.misses}</span>
					</div>
				</div>
				<div className="color-wrapper">
					<div
						className="color"
						style={{ backgroundColor: `rgb${correctColor}` }}
					></div>
				</div>
				{guessColors.map((guessColor) => (
					<Button
						key={guessColor}
						onClick={() => handleButtonClick(guessColor)}
					>
						{guessColor}
					</Button>
				))}
			</div>
		</main>
	)
}
