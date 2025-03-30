import "./css/landing.css";
import heroImage from "./assets/hero.gif";
import heroImg from "./assets/hero-img1.png";
import projectsIcon from "./assets/clipboard.png";
import personalTaskIcon from "./assets/person.png";
import priorityIcon from "./assets/priority.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faListCheck, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import Personal from "./personal";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <main className="landing-page">
        <header>
          <nav className="navbar-home">
            <a className="logo-home-page" href="">
              <h1>TaskSify</h1>
            </a>
            <ul className="navbar-fitur">
              <li className="link-fitur">
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="">Fitur</a>
              </li>
              <li>
                <a href="">Kontak</a>
              </li>
              <button className="button-landing" onClick={() => navigate("/personal")}>
                Mulai Sekarang
              </button>
            </ul>
          </nav>
        </header>

        <section id="Home" className="home-page">
          <div className="container-home">
            <h1>TaskSify</h1>
            <h3>
              TaskSify adalah sebuah platform to-do list sederhana yang membantu Anda mengatur,
              mengelola, dan menyelesaikan tugas dengan lebih efisien. Dengan antarmuka yang
              intuitif dan fitur yang praktis, TaskSify dirancang untuk meningkatkan produktivitas
              Anda tanpa kerumitan.
            </h3>
            <button className="button-landing" onClick={() => navigate("/personal")}>
              Coba Sekarang
            </button>
          </div>
          <div className="container-home">
            <img src={heroImg} alt="hero-image" />
          </div>
        </section>

        <section id="Fitur" className="fitur-page">
          <h1>Fitur</h1>
          <p>Beberapa fitur yang tersedia di TaskSify</p>
          <div className="container-fitur">
            <div className="list-fitur">
              <img className="logo-fitur-page" src={projectsIcon} alt="" />
              <h3>Mengelola Proyek</h3>
              <p>
                Buat dan atur proyek dengan mudah, baik untuk pekerjaan tim maupun proyek pribadi.
                Anda dapat membagi proyek menjadi beberapa tugas kecil, sehingga lebih terstruktur
                dan mudah dikelola.
              </p>
            </div>
            <div className="list-fitur">
              <img className="logo-fitur-page" src={personalTaskIcon} alt="" />
              <h3>Mengatur tugas personal</h3>
              <p>
                Catat semua tugas harian Anda, mulai dari pekerjaan, belajar, hingga aktivitas
                pribadi. Dengan fitur ini, Anda dapat memastikan tidak ada tugas yang terlewat dan
                tetap terorganisir.
              </p>
            </div>
            <div className="list-fitur">
              <img className="logo-fitur-page" src={priorityIcon} alt="" />
              <h3>Menetapkan prioritas</h3>
              <p>
                Tandai tugas berdasarkan tingkat kepentingan dan urgensi. Dengan menetapkan
                prioritas, Anda bisa fokus menyelesaikan tugas yang lebih mendesak terlebih dahulu,
                sehingga pekerjaan menjadi lebih efektif.
              </p>
            </div>
          </div>
          <div className="container-fitur">
            <img src="" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
export default Landing;
