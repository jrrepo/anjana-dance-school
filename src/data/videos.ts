export type VideoCategory =
  | 'Stage Performances'
  | 'Competitions'
  | 'Practice Sessions'
  | 'Student Highlights';

export interface Video {
  title: string;
  videoId: string;
  category: VideoCategory;
}

export const videos: Video[] = [
  {
    title: 'ADS Kids 3 Event Performance 1',
    videoId: 'S4plHTJbhr4',
    category: 'Stage Performances',
  },
  {
    title: 'ADS Kids 3 Event Performance 2',
    videoId: 'sSKj4FmEaUc',
    category: 'Stage Performances',
  },
  {
    title: 'ADS Kids 3 Competition Feature',
    videoId: '6wdyxtXm6lI',
    category: 'Competitions',
  },
  {
    title: 'ADS Kids 3 Practice Session',
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
