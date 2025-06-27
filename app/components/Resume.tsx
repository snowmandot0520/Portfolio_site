import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Freelance / Remote",
      period: "2022 - Present",
      positions: [
        {
          title: "Full Stack Developer",
          description: [
            "-Developed custom SaaS platforms using React, Node.js, and PostgreSQL for clients across Europe.",
            "-Built RESTful APIs and integrated third-party services (Stripe, Firebase, Mailgun).",
            "-Managed deployment pipelines with Docker and GitHub Actions on AWS.",
            "-Created intuitive admin dashboards and mobile-friendly UIs using Tailwind CSS",
          ],
        }
      ],
    },
    {
      company: "TechWave Solutions",
      period: "2019/04 - 2021/12",
      positions: [
        {
          title: "Senior Fullstack Developer",
          description: [
            "-Designed and developed internal tools for logistics tracking and reporting.",
            "-Spearheaded migration from legacy PHP system to modern React/Node.js stack.",
            "-Improved system performance by 40% through optimized queries and caching.",
            "-Collaborated with QA and product teams in an Agile environment.",
          ],
        },
      ],
    },
    {
      company: "SoftNet Group",
      period: "2017 - 2019",
      positions: [
        {
          title: "Junior Web Developer",
          description: [
            "Maintained and improved multiple client websites using WordPress and PHP.",
            "Assisted in developing custom plugins and integrations.",
            "Gained hands-on experience in version control and deployment workflows.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/colby_fayock.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
