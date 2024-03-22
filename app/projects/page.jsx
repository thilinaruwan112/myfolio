"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/erp.png",
    category: "full stack",
    name: "ERP System",
    description:
      "I have developed a web application to manage any kind of organizational operations including Inventory Management, Sales, Invoicing, Reporting, Vehicle Management, Supplier Management, Product Management",
    link: "http://demo.payshia.com/",
    github: "https://github.com/thilinaruwan112/Payshia-ERP",
  },
  {
    image: "/work/pos.png",
    category: "full stack",
    name: "POS System",
    description:
      "Retail, Restaurant POS System. this is customizable with any kind of business. KOT and Receipts Printings are available. The code is fully Written using PHP, Javascript & AJAX",
    link: "http://demo.payshia.com/pos-system",
    github:
      "https://github.com/thilinaruwan112/Payshia-ERP/tree/main/pos-system",
  },
  {
    image: "/work/lms-new.png",
    category: "javascript",
    name: "Ceylon Pharma College LMS",
    description:
      "This project is developed based on Ceylon Pharma College's requirements. and i have developed 5 games to do the education in different technology",
    link: "http://web.pharmacollege.lk/",
    github: "https://github.com/thilinaruwan112/LMSCeylonPharmaCollege",
  },
  {
    image: "/work/lms-management.png",
    category: "full stack",
    name: "Student Management System",
    description:
      "This system integrated with our main ERP system. this part specially develop to handle large number of students in Institutes",
    link: "https://admin.pharmacollege.lk/",
    github:
      "https://github.com/thilinaruwan112/Payshia-ERP/tree/main/assets/content/lms-management",
  },
  {
    image: "/work/lms.png",
    category: "full stack",
    name: "Learning Management System",
    description:
      "This project is help to manage courses, students and learning materials of any kind of organization",
    link: "https://lms.pharmacollege.lk/",
    github: "/",
  },
  {
    image: "/work/pharmacollege.png",
    category: "PHP",
    name: "https://pharmacollege.lk/",
    description: "I have developed website for Ceylon Pharma College",
    link: "/",
    github: "/",
  },
  {
    image: "/work/edurulk.png",
    category: "PHP",
    name: "Eduru.LK",
    description: "This project is done for euduru.lk website",
    link: "https://eduru.lk/",
    github: "/",
  },
  {
    image: "/work/payshia.png",
    category: "PHP",
    name: "Payshia.com",
    description: "This project is done for payshia.com website",
    link: "http://payshia.com/",
    github: "/",
  },
  {
    image: "/work/class-management.png",
    category: "full stack",
    name: "Class Management System",
    description:
      "This System is suitable for any Tuition Class Institutes to manage their day today classes, attendance of student and Payments",
    link: "https://mytutor.eduru.lk/",
    github: "/",
  },
  {
    image: "/work/jlktours.png",
    category: "PHP",
    name: "www.jlktours.com",
    description:
      "I have developed tourism based web projects to several customers.",
    link: "https://jlktours.com/",
    github: "https://github.com/thilinaruwan112/JLKTours",
  },
  {
    image: "/work/travelleye.png",
    category: "PHP",
    name: "www.travelleye.com",
    description:
      "I have developed tourism based web projects to several customers.",
    link: "https://travelleye.com/",
    github: "/",
  },

  {
    image: "/work/wingslanka.png",
    category: "PHP",
    name: "www.wingslanka.com",
    description:
      "I have developed website for charity organization called Wings Lanka Foundation.",
    link: "https://wingslanka.com/",
    github: "/",
  },
];
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md-w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
