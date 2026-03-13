import "./ProjectCard.css";

const ProjectCard = ({ title, image, tags = [], description, link }) => {
  return (
    <a
      className="project-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card-hero">
        <img src={image} alt={title} />
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>

        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
