import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Course Centralization.",
    description:
      "Experience the convenience of having all your course-related resources in one centralized location.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Lectures Archive",
    description:
      "Never miss a lecture again with StudySphere's recorded lectures archive. Gain the flexibility to revisit and review past lectures at your convenience. ",
    icon: LockClosedIcon,
  },
  {
    name: "Lecture Notes Repository",
    description:
      "Access a vast repository of comprehensive lecture notes for each of your courses. StudySphere enables you to easily browse, search, and download notes provided by fellow students. ",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                StudySphere
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Find Everything at One Place
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the power of consolidation as StudySphere becomes your
                ultimate academic companion. Uncover a seamless platform that
                brings together a array of resources,
                and tools tailored to your specific courses,
                empowering you to navigate your academic path with ease and
                efficiency.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://p1.hiclipart.com/preview/393/903/786/study-student-study-skills-learning-education-die-perfekten-school-homework-png-clipart.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1700}
          />
        </div>
      </div>
    </div>
  );
}
