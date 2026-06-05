interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  copy?: string;
}

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
