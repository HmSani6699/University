import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoGalleryCart = ({ url }) => {
  return (
    <div className=" rounded-[10px]">
      <div className="rounded-[10px]   w-full overflow-hidden">
        <LiteYouTubeEmbed
          id={url}
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </div>
  );
};

export default VideoGalleryCart;
