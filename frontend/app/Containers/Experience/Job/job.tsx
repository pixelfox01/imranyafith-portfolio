import { IconCalendar, IconBuilding } from "@tabler/icons-react";

interface JobProps {
  title: string;
  company: string;
  description: string[];
  duration: {
    start: string;
    end: string;
  };
}

const Job = (props: JobProps) => {
  return (
    <div className="card h-full shadow-lg p-8 bg-neutral flex flex-col gap-y-3 tracking-wider">
      <div className="border-l-2 border-primary-focus pl-4">
        <h1 className="uppercase font-bold tracking-widest">{props.title}</h1>
      </div>
      <div>
        <p className="flex items-center text-sm">
          <IconCalendar className="inline-block mr-2" size={16} />
          {props.duration.start} - {props.duration.end}
        </p>
      </div>
      <div>
        <p className="flex items-center text-sm">
          <IconBuilding className="inline-block mr-2" size={16} />
          {props.company}
        </p>
      </div>
      <div className="p-5 border-2 rounded-lg border-neutral-focus bg-neutral-focus mt-5">
        <ul className="list-disc ml-5 flex flex-col gap-y-2 marker:text-primary-focus">
          {props.description.map((desc) => (
            <li className="text-sm" key={desc}>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Job;
