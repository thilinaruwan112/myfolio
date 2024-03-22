"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/erp.png",
    category: "full stack",
    name: "ERP System",
    description:
      "Web application to manage any kind of organizational operations including Inventory Management, Sales, Invoicing, Reporting, etc",
    link: "http://demo.payshia.com/",
    github: "https://github.com/thilinaruwan112/Payshia-ERP",
  },
  {
    image: "/work/pos.png",
    category: "full stack",
    name: "POS System",
    description:
      "Retail, Restaurant POS System. this is customizable with any kind of business. KOT and Receipts Printings are available.",
    link: "http://demo.payshia.com/pos-system",
    github:
      "https://github.com/thilinaruwan112/Payshia-ERP/tree/main/pos-system",
  },
  {
    image: "/work/lms-new.png",
    category: "javascript",
    name: "Ceylon Pharma College LMS",
    description:
      "This project is developed based on Ceylon Pharma College's requirements. and i have developed 5 games to do the education.",
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
    name: "www.pharmacollege.lk/",
    description: "I have developed website for Ceylon Pharma College",
    link: "https://pharmacollege.lk/",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
