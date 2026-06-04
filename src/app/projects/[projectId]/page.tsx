import "../../styles/projects.scss";

type Project = {
    title: string;
    subtitle?: string;
    sections?: {
      type: "text" | "image" | "resources";
      content?: string;
      src?: string;
      alt?: string;
      items?: { label: string; url: string }[];
    }[];
  };

  const projects: Record<string, Project> = {
    kintsugi: {
      title: "Kintsugi",
      subtitle: "Repairing with gold",
      sections: [
        { type: "image", src: "/images/kintsugi.jpg", alt: "Kintsugi bowl" },
        { type: "text", content: "Kintsugi is the Japanese art of repairing broken pottery with gold, that can be applied with different techniques." },
        { type: "text", content: "Instead of hiding damage, it highlights fractures as part of the object's history." },
        {
          type: "resources",
          items: [
            { label: "My Kintsugi on Instagram", url: "https://www.instagram.com/p/DPbw8XbjWTS/?img_index=1" },
            { label: "Historical context", url: "https://example.com/history" },
          ],
        },
      ],
    },
  
    pasta: {
      title: "Pasta Project",
      subtitle: "A study of simplicity and repetition",
      sections: [
        {
          type: "image",
          src: "/images/pasta.jpg",
          alt: "Assorted pasta shapes",
        },
        {
          type: "text",
          content:
            "Pasta is an exploration of minimal ingredients producing maximal variation through form, texture, and cooking time.",
        },
        {
          type: "text",
          content:
            "Each shape encodes a specific relationship between surface area and sauce retention.",
        },
        {
          type: "resources",
          items: [
            { label: "Pasta shape taxonomy", url: "https://example.com/pasta-shapes" },
            { label: "Cooking principles", url: "https://example.com/cooking" },
            { label: "Texture guide", url: "https://example.com/texture" },
          ],
        },
      ],
    },
  
    test: {
      title: "TEST",
      subtitle: "Just a test page",
      sections: [
        {
          type: "text",
          content: "This is the TEST project page used to validate rendering logic.",
        },
        {
          type: "text",
          content:
            "It ensures that dynamic routing, conditional rendering, and section mapping behave correctly.",
        },
      ],
    },
  };
  
  export default async function ProjectDetail({ params }: any) {
    
    const resolvedParams = await params;
    const projectId = resolvedParams.projectId;
    const project = projects[projectId];
  
    if (!project) {
      return <div className="main_content">Project not found, try again</div>;
    }
  
    return (
        <div className="project main_content">
          <div className="project_container ">
            <h1 className="project_title">{project.title}</h1>
      
            {project.subtitle && (
              <h2 className="project_subtitle">{project.subtitle}</h2>
            )}
      
            {project.sections?.map((section, i) => {
              switch (section.type) {
                case "text":
                  return (
                    <p key={i} className="project_text">
                      {section.content}
                    </p>
                  );
      
                case "image":
                  return (
                    <img
                      key={i}
                      src={section.src}
                      alt={section.alt || ""}
                      className="project_image"
                    />
                  );
      
                case "resources":
                  return (
                    <ul key={i} className="project_resources">
                      {section.items?.map((item, j) => (
                        <li key={j} className="project_resource-item">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project__link"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  );
      
                default:
                  return null;
              }
            })}
          </div>
        </div>
      );
  }