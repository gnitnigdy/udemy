import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  function Avatar() {
    return (
      <img
        src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg"
        alt="Foto Profil"
        className="avatar"
      />
    );
  }

  function Intro() {
    return (
      <p>
        Seorang Frontend Engineer adalah profesional yang bertanggung jawab
        untuk mengembangkan dan mengimplementasikan elemen-elemen visual pada
        sebuah website atau aplikasi yang berinteraksi langsung dengan pengguna.
        Mereka bekerja di sisi klien, yaitu bagian yang terlihat oleh pengguna,
        dan bertujuan untuk menciptakan pengalaman pengguna (user experience)
        yang optimal.
      </p>
    );
  }

  function Skill({ bgColor, txtSkill, level }) {
    return (
      <li style={{ backgroundColor: bgColor }} className="skill">
        {txtSkill}
        {level === "advanced"
          ? " 💪"
          : level === "intermediate"
          ? " 👍"
          : " 👶"}
      </li>
    );
  }

  function SkillList() {
    const skillSet = skills;
    return (
      <ul className="skill-list">
        {skillSet.map((skill) => {
          return (
            <Skill
              bgColor={skill.color}
              txtSkill={skill.skill}
              level={skill.level}
            />
          );
        })}
      </ul>
    );
  }
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
