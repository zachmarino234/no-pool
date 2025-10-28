import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {

  const projects = [
    {
      name: "Out of Order",
      date: "June 2025",
      role: "Producer",
      image: "/outoforder_logo.png",
      size: "2x2"
    },
    {
      name: "logo",
      image: "wordmark_blue.svg",
      size: "1x1",
      showOverlay: false
    },
    {
      name: "Trisha Paytas' Big Broadway Dream",
      date: "February 2025",
      role: "Lead Producer",
      image: "/trishaphone.jpg",
      size: "wide"
    },
    {
      name: "Coming Soon!",
      date: "2026",
      role: "Lead Producer",
      image: "/outoforder.jpg",
      size: "wide"
    },
    {
      name: "logo",
      image: "wordmark_white.svg",
      size: "1x1",
      showOverlay: false
    }
  ];

  return (
    <div className="w-full h-full p-4 md:p-6 pb-20 sm:pb-20 md:pb-20 lg:pb-20 lg:p-8 lg:px-32 bg-[#7CCCF8]">
      <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr" style={{ gridAutoFlow: 'dense', gridAutoRows: 'minmax(200px, 1fr)' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;