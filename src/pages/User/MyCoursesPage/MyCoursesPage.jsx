import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Layout1 from "../../Layout1/Layout1";

import css from "./MyCoursesPage.module.css";

const MyCoursesPage = () => {
  const tabs = [
    { name: "All Courses", link: "learning" },
    { name: "My Lists", link: "lists" },
    { name: "Wishlist", link: "wishlist" },
    { name: "Archived", link: "archived" },
  ];
  return (
    <Layout1>
      <div className={css.outerDiv}>
        <div className={css.topBar}>
          <div className={css.topBarTtl}>My learning</div>
        </div>
        <div className={css.menuBar}>
          <div className={css.links}>
            {tabs?.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? [css.link, css.linkActive].join(" ") : css.link
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        {/* 🔥🔥 FIXED: ALL NEW COMPONENT CLASSES USE css.className */}
        <div className={css.streakContainer}>

          {/* Card 1 */}
          <div className={css.streakCard}>
            <div className={css.streakLeft}>
              <h2 className={css.streakTitle}>Start a new streak</h2>
              <p className={css.streakSubtitle}>
                We know you have it in you. Go after your goals!
              </p>
            </div>

            <div className={css.streakRight}>
              <div className={css.streakItem}>
                <img
                  src="/icons/streak.png"
                  alt="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  className={css.streakFlame}
                />
                <div>
                  <div className={css.streakNum}>0 weeks</div>
                  <div className={css.streakLabel}>Current streak</div>
                </div>
              </div>

              <div className={css.progressContainer}>
                <div className={css.circle}><img src ="/icons/strakshare.png"></img></div>
                <div className={css.progressText}>
                  <span className={css.orangeDot}></span> 2/30 course min <br />
                  <span className={css.greenDot}></span> 3/1 visit <br />
                  Nov 9 - 15
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={css.scheduleCard}>
            <div className={css.scheduleIconBox}>
              <img
                src="/icons/OIP.jpeg"
                className={css.scheduleIcon}
              />

            </div>

            <div className={css.scheduleContent}>
              <h3 className={css.scheduleTitle}>Schedule learning time</h3>
              <p className={css.scheduleText}>
                Learning a little each day adds up. Research shows that students
                who make learning a habit are more likely to reach their goals.
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>

              <div className={css.scheduleButtons}>
                <button className={css.btnPrimary}>Get started</button>
                <button className={css.btnText}>Dismiss</button>
              </div>
            </div>
          </div>

        </div>


        <div className={css.outletBdy}>
          <Outlet />
        </div>
      </div>
    </Layout1>
  );
};

export default MyCoursesPage;
