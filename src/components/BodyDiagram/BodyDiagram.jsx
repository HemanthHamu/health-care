import "./bodydiagram.css";
import bodyImage from "../../assets/bodyImage.jpg";
export default function BodyDiagram() {
  return (
    <div className="body-diagram">
      <div className="image-container">
        <img src={bodyImage} alt="Human Body" />
        <div className="labels">
          <span className="heart">❤️ Healthy Heart</span>
          <span className="leg">🦵 Healthy Leg</span>
        </div>
      </div>
    </div>
  );
}
