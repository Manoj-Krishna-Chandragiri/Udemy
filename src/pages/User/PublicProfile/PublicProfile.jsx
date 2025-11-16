// PublicProfile.jsx
import React from "react";
import Layout1 from "../../Layout1/Layout1";
import { useNavigate } from "react-router-dom";
import css from "./PublicProfile.module.css";

const PublicProfile = () => {

  const navigate = useNavigate();

  const goToCoursePage = () => {
    navigate("/course/java-fullstack");   // TODO: create this route
  };

  return (
    <Layout1>
      <div className={css.outerDiv}>
        <div className={css.topBar}>
          <div className={css.userBar}>
            <span className={css.Learner}> LEARNER</span>
            <div className={css.user}>Chandragiri Manoj Krishna</div>
          </div>
        </div>
      </div>

      <div className={css.menuTopBar}>
        <div className={css.innerMenuTopBar}></div>
      </div>

      <div className={css.bdy}>
        {/* Static Single Course */}
        <div className={css.courseCard} onClick={goToCoursePage}>
          <img
            src="/images/jfs.png"
            alt="java course"
            className={css.courseImg}
          />

          <div className={css.courseTitle}>
            Full-Stack Java Developer Course with Spring Boot 4 & React
          </div>

          <span className={css.courseDesc}>
            Build Full-Stack Web Apps Using Java, SpringBoot ...
          </span>

          <span className={css.instructor}>
            Ramesh Fadatare (Java Guides)
          </span>

          <div className={css.courseMetaDiv}>
            <span className={css.course}>Course</span>
            <span className={css.rate}>⭐ 4.4</span>
            <span className={css.ratings}>1,273 ratings</span>
            <span className={css.hours}>20 total hours</span>
            <span className={css.lectures}>181 lectures</span>
            <span className={css.level}>Beginner</span>
          </div>

          <div className={css.prices}>
            <div className={css.coursePrice}>₹519</div>
            <div className={css.dummyPrice}>₹799</div>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default PublicProfile;
