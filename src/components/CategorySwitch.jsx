import './CategorySwitch.css'

export const CategorySwitch = ({ category, onSwitch }) => (
    <div className="category-switch">
        <button
            className={`category-btn ${category === 'game' ? 'active' : ''}`}
            onClick={() => onSwitch('game')}
        >
            Game Development
        </button>
        <button
            className={`category-btn ${category === 'frontend' ? 'active' : ''}`}
            onClick={() => onSwitch('frontend')}
        >
            Front-End Development
        </button>
    </div>
)
