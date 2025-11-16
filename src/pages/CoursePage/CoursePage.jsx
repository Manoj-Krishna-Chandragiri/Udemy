// CoursePageStatic.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout1 from "../Layout1/Layout1";
import css from "./CoursePage.module.css";

const CoursePage = () => {
  const [shareModal, setShareModal] = useState(false);
  const navigate = useNavigate();

  const goToCourse = () => {
    navigate("/course/view/java");
  };

  return (
    <Layout1>
      <div className={css.coursePageOuter}>
        {/* Top hero */}
        <div className={css.heroRow}>
          <div className={css.heroLeft}>
            <nav className={css.breadcrumbs}>
              Development › Web Development › Full Stack Web Development
            </nav>

            <h1 className={css.title}>
              Full-Stack Java Developer Course with Spring Boot 4 & React
            </h1>

            <p className={css.subtitle}>
              Build FULL-STACK Web Apps using Java, Spring Boot 4, Spring Data
              JPA, Spring Security 7, JWT, JavaScript, React & MySQL
            </p>

            <div className={css.metaRow}>
              <div className={css.instructor}>
                Created by <strong>Ramesh Fadatare (Java Guides)</strong>
              </div>
              <div className={css.badges}>Last updated 11/2025 • English • 4 more</div>
            </div>

            {/* rating strip */}
            <div className={css.ratingStrip}>
              <div className={css.promoBox}>
                <span className={css.promoIcon}>★</span>
                <div>
                  <strong>Premium</strong>
                  <div className={css.promoText}>
                    Access 26,000+ top-rated courses with a Udemy plan.
                  </div>
                </div>
              </div>

              <div className={css.ratingBox}>
                <div className={css.ratingValue}>4.4</div>
                <div className={css.ratingStars}>★★★★★</div>
                <a className={css.ratingLink}>1,273 ratings</a>
              </div>

              <div className={css.learnersBox}>
                10,177
                <br />
                <small>learners</small>
              </div>
            </div>
          </div>

          {/* PREVIEW RIGHT CARD */}
          <aside className={css.heroRight}>
            <div className={css.previewCard}>
              <div className={css.previewMedia}>
                <img src="/images/jfs.png" alt="preview" />
              </div>

              <div className={css.purchaseInfo}>
                <span className={css.infoIcon}>i</span>
                <div className={css.purchasedate}>
                  You purchased this course on Nov. 12, 2025
                </div>

                <button className={css.goCourseBtn} onClick={goToCourse}>
                  Go to course
                </button>

                <div className={css.moneyBack}>30-Day Money-Back Guarantee</div>

                <div className={css.includesTtl}>This course includes:</div>
                <ul className={css.includesList}>
                  <li>20 hours on-demand video</li>
                  <li>13 articles</li>
                  <li>4 downloadable resources</li>
                  <li>Access on mobile and TV</li>
                  <li>Full lifetime access</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* MAIN CONTENT */}
        <div className={css.mainRow}>
          <div className={css.leftColumn}>
            <section className={css.boxSection}>
              <h3 className={css.secTtl}>What you'll learn</h3>
              <div className={css.twoColList}>
                <ul>
                  <li>
                    Learn to develop a FULL-STACK Web Application with React and
                    Spring Boot 4
                  </li>
                  <li>
                    Build Todo Management FULL-STACK Web Application with React
                    and Spring Boot 4
                  </li>
                </ul>

                <ul>
                  <li>
                    Build Employee Management System FULL-STACK Web Application
                  </li>
                  <li>
                    Learn Spring Boot Fundamentals and REST API Basics
                  </li>
                </ul>
              </div>
            </section>

            <section className={css.boxSection}>
              <h3 className={css.secTtl}>Course content</h3>
              <div className={css.secBdy}>
                <div className={css.curriculumItem}>
                  <strong>Introduction</strong> • 3 lectures • 10 min
                </div>
                <div className={css.curriculumItem}>
                  <strong>Setup & Basics</strong> • 12 lectures • 2 hrs
                </div>
              </div>
            </section>

            <section className={css.boxSection}>
              <h3 className={css.secTtl}>Requirements</h3>
              <ul>
                <li>Basic knowledge of Java and JavaScript</li>
                <li>Computer with internet access</li>
              </ul>
            </section>

            <section className={css.boxSection}>
              <h3 className={css.secTtl}>Description</h3>
              <p className={css.desc}>
                This course will teach you how to build FULL-STACK applications
                using Spring Boot 4 and React. You will learn REST APIs,
                security, JWT and deploy real apps.
              </p>
            </section>

            <section className={css.boxSection}>
              <h3 className={css.secTtl}>Featured review</h3>
              <div className={css.reviewCard}>
                <strong>Excellent course</strong>
                <p>Well structured and practical. — Student</p>
              </div>
            </section>

            <section className={css.boxSection}>
              <h3 className={css.secTtl}>Instructor</h3>
              <div className={css.instructorCard}>
                <img src="/images/profile.png" alt="instructor" />
                <div>
                  <div className={css.instructorName}>Ramesh Fadatare</div>
                  <div className={css.instructorBio}>
                    Java Guides — Senior Trainer
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN PURCHASE BOX */}
          <aside className={css.rightColumn}>
            <div className={css.purchaseBox}>
              <div className={css.priceRow}>
                <div className={css.priceNew}>₹519</div>
                <div className={css.priceOld}>₹799</div>
              </div>

              <button className={css.buyBtn}>Add to cart</button>
              <button className={css.wishlistBtn}>Add to wishlist</button>

              <div className={css.guarantee}>
                30-Day Money-Back Guarantee
              </div>

              <div className={css.includeMini}>
                <h4>This course includes</h4>
                <ul>
                  <li>20 hours on-demand video</li>
                  <li>12 lectures</li>
                  <li>All levels</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout1>
  );
};

export default CoursePage;
