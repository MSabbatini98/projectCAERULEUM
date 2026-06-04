export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="prjct_title">{children}</h1>;
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return <h2 className="prjct_subtitle">{children}</h2>;
}

export function Text({ children }: { children: React.ReactNode }) {
  return <p className="prjct_text">{children}</p>;
}

export function Image({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  return <img className="prjct_image" src={src} alt={alt || ""} />;
}

export function Grid({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prjct_grid">{children}</div>;
}

export function List({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="prjct_list">{children}</ul>;
}

export function Highlight({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prjct_highlight">{children}</div>;
}

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="prjct_link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}