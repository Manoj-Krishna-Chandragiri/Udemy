import playIcon from "/icons/play-button.png";
import articleIcon from "/icons/application.png";
import certificateIcon from "/icons/certificate.png";
import cardImg from "/images/card.jpg";
import cardImg2 from "/images/card2.jpg";
import cardImg3 from "/images/card3.jpg";
import showcaseImg from "/images/showcase.jpg";
import showcaseImg2 from "/images/showcase2.jpg";
import showcaseImg3 from "/images/showcase3.jpg";
import showcaseImg4 from "/images/showcase4.jpg";
import showcaseImg5 from "/images/showcase5.jpg";
import showcaseImg6 from "/images/showcase6.jpg";
import bannerImg1 from "/images/banners/banner1.jpg";
import bannerImg2 from "/images/banners/banner2.jpg";
import bannerImg3 from "/images/banners/banner3.jpg";
import teachIcon from "/icons/teach.png";
import askIcon from "/icons/ask.png";
import groupUsersIcon from "/icons/group-users.png";

const Learnings = {
  ttl: "What you'll learn",
  points: [
    "Create their own Python Programs",
    "Become an experienced Python Programmer",
    "Parse the Web and Create their own Games",
  ],
  // prefix: "✅",
};

const courseIncludes = [
  {
    id: 1,
    img: playIcon,
    txt: "14 hours of video",
  },
  {
    id: 2,
    img: articleIcon,
    txt: "4 articles + resources",
  },
  {
    id: 3,
    img: certificateIcon,
    txt: "Certificate of completion",
  },
];

const courseDetails = {
  secs: "15",
  lects: "146",
  duration: "14h 42m",
};

const courseData = [
  {
    id: "t1",
    ttl: "Java Fundamentals & Setup",
    lects: "9",
    dur: "52min",
    list: [
      {
        id: "t11",
        ttl: "Course Introduction & Java Overview",
        dur: "06:15",
        preview: true,
        type: "video",
        desc: "Introduction to the Full-Stack Java Developer course and what you'll learn.",
        resources: [
          {
            id: "t111",
            text: "Course Guide",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: true,
          },
        ],
      },
      {
        id: "t12",
        ttl: "Installing JDK and Setting Up Environment",
        dur: "08:42",
        preview: true,
        type: "video",
        desc: "Step-by-step guide to install Java Development Kit and configure your IDE.",
        resources: [
          {
            id: "t112",
            text: "Setup Guide PDF",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: true,
          },
        ],
      },
      {
        id: "t13",
        ttl: "Your First Java Program",
        dur: "07:30",
        preview: true,
        type: "video",
        desc: "Write and execute your first Java application with Hello World.",
        resources: [
          {
            id: "t113",
            text: "HelloWorld.java",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: false,
          },
          {
            id: "t114",
            text: "Setup Checklist",
            link: "https://github.com/",
            icon: teachIcon,
            downloadable: true,
          },
        ],
      },
      {
        id: "t14",
        ttl: "Java Basics Quiz",
        dur: "05:00",
        preview: true,
        type: "doc",
        desc: "Test your knowledge on Java fundamentals and setup concepts.",
      },
      {
        id: "t15",
        ttl: "IDE Configuration Best Practices",
        dur: "06:18",
        preview: false,
        type: "doc",
        desc: "Learn IDE configuration, shortcuts, and productivity tips.",
      },
      {
        id: "t16",
        ttl: "Understanding the JVM",
        dur: "08:05",
        preview: true,
        type: "video",
        desc: "Deep dive into how the Java Virtual Machine works.",
      },
      {
        id: "t17",
        ttl: "Command Line Compilation",
        dur: "06:50",
        preview: false,
        type: "video",
        desc: "Learn to compile and run Java programs from command line.",
      },
      {
        id: "t18",
        ttl: "Java Fundamentals Project",
        dur: "03:20",
        preview: false,
        type: "query",
        desc: "Small project to apply Java fundamentals knowledge.",
      },
      {
        id: "t19",
        ttl: "Resources and Further Learning",
        dur: "02:45",
        preview: true,
        type: "doc",
        desc: "Curated list of Java learning resources and documentation.",
      },
    ],
  },
  {
    id: "t2",
    ttl: "Object-Oriented Programming in Java",
    lects: "10",
    dur: "1h 15min",
    list: [
      {
        id: "t21",
        ttl: "Classes and Objects Basics",
        dur: "09:30",
        preview: true,
        type: "video",
        desc: "Master the fundamentals of classes, objects, and OOP principles.",
      },
      {
        id: "t22",
        ttl: "Encapsulation and Access Modifiers",
        dur: "11:15",
        preview: true,
        type: "video",
        desc: "Learn public, private, protected modifiers and data encapsulation.",
      },
      {
        id: "t23",
        ttl: "Inheritance and Polymorphism",
        dur: "10:45",
        preview: true,
        type: "video",
        desc: "Understand inheritance hierarchies and method overriding.",
      },
      {
        id: "t24",
        ttl: "Abstraction and Interfaces",
        dur: "08:20",
        preview: true,
        type: "doc",
        desc: "Create abstract classes and define contracts with interfaces.",
      },
      {
        id: "t25",
        ttl: "OOP Design Patterns Intro",
        dur: "07:50",
        preview: false,
        type: "doc",
        desc: "Introduction to common design patterns in Java.",
      },
      {
        id: "t26",
        ttl: "Constructors and Method Overloading",
        dur: "09:15",
        preview: true,
        type: "video",
        desc: "Master constructors, this keyword, and method overloading.",
      },
      {
        id: "t27",
        ttl: "Static Methods and Variables",
        dur: "08:40",
        preview: false,
        type: "video",
        desc: "Learn about static context and class-level variables.",
      },
      {
        id: "t28",
        ttl: "OOP Practice Quiz",
        dur: "10:00",
        preview: false,
        type: "query",
        desc: "Comprehensive quiz on Object-Oriented Programming concepts.",
      },
      {
        id: "t29",
        ttl: "Mini Project: Bank System",
        dur: "15:30",
        preview: true,
        type: "video",
        desc: "Build a simple bank system using OOP principles.",
      },
      {
        id: "t210",
        ttl: "Code Review and Best Practices",
        dur: "06:25",
        preview: false,
        type: "doc",
        desc: "Learn Java coding standards and best practices.",
      },
    ],
  },
  {
    id: "t3",
    ttl: "Spring Boot Fundamentals",
    lects: "11",
    dur: "1h 28min",
    list: [
      {
        id: "t31",
        ttl: "What is Spring Boot?",
        dur: "09:20",
        preview: true,
        type: "video",
        desc: "Introduction to Spring Boot framework and its advantages.",
      },
      {
        id: "t32",
        ttl: "Setting Up Spring Boot Project",
        dur: "10:15",
        preview: true,
        type: "video",
        desc: "Create your first Spring Boot application using Spring Initializr.",
      },
      {
        id: "t33",
        ttl: "Spring Boot Annotations",
        dur: "11:45",
        preview: true,
        type: "video",
        desc: "Learn @SpringBootApplication, @RestController, and other key annotations.",
      },
      {
        id: "t34",
        ttl: "Building REST APIs",
        dur: "12:30",
        preview: true,
        type: "doc",
        desc: "Create RESTful web services with Spring Boot.",
      },
      {
        id: "t35",
        ttl: "Dependency Injection in Spring",
        dur: "08:50",
        preview: false,
        type: "doc",
        desc: "Understanding Spring's dependency injection mechanism.",
      },
      {
        id: "t36",
        ttl: "Spring Boot Configuration",
        dur: "10:20",
        preview: true,
        type: "video",
        desc: "Configure application properties and profiles.",
      },
      {
        id: "t37",
        ttl: "Embedded Tomcat Server",
        dur: "07:15",
        preview: false,
        type: "video",
        desc: "Learn about Spring Boot's embedded application server.",
      },
      {
        id: "t38",
        ttl: "Spring Boot Starter Packs",
        dur: "06:40",
        preview: false,
        type: "query",
        desc: "Understand and use Spring Boot starters for quick setup.",
      },
      {
        id: "t39",
        ttl: "Error Handling & Validation",
        dur: "08:45",
        preview: true,
        type: "video",
        desc: "Implement exception handling and input validation.",
      },
      {
        id: "t310",
        ttl: "Logging in Spring Boot",
        dur: "07:30",
        preview: false,
        type: "doc",
        desc: "Configure and use SLF4J and Logback for logging.",
      },
      {
        id: "t311",
        ttl: "Mini Project: REST API Server",
        dur: "20:00",
        preview: true,
        type: "video",
        desc: "Build a complete REST API using Spring Boot.",
      },
    ],
  },
  {
    id: "t4",
    ttl: "Database Connectivity with JPA & Hibernate",
    lects: "9",
    dur: "1h 12min",
    list: [
      {
        id: "t41",
        ttl: "Introduction to JPA",
        dur: "09:10",
        preview: true,
        type: "video",
        desc: "Learn Java Persistence API and ORM concepts.",
      },
      {
        id: "t42",
        ttl: "Hibernate Framework Basics",
        dur: "10:25",
        preview: true,
        type: "video",
        desc: "Master Hibernate as JPA implementation.",
      },
      {
        id: "t43",
        ttl: "Entity and Relationships",
        dur: "11:50",
        preview: true,
        type: "video",
        desc: "Create entities with @Entity, @OneToMany, @ManyToOne relationships.",
      },
      {
        id: "t44",
        ttl: "CRUD Operations",
        dur: "09:30",
        preview: true,
        type: "doc",
        desc: "Implement Create, Read, Update, Delete operations.",
      },
      {
        id: "t45",
        ttl: "Query Language (HQL & JPQL)",
        dur: "10:15",
        preview: false,
        type: "doc",
        desc: "Write complex database queries.",
      },
      {
        id: "t46",
        ttl: "Lazy and Eager Loading",
        dur: "08:40",
        preview: true,
        type: "video",
        desc: "Optimize database queries with loading strategies.",
      },
      {
        id: "t47",
        ttl: "Transaction Management",
        dur: "07:55",
        preview: false,
        type: "video",
        desc: "Manage database transactions in Spring Boot.",
      },
      {
        id: "t48",
        ttl: "Database Migrations with Flyway",
        dur: "09:20",
        preview: true,
        type: "query",
        desc: "Version control your database schema.",
      },
      {
        id: "t49",
        ttl: "Project: User Management System",
        dur: "18:30",
        preview: true,
        type: "video",
        desc: "Build a complete user database system.",
      },
    ],
  },
  {
    id: "t5",
    ttl: "React Fundamentals",
    lects: "10",
    dur: "1h 20min",
    list: [
      {
        id: "t51",
        ttl: "Introduction to React",
        dur: "08:45",
        preview: true,
        type: "video",
        desc: "Understand React concepts and why use it.",
      },
      {
        id: "t52",
        ttl: "JSX and Components",
        dur: "10:30",
        preview: true,
        type: "video",
        desc: "Learn JSX syntax and functional components.",
      },
      {
        id: "t53",
        ttl: "Props and State",
        dur: "11:15",
        preview: true,
        type: "video",
        desc: "Pass data between components using props and manage state.",
      },
      {
        id: "t54",
        ttl: "React Hooks",
        dur: "12:40",
        preview: true,
        type: "doc",
        desc: "Master useState, useEffect, useContext hooks.",
      },
      {
        id: "t55",
        ttl: "Lifecycle Methods",
        dur: "09:25",
        preview: false,
        type: "doc",
        desc: "Understand component lifecycle.",
      },
      {
        id: "t56",
        ttl: "Event Handling",
        dur: "08:15",
        preview: true,
        type: "video",
        desc: "Handle user interactions in React.",
      },
      {
        id: "t57",
        ttl: "Conditional Rendering",
        dur: "07:50",
        preview: false,
        type: "video",
        desc: "Render components conditionally.",
      },
      {
        id: "t58",
        ttl: "Lists and Keys",
        dur: "08:20",
        preview: false,
        type: "query",
        desc: "Render lists efficiently with proper keys.",
      },
      {
        id: "t59",
        ttl: "Forms and Inputs",
        dur: "10:05",
        preview: true,
        type: "video",
        desc: "Handle form inputs and validation.",
      },
      {
        id: "t510",
        ttl: "Mini Project: Todo App",
        dur: "16:40",
        preview: true,
        type: "video",
        desc: "Build a complete todo application with React.",
      },
    ],
  },
  {
    id: "t6",
    ttl: "Connecting React Frontend to Spring Boot Backend",
    lects: "8",
    dur: "58min",
    list: [
      {
        id: "t61",
        ttl: "Understanding REST APIs",
        dur: "08:30",
        preview: true,
        type: "video",
        desc: "Learn REST principles and HTTP methods.",
      },
      {
        id: "t62",
        ttl: "Fetch API Basics",
        dur: "09:15",
        preview: true,
        type: "video",
        desc: "Make API calls from React to backend.",
      },
      {
        id: "t63",
        ttl: "Error Handling in API Calls",
        dur: "08:50",
        preview: true,
        type: "video",
        desc: "Handle errors and status codes gracefully.",
      },
      {
        id: "t64",
        ttl: "CORS Configuration",
        dur: "07:40",
        preview: true,
        type: "doc",
        desc: "Enable cross-origin requests in Spring Boot.",
      },
      {
        id: "t65",
        ttl: "Authentication & JWT Tokens",
        dur: "10:25",
        preview: false,
        type: "doc",
        desc: "Implement JWT-based authentication.",
      },
      {
        id: "t66",
        ttl: "State Management with Context",
        dur: "09:10",
        preview: true,
        type: "video",
        desc: "Store API data in React Context.",
      },
      {
        id: "t67",
        ttl: "Async Data Fetching",
        dur: "08:35",
        preview: false,
        type: "video",
        desc: "Use useEffect for asynchronous operations.",
      },
      {
        id: "t68",
        ttl: "Project: Full-Stack Todo App",
        dur: "22:15",
        preview: true,
        type: "query",
        desc: "Build complete frontend-backend integration.",
      },
    ],
  },
  {
    id: "t7",
    ttl: "Advanced React Patterns",
    lects: "7",
    dur: "52min",
    list: [
      {
        id: "t71",
        ttl: "React Router for Navigation",
        dur: "09:45",
        preview: true,
        type: "video",
        desc: "Build multi-page applications with routing.",
      },
      {
        id: "t72",
        ttl: "Code Splitting and Lazy Loading",
        dur: "08:20",
        preview: true,
        type: "video",
        desc: "Optimize performance with code splitting.",
      },
      {
        id: "t73",
        ttl: "Custom Hooks",
        dur: "08:50",
        preview: true,
        type: "video",
        desc: "Create reusable custom hooks.",
      },
      {
        id: "t74",
        ttl: "Memoization and Performance",
        dur: "08:15",
        preview: true,
        type: "doc",
        desc: "Optimize component re-renders.",
      },
      {
        id: "t75",
        ttl: "Error Boundaries",
        dur: "07:40",
        preview: false,
        type: "doc",
        desc: "Handle errors gracefully in React.",
      },
      {
        id: "t76",
        ttl: "Testing React Components",
        dur: "09:30",
        preview: true,
        type: "video",
        desc: "Write unit tests with Jest and React Testing Library.",
      },
      {
        id: "t77",
        ttl: "Advanced Project: E-Commerce Frontend",
        dur: "25:20",
        preview: false,
        type: "query",
        desc: "Build complex e-commerce UI with advanced patterns.",
      },
    ],
  },
  {
    id: "t8",
    ttl: "Deployment and Production",
    lects: "6",
    dur: "45min",
    list: [
      {
        id: "t81",
        ttl: "Building React for Production",
        dur: "07:50",
        preview: true,
        type: "video",
        desc: "Optimize and build React application.",
      },
      {
        id: "t82",
        ttl: "Spring Boot Build and Packaging",
        dur: "08:15",
        preview: true,
        type: "video",
        desc: "Create executable JAR files.",
      },
      {
        id: "t83",
        ttl: "Docker Containerization",
        dur: "10:40",
        preview: true,
        type: "video",
        desc: "Containerize both React and Spring Boot applications.",
      },
      {
        id: "t84",
        ttl: "Cloud Deployment Options",
        dur: "08:30",
        preview: true,
        type: "doc",
        desc: "Deploy to AWS, Heroku, or other cloud platforms.",
      },
      {
        id: "t85",
        ttl: "Monitoring and Logging",
        dur: "07:45",
        preview: false,
        type: "doc",
        desc: "Monitor applications in production.",
      },
      {
        id: "t86",
        ttl: "Final Project: Deploy Full-Stack Application",
        dur: "30:00",
        preview: true,
        type: "query",
        desc: "Deploy your complete Java/React application to production.",
      },
    ],
  },
];

const courseReq = {
  ttl: "Requirements",
  reqs: [
    "JavaScript + HTML + CSS fundamentals are absolutely required",
    "You DON'T need to be a JavaScript expert to succeed in this course!",
    "ES6+ JavaScript knowledge is beneficial but not a must-have",
    "NO prior React or any other JS framework experience is required!",
  ],
};

const desc = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
  1914 translation by H. Rackham
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  
  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  
  1914 translation by H. Rackham
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;

const featuredReviewUserData = {
  img: "",
  name: "Obada Q.",
  courses: 23,
  reviews: 12,
  rated: 5,
  date: "Sun Apr 04 2020",
  cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
};

const instructorData = [
  {
    id: 1,
    img: "",
    name: "Avinash",
    desc: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    courses: 23,
    reviews: 12,
    rating: 5,
    students: 200,
    date: "Sun Apr 04 2020",
    cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
  },
];

const moreCourses = [
  {
    id: "1",
    instructor: "Avinash",
    link: "/",
    courses: [
      {
        id: "c1",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
      {
        id: "c2",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
    ],
  },
  {
    id: "2",
    instructor: "The codex",
    link: "/",
    courses: [
      {
        id: "c21",
        img: cardImg,
        ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
        authDet: "Koushil Mankali, Nani",
        prc: 649,
        oldprc: 1338,
        stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
        noOfRats: 9,
      },
    ],
  },
];

const courseDetData = {
  path: "/",
  img: cardImg,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course",
  desc: "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
  price: 600,
  discPrice: 3299,
  disc: 85,
  tmLeft: 7,
  rating: 4.3,
  rats: 3788,
  enrolled: 21000,
  authors: ["Avinash", "The Codex"],
  lastUpdated: new Date(),
  lang: "English",
  subTtl: "English",
};

const crsData = {
  path: "/",
  img: cardImg,
  id: 1,
  ttl: "Complete Data Science: Machine Learning for Everyone",
  authDet:
    "Krish Naik, KRISHAI Technologies Private Limited - Learn data science and machine learning from basics to advanced. Master Python, SQL, and real-world projects.",
  prc: 559,
  oldprc: 3369,
  stars: { a: 4, b: 5, c: 4, d: 2, e: 1 },
  noOfRats: 20124,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1200000,
  level: "Intermediate Level",
  crsSubtxt:
    "Complete Data Science: Master machine learning, Python, data analysis, and real-world data science projects.",
};
const crsData2 = {
  path: "/",
  img: showcaseImg4,
  id: 2,
  ttl: "The Data Science Course: Complete Data Science with Python",
  authDet:
    "365 Careers - Transform your career with comprehensive data science training. Learn Python, statistics, machine learning, and work on real projects.",
  prc: 579,
  oldprc: 3459,
  stars: { a: 4, b: 6, c: 5, d: 3, e: 2 },
  noOfRats: 158059,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1500000,
  level: "Intermediate Level",
  crsSubtxt:
    "The Data Science Course: Complete your journey in data science with Python programming and machine learning algorithms.",
};
const crsData3 = {
  path: "/",
  img: showcaseImg2,
  id: 3,
  ttl: "Ultimate RAG Bootcamp Using Langchain & AI",
  authDet:
    "KRISHAI Technologies Private Limited - Master Retrieval-Augmented Generation with Langchain and modern AI frameworks. Build production-ready RAG systems.",
  prc: 529,
  oldprc: 2129,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 1160,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 800000,
  level: "Advanced Level",
  crsSubtxt:
    "Ultimate RAG Bootcamp: Learn Langchain and AI to build advanced Retrieval-Augmented Generation applications.",
};

const crsData4 = {
  path: "/",
  img: showcaseImg5,
  id: 4,
  ttl: "Data Science & AI Masters 2025 - From 0 to Gen AI",
  authDet:
    "Dr. Satyajit Pattnaik, Satyajit Pattnaik - Become an AI expert from scratch. Master data science, machine learning, and generative AI for 2025.",
  prc: 519,
  oldprc: 3019,
  stars: { a: 4, b: 5, c: 4, d: 1, e: 0 },
  noOfRats: 1590,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1100000,
  level: "Intermediate Level",
  crsSubtxt:
    "Data Science & AI Masters: Complete journey from zero to generative AI expertise with hands-on projects.",
};

const crsData5 = {
  path: "/",
  img: showcaseImg6,
  id: 5,
  ttl: "Complete Agentic AI Bootcamp With Langchain",
  authDet:
    "KRISHAI Technologies Private Limited - Build autonomous AI agents using Langchain. Master agent architecture, memory systems, and tool integration.",
  prc: 569,
  oldprc: 799,
  stars: { a: 4, b: 5, c: 4, d: 1, e: 0 },
  noOfRats: 3233,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 900000,
  level: "Advanced Level",
  crsSubtxt:
    "Complete Agentic AI Bootcamp: Learn to build intelligent autonomous agents with Langchain framework.",
};

// Trending Courses Section
const trendCrs1 = {
  path: "/",
  img: cardImg2,
  id: 6,
  ttl: "100 Days of Code™: The Complete Python Pro",
  authDet:
    "Dr. Angela Yu, Developer and Lead Instructor - Master Python programming with 100 days of intensive coding challenges and real-world projects.",
  prc: 519,
  oldprc: 3109,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 399617,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1800000,
  level: "Beginner Level",
  crsSubtxt:
    "100 Days of Code: Complete Python programming with daily coding challenges and real-world projects.",
};

const trendCrs2 = {
  path: "/",
  img: showcaseImg3,
  id: 7,
  ttl: "AI Engineer Agentic Track: The Complete Agent & MCP",
  authDet:
    "Ed Donner, Ligency - Master AI engineering with agentic approaches and Model Context Protocol for production systems.",
  prc: 519,
  oldprc: 799,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 20648,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1400000,
  level: "Advanced Level",
  crsSubtxt:
    "AI Engineer Agentic Track: Learn to build autonomous AI agents with MCP and production frameworks.",
};

const trendCrs3 = {
  path: "/",
  img: cardImg3,
  id: 8,
  ttl: "The Complete Full-Stack Web Development Bootcamp",
  authDet:
    "Dr. Angela Yu, Developer and Lead Instructor - Frontend and backend mastery with JavaScript, React, Node.js, and modern web technologies.",
  prc: 519,
  oldprc: 3109,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 457093,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 2000000,
  level: "Beginner Level",
  crsSubtxt:
    "The Complete Full-Stack Web Development: Master frontend and backend with React, Node.js, and databases.",
};

const trendCrs4 = {
  path: "/",
  img: showcaseImg,
  id: 9,
  ttl: "Ultimate AWS Certified Solutions Architect Associate",
  authDet:
    "Stephane Maarek, AWS Certified Cloud Practitioner - Become AWS certified and master cloud architecture design patterns.",
  prc: 559,
  oldprc: 3379,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 273673,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1600000,
  level: "Intermediate Level",
  crsSubtxt:
    "Ultimate AWS Certified: Master AWS architecture and prepare for certification exams.",
};

const trendCrs5 = {
  path: "/",
  img: showcaseImg4,
  id: 10,
  ttl: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
  authDet:
    "Stephane Maarek, AWS Certified Cloud Practitioner - Complete AWS Cloud Practitioner certification preparation.",
  prc: 559,
  oldprc: 3379,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 270249,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1200000,
  level: "Beginner Level",
  crsSubtxt:
    "Ultimate AWS Cloud Practitioner: Learn AWS fundamentals and pass the certification.",
};

// Recently Viewed / Recommendations Section
const recCrs1 = {
  path: "/",
  img: cardImg,
  id: 11,
  ttl: "Python for Data Analysis & Visualization",
  authDet:
    "José Portilla, Pierian Data - Master data analysis with pandas, matplotlib, and seaborn for real-world insights.",
  prc: 499,
  oldprc: 2999,
  stars: { a: 4, b: 5, c: 4, d: 2, e: 1 },
  noOfRats: 145230,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1100000,
  level: "Intermediate Level",
  crsSubtxt:
    "Python for Data Analysis: Master pandas, numpy, and visualization libraries for data science.",
};

const recCrs2 = {
  path: "/",
  img: showcaseImg5,
  id: 12,
  ttl: "React - The Complete Guide 2024",
  authDet:
    "Maximilian Schwarzmüller, Academind - Learn React 18 with hooks, context API, and modern component patterns.",
  prc: 599,
  oldprc: 3399,
  stars: { a: 5, b: 4, c: 4, d: 2, e: 1 },
  noOfRats: 287654,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1500000,
  level: "Intermediate Level",
  crsSubtxt:
    "React - The Complete Guide: Master React hooks, state management, and modern development practices.",
};

const recCrs3 = {
  path: "/",
  img: cardImg2,
  id: 13,
  ttl: "Node.js, Express & MongoDB: The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller, Academind - Build backend applications with Node.js, Express, and MongoDB database.",
  prc: 549,
  oldprc: 3299,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 156432,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1400000,
  level: "Intermediate Level",
  crsSubtxt:
    "Node.js & Express: Learn backend development with databases and REST APIs.",
};

const recCrs4 = {
  path: "/",
  img: showcaseImg6,
  id: 14,
  ttl: "Advanced TypeScript: Advanced Types & Generics",
  authDet:
    "Stephen Grider, developeeverything - Master advanced TypeScript features for production applications.",
  prc: 459,
  oldprc: 2999,
  stars: { a: 5, b: 4, c: 4, d: 1, e: 0 },
  noOfRats: 98765,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 900000,
  level: "Advanced Level",
  crsSubtxt:
    "Advanced TypeScript: Master generics, utility types, and advanced patterns.",
};

const recCrs5 = {
  path: "/",
  img: cardImg3,
  id: 15,
  ttl: "Docker & Kubernetes: The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller - Deploy applications with Docker containers and Kubernetes orchestration.",
  prc: 529,
  oldprc: 3199,
  stars: { a: 4, b: 5, c: 4, d: 2, e: 1 },
  noOfRats: 112456,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1200000,
  level: "Intermediate Level",
  crsSubtxt:
    "Docker & Kubernetes: Learn containerization and orchestration for production deployments.",
};

// Additional Popular Courses
const popCrs1 = {
  path: "/",
  img: cardImg2,
  id: 16,
  ttl: "Web Design for Web Developers: Build Beautiful Websites",
  authDet:
    "Jonas Schmedtmann - Create stunning, modern websites using HTML5, CSS3, and design principles.",
  prc: 449,
  oldprc: 2699,
  stars: { a: 4, b: 5, c: 4, d: 3, e: 1 },
  noOfRats: 234567,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Beginner Level",
  crsSubtxt:
    "Web Design: Master modern design principles and build beautiful responsive websites.",
};

const popCrs2 = {
  path: "/",
  img: showcaseImg,
  id: 17,
  ttl: "JavaScript Algorithms + Data Structures",
  authDet:
    "Colt Steele - Solve coding problems with JavaScript. Master algorithms and data structures.",
  prc: 489,
  oldprc: 2999,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 301234,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1100000,
  level: "Intermediate Level",
  crsSubtxt:
    "JavaScript Algorithms: Master data structures and algorithms for technical interviews.",
};

const popCrs3 = {
  path: "/",
  img: showcaseImg3,
  id: 18,
  ttl: "Vue - The Complete Guide 2024",
  authDet:
    "Maximilian Schwarzmüller - Master Vue 3 with composition API and modern development patterns.",
  prc: 579,
  oldprc: 3299,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 156234,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1400000,
  level: "Intermediate Level",
  crsSubtxt:
    "Vue - The Complete Guide: Learn Vue 3 with composition API and routing.",
};

const popCrs4 = {
  path: "/",
  img: cardImg,
  id: 19,
  ttl: "Machine Learning Specialization",
  authDet:
    "Andrew Ng - Learn machine learning fundamentals with hands-on projects and real-world applications.",
  prc: 699,
  oldprc: 3999,
  stars: { a: 5, b: 4, c: 4, d: 2, e: 1 },
  noOfRats: 189456,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1600000,
  level: "Intermediate Level",
  crsSubtxt:
    "Machine Learning: Master ML algorithms, neural networks, and real-world applications.",
};

// Additional Trending Courses
const trendCrs6 = {
  path: "/",
  img: cardImg3,
  id: 20,
  ttl: "Angular - The Complete Guide 2024",
  authDet:
    "Maximilian Schwarzmüller - Master Angular with TypeScript, RxJS, and dependency injection.",
  prc: 539,
  oldprc: 3199,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 98765,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1500000,
  level: "Intermediate Level",
  crsSubtxt:
    "Angular Complete Guide: Master TypeScript and modern Angular development.",
};

const trendCrs7 = {
  path: "/",
  img: showcaseImg5,
  id: 21,
  ttl: "GraphQL - The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller - Build modern APIs with GraphQL and Apollo Server.",
  prc: 479,
  oldprc: 2899,
  stars: { a: 4, b: 5, c: 4, d: 2, e: 1 },
  noOfRats: 87654,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Intermediate Level",
  crsSubtxt:
    "GraphQL Complete Guide: Learn GraphQL, Apollo Server, and modern API development.",
};

const trendCrs8 = {
  path: "/",
  img: cardImg2,
  id: 22,
  ttl: "Svelte & SvelteKit: The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller - Master Svelte and SvelteKit for ultra-fast web applications.",
  prc: 459,
  oldprc: 2599,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 45678,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 900000,
  level: "Intermediate Level",
  crsSubtxt:
    "Svelte & SvelteKit: Learn modern reactive framework for high performance.",
};

const trendCrs9 = {
  path: "/",
  img: showcaseImg6,
  id: 23,
  ttl: "Next.js 14: The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller - Build full-stack web applications with Next.js 14.",
  prc: 599,
  oldprc: 3399,
  stars: { a: 5, b: 4, c: 4, d: 1, e: 0 },
  noOfRats: 234567,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1700000,
  level: "Intermediate Level",
  crsSubtxt:
    "Next.js 14: Master server-side rendering, API routes, and full-stack development.",
};

// Additional Recommended Courses
const recCrs6 = {
  path: "/",
  img: showcaseImg4,
  id: 24,
  ttl: "Flutter & Dart: The Complete Guide",
  authDet:
    "Maximilian Schwarzmüller - Build iOS and Android apps with Flutter framework.",
  prc: 549,
  oldprc: 3199,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 123456,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1300000,
  level: "Intermediate Level",
  crsSubtxt:
    "Flutter & Dart: Build cross-platform mobile apps with Flutter framework.",
};

const recCrs7 = {
  path: "/",
  img: cardImg,
  id: 25,
  ttl: "C++ Programming: From Basics to Mastery",
  authDet:
    "Bjarne Stroustrup - Learn C++ from fundamentals to advanced OOP concepts.",
  prc: 499,
  oldprc: 2999,
  stars: { a: 4, b: 5, c: 4, d: 2, e: 1 },
  noOfRats: 87654,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1400000,
  level: "Intermediate Level",
  crsSubtxt:
    "C++ Programming: Master C++ for systems programming and game development.",
};

const recCrs8 = {
  path: "/",
  img: cardImg3,
  id: 26,
  ttl: "Java Programming: Mastery Unlocked",
  authDet:
    "Tim Buchalka - Learn Java from basics to advanced with real-world projects.",
  prc: 519,
  oldprc: 3099,
  stars: { a: 5, b: 4, c: 3, d: 1, e: 0 },
  noOfRats: 145678,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1500000,
  level: "Intermediate Level",
  crsSubtxt:
    "Java Programming: Master Java with OOP, design patterns, and spring boot.",
};

const recCrs9 = {
  path: "/",
  img: showcaseImg2,
  id: 27,
  ttl: "Salesforce Administrator Certification",
  authDet:
    "Naresh IT - Complete Salesforce certification prep and hands-on training.",
  prc: 449,
  oldprc: 2699,
  stars: { a: 4, b: 5, c: 4, d: 3, e: 1 },
  noOfRats: 56789,
  updatedDate: new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(new Date()),
  courseDuration: 1000000,
  level: "Beginner Level",
  crsSubtxt:
    "Salesforce Administrator: Learn admin setup, configuration, and maintenance.",
};

const coursesData = [
  crsData,
  crsData2,
  crsData3,
  crsData4,
  crsData5,
  popCrs1,
  popCrs2,
  popCrs3,
  popCrs4,
  recCrs1,
  recCrs2,
  recCrs3,
];
const coursesData2 = [
  trendCrs1,
  trendCrs2,
  trendCrs3,
  trendCrs4,
  trendCrs5,
  trendCrs6,
  trendCrs7,
  trendCrs8,
  trendCrs9,
  recCrs6,
  recCrs7,
  recCrs8,
];
const coursesData3 = [
  recCrs1,
  recCrs2,
  recCrs3,
  recCrs4,
  recCrs5,
  recCrs6,
  recCrs7,
  recCrs8,
  recCrs9,
  popCrs1,
  popCrs2,
  popCrs3,
];

const crsDataWO = {
  path: "/course/view/video",
  img: cardImg3,
  id: 1,
  ttl: "Learn Python: The Complete Python Programming Course Learn Python: The Complete Python Programming Course",
  author: "Koushil Mankali",
  ratings: 2.5,
  courseCoveredPercent: 22.4,
};

const javaCrsDataWO = {
  path: "/course/view/java",
  img: cardImg2,
  id: 7,
  ttl: "Full-Stack Java Developer Course with Spring Boot 4 & React",
  author: "Ramesh Fadatare",
  ratings: 4.4,
  courseCoveredPercent: 100,
};

const courseDataWithOptions = [
  javaCrsDataWO,
];

const det = {
  ttl: "Become an instructor",
  desc: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
  btnTxt: "Start teaching today",
  btnLink: "/start-teaching",
  img: showcaseImg,
  dir: "left",
};
const det2 = {
  ttl: "Udemy Bussiness",
  desc: "Get unlimited access to 17,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.",
  btnTxt: "Get Udemy Business",
  btnLink: "/start-teaching",
  img: showcaseImg2,
  dir: "right",
};
const det3 = {
  ttl: "Transform your life through education",
  desc: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
  btnTxt: "Find out how",
  btnLink: "/start-teaching",
  img: showcaseImg3,
  dir: "left",
};

const bannerData = [
  {
    id: 1,
    img: bannerImg1,
    link: null,
    boxData: {
      ttl: "Learning that gets you",
      desc: "Skills for your present (and your future). Get started with us.",
    },
  },
  {
    id: 2,
    img: bannerImg2,
    link: "/request-a-demo",
    boxData: {
      ttl: "Unlock the power of your people",
      desc: "Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.",
    },
  },
  {
    id: 3,
    img: bannerImg3,
    link: null,
    boxData: {
      ttl: "Code your future",
      desc: "Take control of your career. Learn the latest skills in web development.",
    },
  },
];

const categoriesData = [
  {
    id: 1,
    link: "/",
    txt: "React Js",
  },
  {
    id: 2,
    link: "/",
    txt: "MongoDB",
  },
  {
    id: 3,
    link: "/",
    txt: "Node Js",
  },
  {
    id: 4,
    link: "/",
    txt: "Express Js",
  },
  {
    id: 5,
    link: "/",
    txt: "Flask",
  },
  {
    id: 6,
    link: "/",
    txt: "SQL",
  },
  {
    id: 7,
    link: "/",
    txt: "JavaScript",
  },
  {
    id: 8,
    link: "/",
    txt: "Web Development",
  },
  {
    id: 9,
    link: "/",
    txt: "TypeScript",
  },
  {
    id: 10,
    link: "/",
    txt: "Nest Js",
  },
  {
    id: 11,
    link: "/",
    txt: "Next Js",
  },
  {
    id: 12,
    link: "/",
    txt: "Web HTML",
  },
  {
    id: 13,
    link: "/",
    txt: "CSS",
  },
  {
    id: 14,
    link: "/",
    txt: "Python",
  },
];

const categoriesSubCategoriesData = [
  {
    id: 1,
    ttl: "Development",
    link: "/",
    subCatId: "subCat-1",
    sub: [
      { id: 1, ttl: "Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 2,
    ttl: "Business",
    link: "/",
    subCatId: "subCat-2",
    sub: [
      { id: 1, ttl: "Business", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
      { id: 7, ttl: "Web Development", link: "/" },
    ],
  },
  {
    id: 3,
    ttl: "Finance & Accounting",
    link: "/",
    subCatId: "subCat-3",
    sub: [
      { id: 1, ttl: "Finance & Accounting", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
      { id: 7, ttl: "Web Development", link: "/" },
    ],
  },
  {
    id: 4,
    ttl: "IT & Software",
    link: "/",
    subCatId: "subCat-4",
    sub: [
      { id: 1, ttl: "Web Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 5,
    ttl: "Office Productivity",
    link: "/",
    subCatId: "subCat-5",
    sub: [
      { id: 1, ttl: "Web Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 6,
    ttl: "Personal Development",
    link: "/",
    subCatId: "subCat-6",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 7,
    ttl: "Game Development",
    link: "/",
    subCatId: "subCat-7",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 8,
    ttl: "Data Science",
    link: "/",
    subCatId: "subCat-8",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 9,
    ttl: "Software Development Tools",
    link: "/",
    subCatId: "subCat-9",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
  {
    id: 10,
    ttl: "No-code Development",
    link: "/",
    subCatId: "subCat-10",
    sub: [
      { id: 1, ttl: "Personal Development", link: "/" },
      { id: 2, ttl: "Mobile Development", link: "/" },
      { id: 3, ttl: "Web Development", link: "/" },
      { id: 4, ttl: "Mobile Development", link: "/" },
      { id: 5, ttl: "Web Development", link: "/" },
      { id: 6, ttl: "Mobile Development", link: "/" },
    ],
  },
];

const categorySubCategoriesData = {
  id: 1,
  ttl: "Development",
  link: "/",
  subCatId: "subCat-1",
  sub: [
    { id: 1, ttl: "Development", link: "/" },
    { id: 2, ttl: "Mobile Development", link: "/" },
    { id: 3, ttl: "Game Development", link: "/" },
    { id: 4, ttl: "App Development", link: "/" },
    { id: 5, ttl: "Cinema", link: "/" },
    { id: 6, ttl: "Photoshope", link: "/" },
    { id: 7, ttl: "Python", link: "/" },
    { id: 8, ttl: "Javascript", link: "/" },
    { id: 9, ttl: "HTML", link: "/" },
    { id: 10, ttl: "CSS", link: "/" },
    { id: 11, ttl: "PHP", link: "/" },
    { id: 12, ttl: "Camera", link: "/" },
    { id: 13, ttl: "Cinema", link: "/" },
    { id: 14, ttl: "Photoshope", link: "/" },
    { id: 15, ttl: "Python", link: "/" },
    { id: 16, ttl: "Javascript", link: "/" },
    { id: 17, ttl: "HTML", link: "/" },
    { id: 18, ttl: "CSS", link: "/" },
    { id: 19, ttl: "PHP", link: "/" },
    { id: 20, ttl: "Camera", link: "/" },
  ],
};

const coursesInCartData = [
  {
    id: 1,
    ttl: "Learn Python: The Complete Python Programming Course",
    img: cardImg,
    price: "3399",
  },
  {
    id: 2,
    ttl: "Learn Python: The Complete Python Programming Course",
    img: cardImg,
    price: "3399",
  },
  {
    id: 3,
    ttl: "Full-Stack Java Developer Course with Spring Boot 4 & React",
    img: cardImg2,
    price: "2499",
  },
];

const countryOptions = [
  { txt: "Bhutan", value: "bhutan" },
  { txt: "India", value: "india" },
];
const stateOptions = [
  { txt: "Telangana", value: "telangana" },
  { txt: "Andhra Pradesh", value: "andhra pradesh" },
];

const BigVerticalCourseCardData = [
  {
    id: 1,
    img: cardImg,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
  {
    id: 2,
    img: cardImg2,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
  {
    id: 3,
    img: cardImg3,
    ttl: "Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols Fundamentals of Backend Communications and Protocols",
    desc: "Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying Understand backend communication design patterns, protocols, execution and proxying",
    author: "Koushil Mankali",
    lastUpdated: new Date(),
    dur: 12,
    lectures: 22,
    level: "Intermediate",
    rats: 4.2,
    rated: 266,
    tag: "Highest Rated",
    price: 389,
    oPrice: 3499,
  },
];

const popularInstructorsData = [
  {
    id: 1,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 2,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 3,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 4,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 5,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 6,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 7,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 8,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
  {
    id: 9,
    name: "Koushil Mankali",
    img: cardImg,
    majorLang: ["React Js", "React Native"],
    rating: 4.2,
    students: 39000,
    courses: 40,
  },
  {
    id: 10,
    name: "Nani Mankali",
    img: cardImg,
    majorLang: ["Python", "MySql"],
    rating: 3.8,
    students: 21000,
    courses: 22,
  },
];

const filtersData = [
  {
    id: "fd-1",
    title: "Ratings",
    slug: "ratings",
    type: "radio",
    filtersData: [
      { txt: "4.5 & up", count: "9998", stars: true, value: "4.5" },
      { txt: "4.0 & up", count: "10000", stars: true, value: "4.0" },
      { txt: "3.5 & up", count: "10000", stars: true, value: "3.5" },
      { txt: "3.0 & up", count: "10000", stars: true, value: "3.0" },
    ],
  },
  {
    id: "fd-2",
    title: "Video Duration",
    slug: "duration",
    type: "checkbox",
    filtersData: [
      { txt: "0-1 Hour", count: "1442", stars: false, value: "extraShort" },
      { txt: "1-3 Hours", count: "6918", stars: false, value: "short" },
      { txt: "3-6 Hours", count: "7240", stars: false, value: "medium" },
      { txt: "6-7 Hours", count: "8498", stars: false, value: "large" },
      { txt: "17+ Hours", count: "3502", stars: false, value: "extraLarge" },
    ],
  },
  {
    id: "fd-3",
    title: "Topic",
    slug: "topic",
    type: "checkbox",
    filtersData: [
      { txt: "Python", count: "1442", stars: false, value: "Python" },
      { txt: "JavaScript", count: "6918", stars: false, value: "JavaScript" },
      { txt: "React", count: "7240", stars: false, value: "React" },
      { txt: "NodeJs", count: "8498", stars: false, value: "NodeJs" },
      { txt: "Remix", count: "3502", stars: false, value: "Remix" },
    ],
  },
];

const toolsResources = [
  {
    id: "tr-1",
    icon: teachIcon,
    ttl: "Test Video",
    txt: "Get free feedback from Udemy video experts on your audio, video, and delivery.",
  },
  {
    id: "tr-2",
    icon: groupUsersIcon,
    ttl: "Marketplace Insights",
    txt: "Get Udemy-wide market data to create successful courses.",
  },
  {
    id: "tr-3",
    icon: askIcon,
    ttl: "Bulk coupon creation",
    txt: "Create multiple coupons at once via CSV upload.",
  },
];
const helpResources = [
  {
    id: "hr-1",
    icon: teachIcon,
    ttl: "Teaching Center",
    txt: "Find articles on Udemy teaching — from course creation to marketing.",
  },
  {
    id: "hr-2",
    icon: groupUsersIcon,
    ttl: "Instructor Community",
    txt: "Share your progress and ask other instructors questions in our community.",
  },
  {
    id: "hr-3",
    icon: askIcon,
    ttl: "Help and Support",
    txt: "Can’t find what you need? Our support team is happy to help.",
  },
];

export {
  toolsResources,
  helpResources,
  filtersData,
  popularInstructorsData,
  BigVerticalCourseCardData,
  coursesInCartData,
  coursesData2,
  coursesData3,
  courseDataWithOptions,
  countryOptions,
  stateOptions,
  categoriesData,
  categoriesSubCategoriesData,
  categorySubCategoriesData,
  bannerData,
  det,
  det2,
  det3,
  coursesData,
  Learnings,
  courseIncludes,
  courseDetails,
  courseData,
  courseReq,
  desc,
  courseDetData,
  moreCourses,
  instructorData,
  featuredReviewUserData,
};
