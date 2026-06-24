export type VideoCategory =
  | 'Stage Performances'
  | 'Competitions'
  | 'Practice Sessions'
  | 'Student Highlights';

export interface Video {
  title: string;
  videoId: string;
  category: VideoCategory;
  isHighlight?: boolean;
}

export const youtubeHandle = '@AnjanaDanceSchool-v3q';
export const youtubeChannelUrl = 'https://www.youtube.com/@AnjanaDanceSchool-v3q';

export const videos: Video[] = [
  {
    title: 'ADS Kids Cinematic Event Highlight',
    videoId: 'S4plHTJbhr4',
    category: 'Stage Performances',
    isHighlight: true,
  },
  {
    title: 'ADS Kids Event Performance 2',
    videoId: 'sSKj4FmEaUc',
    category: 'Stage Performances',
  },
  {
    title: 'ADS Kids Competition Highlight',
    videoId: '6wdyxtXm6lI',
    category: 'Competitions',
    isHighlight: true,
  },
  {
    title: 'ADS Kids Practice Session',
    videoId: '3MYLOquTazk',
    category: 'Practice Sessions',
  },
];

export const videoCategories: VideoCategory[] = [
  'Stage Performances',
  'Competitions',
  'Practice Sessions',
  'Student Highlights',
];

export const featuredVideo = videos[0];
export const highlightedVideos = videos.filter((video) => video.isHighlight);
