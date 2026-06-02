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
        subtitle: "Repairing with intention",
        sections: [
            { type: "image", src: "/images/kintsugi.jpg", alt: "Kintsugi" },
            { type: "text", content: "This is the upper section..." },
            { type: "text", content: "More detailed explanation..." },
            {
            type: "resources",
            items: [{ label: "Guide", url: "#" }],
            },
        ],
    },

    pasta: {
        title: "Pasta Project",
        sections: [
            { type: "image", src: "/images/pasta.jpg" },
        ],
    },
    test: {
        title: "TEST",
        subtitle: "Just a test page",
        sections: [
          { type: "text", content: "This is the TEST project page." }
        ],
      },
};

export default async function ProjectDetail({ params }: any) {
    const resolvedParams = await params;
  
    const projectId = resolvedParams.projectId;
  
    const project = projects[projectId];
  
    if (!project) {
      return <div className="main_content ">Project not found, try again</div>;
    }
  
    return (
      <div className="flex flex-col w-full main_content">
        <h1>{project.title}</h1>
      </div>
    );
  }