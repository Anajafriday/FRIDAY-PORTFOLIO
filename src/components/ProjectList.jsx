import Buttoncta from "./Buttoncta";

function ProjectList({ project }) {
  return (
    <div className="space-y-4">
      <div className="h-full w-full">
        <img
          src={project.img_url}
          alt={project.title}
          className="w-full    h-5/6 object-contain object-center"
        />
      </div>
      <h3 className="text-lg font-bold ">{project.title}</h3>
      <p className="text-lg mt-2">{project.subTitle}</p>
      <div className="my-4 flex gap-4 flex-wrap">
        {project.categories.map((category) => (
          <span
            className="xl:py-2 py-1 xl:px-6 px-4 capitalize bg-colorPrimaryLight text-colorCta"
            key={category}
          >
            {category}{" "}
          </span>
        ))}
      </div>
      <div className="my-4 flex-row-reverse justify-center md:justify-normal md:flex-row flex gap-4 ">
        <Buttoncta
          link={project.webUrl}
          className=" xl:bg-colorCta px-3 py-1 self-center md:self-auto md:py-2 xl:text-current"
        >
          visit website
        </Buttoncta>
        {/* <Buttoncta className="bg-transparent  self-center underline hover:bg-transparent hover:text-colorCta text-black">
          visit website
        </Buttoncta> */}
      </div>
    </div>
  );
}

export default ProjectList;
