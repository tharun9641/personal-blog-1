import ind from "../logo/india.png";
import gb from "../logo/great-britain.png";
import cz from "../logo/'czech-republic.png";
import fr from "../logo/france.png";
import de from "../logo/germany.png";
import cn from "../logo/china.png";
import sp from "../logo/spain.png";
import foh from "../logo/FOH.jpg";
import se from "../logo/SE.jpg";
import set from "../logo/SET.jpg";
import sse from "../logo/SSE.jpg";
import rps from "../logo/rock-paper-scissor.jpg";
import mg from "../logo/memory.jpg";

export const countries = [ind, gb, cz, fr, de, cn, sp];
export const Languages = [
  "English",
  "Telugu",
  "Tamil",
  "Deutsche",
  "Mandarin",
  "Japanese",
];

export const todo = [
  "Cooking",
  "Travelling",
  "Badminton",
  "Origami",
  "Sketching",
];

export const about_bio =
  "I'm a passionate web developer with a strong interest in exploring cutting-edge technologies. I'm a lifelong learner who thrives on challenges and enjoys experimenting with new tools to enhance existing projects.";

export let about_content = `Recently, I've been delving into the world of CSS animations, Framer Motion, and even After Effects. It's been incredibly rewarding to unleash my creativity and add dynamic elements to my projects.

Currently based in London, I'm seeking opportunities to leverage my skills as a software developer.  I'm not only skilled in web development, but I also bring a genuine passion for the craft.

If you're looking for a skilled and enthusiastic developer, I'd love to connect and discuss how we can collaborate to create something truly unique.`;

export const FrontEnd = [
  "React",
  "Angular",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Blazor",
];
export const BackEnd = [".NET", ".NET Core", "C#", "Python", "ASP.NET"];
export const Database = ["SQL Server", "Firebase"];
export const Cloud = ["AWS", "Azure"];
export const testing = ["Cypress", "React Testing Library", "Redux", "Webpack"];

export const gapYear = [{ role: "Jnr FOH Manager" }];
export const Exp = [
  {
    role: "Senior Systems Engineer",
    code: "SSE",
    time: "Jun 2019 - Aug 2021",
    company: "Infosys Ltd",
    location: "Mysore",
    exp: [
      "After years of dedicated application development, I embraced the role of Senior Engineer with genuine excitement and passion. Collaborating with seasoned architects and a diverse team, we embarked on the thrilling journey of breathing life into innovative web applications. Together, we streamlined cumbersome manual processes, liberating valuable time and driving efficiency.",
      "As a mentor to budding developers, I guided them through the intricacies of agile development, fostering a culture of sustainability and continuous improvement. Juggling multiple hats in project management, I oversaw workflows, conducted meticulous code reviews, and facilitated seamless knowledge transfer.",
      "Driven by a fervor for enhancing user experiences, I immersed myself in UI design, fine-tuning interfaces based on stakeholder feedback. Embracing Test-Driven Development principles, I integrated this approach seamlessly into our processes, boosting developer contribution.",
      "Our quest for automation knew no bounds as I spearheaded efforts to manage and automate various deployments, leveraging cutting-edge technologies like AWS and Conversational AI. Collaboration was key, evident in our partnership with the testing team to ensure top-notch software quality.",
    ],
    img: sse,
  },
  {
    role: "Systems Engineer",
    code: "SE",
    time: "Jun 2018 - Jun 2019",
    company: "Infosys Ltd",
    location: "Mysore",
    exp: [
      "Transitioning to a Systems Engineer marked the start of an exhilarating journey in software engineering. Initially navigating unfamiliar territory, I embraced the challenge with enthusiasm, quickly adapting to the project's dynamics.",
      "My debut project with a legacy .NET application provided invaluable insights into project management. Fueled by a passion for innovation, I led strategic technology initiatives, championing Test-Driven Development to boost developer productivity.",
      "As a Full Stack Developer, I crafted clean, scalable code and owned CI/CD pipelines for seamless deployment. A highlight was creating a web-based tool using C# .NET and JavaScript, revolutionizing our data management processes.",
      "In my role as a Full Stack Developer, I meticulously crafted clean, scalable, and reusable code, drawing upon insights gleaned from analyzing application and programming documents. I took ownership of the Continuous Integration/Continuous Deployment (CI/CD) pipelines, ensuring seamless deployment, rigorous testing, and meticulous documentation of developed modules.",
      "Eager to broaden my skills, I immersed myself in full-stack developer training, exploring SaaS in the dynamic world of DevOps. This journey has equipped me to tackle new challenges and drive innovation in software engineering.",
    ],
    img: se,
  },
  {
    role: "Systems Engineer Trainee",
    code: "SET",
    time: "Jan 2018 - Jun 2018",
    company: "Infosys Ltd",
    location: "Mysore",
    exp: [
      "Embarking on my journey as a Systems Engineer Trainee marked a significant shift from electronics to Information Technology, a transition I found invigorating. The comprehensive trainee program provided me with foundational training in Python and .NET, enriching my skills in quantitative analysis, logical reasoning, design thinking, and collaboration.",
      "Entering the realm of IT, I embraced the opportunity to develop my first console application using Python, igniting my passion for web development. Exploring further, I delved into building web applications using .NET and Angular, finding each new challenge more exciting than the last.",
      "Being part of a dynamic team elevated my standards and fostered a collaborative environment where support and teamwork thrived. What began as six months of training felt like an enriching journey of growth and discovery.",
    ],
    img: set,
  },
  {
    role: "FOH Manager",
    code: "FOH",
    time: "Mar 2022 - Mar 2023",
    company: "wagamama Ltd",
    location: "London",
    exp: [
      "Venturing on a new journey in hospitality was like stepping into a vibrant world of opportunity. As I navigated the intricacies of restaurant operations, I discovered the art of efficient delegation, optimizing serving times, and fostering teamwork among our diverse staff. Through hands-on leadership and interactive sessions, I cultivated a positive work environment where every team member felt valued and empowered to contribute their best.",
      "In the realm of financial management, I honed my skills in accurate cash reconciliation and record-keeping, ensuring the smooth financial operation of the establishment. With each challenge I faced, I found new ways to innovate and inspire, creating lasting connections and memorable experiences for both customers and colleagues alike.",
    ],
    img: foh,
  },
];

export const exp_foh = [
  "Embarking on a new journey in hospitality was like stepping into a vibrant world of opportunity. As I navigated the intricacies of restaurant operations, I discovered the art of efficient delegation, optimizing serving times, and fostering teamwork among our diverse staff. Through hands-on leadership and interactive sessions, I cultivated a positive work environment where every team member felt valued and empowered to contribute their best.",
  "In the realm of financial management, I honed my skills in accurate cash reconciliation and record-keeping, ensuring the smooth financial operation of the establishment. With each challenge I faced, I found new ways to innovate and inspire, creating lasting connections and memorable experiences for both customers and colleagues alike.",
];

export const softskills = [
  "Communication",
  "Problem-Solving",
  "Collaboration & Teamwork",
  "Adaptability ",
  " Flexibility",
  "Time Management",
];

export const Projects = [
  {
    name: "Rock - Paper - Scissor",
    link: "https://gaming102.netlify.app",
    about: "A simple game of rock paper scissors.",
    img: rps,
  },
  {
    name: "Memory Game",
    link: "https://game-201.netlify.app",
    about: "How good is your memory? try and match them all.",
    img: mg,
  },
];
