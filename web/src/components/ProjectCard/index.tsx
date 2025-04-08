import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "@/styles/components/project-card.scss";

interface Props {
  imageSource: StaticImageData;
  projectName: string;
  projectDescription?: string;
  tags: ReadonlyArray<string>;
  styleClass: string;
}

export default function ProjectCard({
  imageSource,
  projectName,
  projectDescription,
  tags,
  styleClass,
}: Props) {
  return (
    <div className={`project-card ${styleClass}`}>
      <div className="project-img">
        <Image src={imageSource} alt="Projeto de portfólio" />
      </div>
      <div className="project-description">
        <h4>{projectName}</h4>
        {styleClass === "card-b" ? (
          <p className="description">{projectDescription}</p>
        ) : (
          ""
        )}
        <p className="tags">
          {tags.map((tag, key) => (
            <span key={`${key}`} className="tag">
              {tag}
            </span>
          ))}
        </p>
        <Link href="/projects?project-id=1">
          <button type="button" className="card-cta">
            Saiba mais
          </button>
        </Link>
      </div>
    </div>
  );
}
