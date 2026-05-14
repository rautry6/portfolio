import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import { ProjectDataShape } from '../data/projectDataShape'

export const ProjectGrid = ({ projects }) => (
    <Row style={{ justifyContent: 'center' }}>
        {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
        ))}
    </Row>
)

ProjectGrid.propTypes = {
    projects: PropTypes.arrayOf(ProjectDataShape).isRequired,
}
