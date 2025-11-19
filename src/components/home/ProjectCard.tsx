import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string;
  date?: string;
  role?: string;
  image: string;
  size?: string;
  showOverlay?: boolean;
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Define size classes based on project size property
  const getSizeClasses = () => {
    switch(project.size) {
      case '2x2':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const content = (
    <>
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
      />

      {/* Gradient Overlay */}
      {project.showOverlay !== false && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      )}
      
      {/* Content */}
      {project.showOverlay !== false && (
        <div className="relative h-full flex flex-col justify-end p-4 md:p-5 lg:p-6">
          <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-1 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-white/90 text-sm md:text-base font-medium mb-1">
            {project.role}
          </p>
          <p className="text-white/70 text-xs md:text-sm">
            {project.date}
          </p>
        </div>
      )}
    </>
  );
  
  const containerClasses = `group relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] duration-300 ${getSizeClasses()}`;

  // If there's a link
  if (project.link) {
    // Check if it's an external link
    const isExternal = project.link.startsWith('http');
    
    if (isExternal) {
      return (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={containerClasses}
        >
          {content}
        </a>
      );
    }
    
    // Internal link - use Next.js Link
    return (
      <Link href={project.link} className={containerClasses}>
        {content}
      </Link>
    );
  }

  // Otherwise just return the div
  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
};

export default ProjectCard;