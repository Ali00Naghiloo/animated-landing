import BioSceneText from "./bioSceneText/BioSceneText";
import BioSceneRing from "./bioSceneRing/BioSceneRing";

export default function TopSection() {
  return (
    <div>
      <BioSceneRing />
      <BioSceneText />
    </div>
  );
}
