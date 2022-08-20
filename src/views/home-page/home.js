import { SoundReaderComponent } from "../components/sound-reader/sound-reader";
import "./home.css";

export function HomePage() {
  return (
    <div>
      {/* <CardComponent
        imagePath="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        descriptionImage="Nature"
        title="Nature"
        description="artiste"
      /> */}
      <SoundReaderComponent />
    </div>
  );
}
