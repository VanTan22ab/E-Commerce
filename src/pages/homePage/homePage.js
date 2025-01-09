import React, { useState } from "react";
import Sidebar, { SidebarItem } from "../../components/sidebar/Sidebar";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import SectionCourseFree from "./sectionPage/SectionCourseFree";
import SectionIntroduce from "./sectionPage/SectionIntroduce";
import Navbar from "../../components/navbar/Navbar";
import SectionCoursePro from "./sectionPage/SectionCoursePro";
import Footer from "../../components/footer/Footer";

export default function Homepage() {
  return (
    <main className="flex bg-[#f0f9ff]/20">
      <Navbar />
      <div className="mx-8 mt-20">
        <SectionIntroduce />
        <SectionCourseFree />
        <SectionCoursePro />
        <Footer />
      </div>
    </main>
  );
}
