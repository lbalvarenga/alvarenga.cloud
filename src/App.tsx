import "./App.css";
import { MyPdfViewer } from "./pdf";

function App() {
  return (
    <>
      <img src="/favicon.png" width="180" id="icon" />
      <h1>Lucas Alvarenga</h1>
      <hr></hr>
      <h2>Cloud Architect; DevOps; Fullstack</h2>
      <div id="links">
        <a href="mailto:lucas@alvarenga.cloud?subject=Contact">Email</a>
        <a
          href="https://www.linkedin.com/in/lal-lucas-alvarenga/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://www.github.com/lbalvarenga/" target="_blank">
          GitHub
        </a>
      </div>
      <MyPdfViewer />
    </>
  );
}

export default App;
