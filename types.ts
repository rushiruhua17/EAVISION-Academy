export type PageView = 'main-site' | 'academy';

export type AcademyPage = 'home' | 'intro' | 'training' | 'advanced-training' | 'course-detail' | 'cooperation' | 'news' | 'knowledge' | 'faq' | 'network';

export interface DroneModel {
  id: string;
  name: string;
  image: string;
  type: 'agriculture' | 'industrial';
}

export interface CourseInfo {
  id: string;
  title: string;
  price: string;
  duration: string;
  image: string;
  desc: string;
  features?: string[];
  contentImages?: string[];
}

export type VideoCategory = 'beginner' | 'functional' | 'maintenance';

export interface TrainingVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  category: VideoCategory;
  description?: string;
}

export interface CourseSeries {
  modelId: string;
  beginnerSeries: TrainingVideo[];
  functionalSeries: TrainingVideo[];
}