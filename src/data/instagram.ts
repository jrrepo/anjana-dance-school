import eventImage from '../assets/gallery/img_8_1778599918030.jpg';
import performanceImage from '../assets/gallery/img_3_1778599900424.jpg';
import practiceImage from '../assets/gallery/IMG-20260301-WA0045.jpg';
import kidsImage from '../assets/gallery/20250426_190251.jpg';
import stageImage from '../assets/hero/IMG-20251018-WA0193.jpg';
import brandImage from '../assets/references/Instagram-post.png';

export type InstagramPostType = 'reel' | 'performance' | 'practice' | 'event';

export interface InstagramPost {
  id: string;
  title: string;
  image: ImageMetadata;
  type: InstagramPostType;
  caption: string;
  instagramUrl: string;
}

export const instagramProfileUrl = 'https://www.instagram.com/';

export const instagramPosts: InstagramPost[] = [
  {
    id: 'ads-event-stage',
    title: 'Stage Energy',
    image: stageImage,
    type: 'performance',
    caption: 'Bright stage lights, bold choreography, and confident ADS dancers in motion.',
    instagramUrl: instagramProfileUrl,
  },
  {
    id: 'ads-kids-reel',
    title: 'Kids 3 Moment',
    image: eventImage,
    type: 'reel',
    caption: 'A reel-ready highlight from our young dancers bringing color and joy to the stage.',
    instagramUrl: instagramProfileUrl,
  },
  {
    id: 'ads-practice-focus',
    title: 'Practice Focus',
    image: practiceImage,
    type: 'practice',
    caption: 'Behind the scenes: discipline, smiles, and the repetition that builds confidence.',
    instagramUrl: instagramProfileUrl,
  },
  {
    id: 'ads-performance-flow',
    title: 'Performance Flow',
    image: performanceImage,
    type: 'performance',
    caption: 'Formation work and cinematic movement shaped for memorable performances.',
    instagramUrl: instagramProfileUrl,
  },
  {
    id: 'ads-student-spotlight',
    title: 'Student Spotlight',
    image: kidsImage,
    type: 'event',
    caption: 'Little dancers, big personality, and the first sparks of stage presence.',
    instagramUrl: instagramProfileUrl,
  },
  {
    id: 'ads-brand-post',
    title: 'Dance Is My Superpower',
    image: brandImage,
    type: 'reel',
    caption: 'Follow ADS for performance clips, event updates, and creative dance moments.',
    instagramUrl: instagramProfileUrl,
  },
];
