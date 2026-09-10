import { withBasePath } from "@/lib/paths";
import { Section } from "./Section";
import { VideoCarousel } from "./VideoCarousel";

const videoGroups = [
  {
    title: "Ведущий в работе",
    description: "Фрагменты работы ведущего на мероприятиях.",
    videos: ["Vefushi1.mp4", "Vefushi2.mp4", "Vefushi3.mp4", "Vefushi4.mp4"].map((fileName, index) => ({
      src: withBasePath(`/videos/host/${fileName}`),
      title: `Ведущий в работе ${index + 1}`,
    })),
  },
  {
    title: "Джем-Бэнд live",
    description: "Живые выступления группы.",
    videos: ["band1.mp4", "band2.mp4", "band3.mp4", "band4.mp4", "band5.mp4", "band6.mp4"].map((fileName, index) => ({
      src: withBasePath(`/videos/band/${fileName}`),
      title: `Джем-Бэнд live ${index + 1}`,
    })),
  },
  {
    title: "Акустический вариант",
    description: "Более камерный акустический формат для площадок, где нужен спокойный музыкальный блок.",
    videos: ["Acoustic1.mp4", "Acoustic2.mp4"].map((fileName, index) => ({
      src: withBasePath(`/videos/acoustic/${fileName}`),
      title: `Акустический вариант ${index + 1}`,
    })),
  },
];

export function VideoSection() {
  return (
    <Section id="media" title="Видео" description="Фрагменты работы ведущего, живой группы и акустического формата">
      <div className="video-motion-root">
        <div className="video-carousel-grid" aria-label="Видео с мероприятий">
          {videoGroups.map((group) => (
            <VideoCarousel key={group.title} title={group.title} description={group.description} videos={group.videos} />
          ))}
        </div>
      </div>
    </Section>
  );
}
