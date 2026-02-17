import { videoData } from "@/data/VideoData";
import VideoTitle from "@/components/VideoTitle";
import ChannelInfo from "@/components/ChannelInfo";
import ActionButtons from "@/components/ActionButtons";
import DescriptionBox from "@/components/DescriptionBox";
import CommentsSection from "@/components/CommentsSection";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <VideoTitle data={videoData} />
      <ChannelInfo channel={videoData.channel} />
      <ActionButtons likes={videoData.likes} />
      <DescriptionBox description={videoData.description} />
      <CommentsSection comments={videoData.comments} />
    </div>
  );
}
