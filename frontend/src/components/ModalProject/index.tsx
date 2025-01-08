import Link from "next/link";

interface Props {
  projectTitle: string;
  projectDescription: string;
  projectGithub: string;
  projectLink: string;
}

export default function ModalProject({
  projectTitle,
  projectDescription,
  projectGithub,
  projectLink,
}: Props) {
  return (
    <div id="modal-project">
      <h3>{projectTitle}</h3>
      <p>{projectDescription}</p>
      <div id="modal-actions">
        <Link href={projectGithub} target="_blank" rel="external">
          <button type="button">Ver repositório</button>
        </Link>
        <Link href={projectLink} target="_blank" rel="external">
          <button type="button">Acessar projeto</button>
        </Link>
      </div>
    </div>
  );
}
