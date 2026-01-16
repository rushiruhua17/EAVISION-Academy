import { DroneModel, CourseSeries, TrainingVideo } from './types';

export const DRONE_MODELS: DroneModel[] = [
  {
    id: 'ea-j160',
    name: 'EA-J160 农业无人机',
    image: 'https://picsum.photos/400/300?random=j160', 
    type: 'agriculture'
  },
  {
    id: 'ea-j150-70',
    name: 'EA-J150/70 农业无人机',
    image: 'https://picsum.photos/400/300?random=j150',
    type: 'agriculture'
  },
  {
    id: 'ea-j100',
    name: 'EA-J100 农业无人机',
    image: 'https://picsum.photos/400/300?random=j100',
    type: 'agriculture'
  }
];

// Helper to generate lesson thumbnails
const getThumb = (id: number) => `https://picsum.photos/300/200?random=${id + 20}`;

const J100_LESSONS: TrainingVideo[] = [
  { id: 'j100-l1', title: 'Lesson 1 - Introduction', duration: '03:45', thumbnail: getThumb(1), category: 'beginner', description: 'Course Overview and what to expect.' },
  { id: 'j100-l2', title: 'Lesson 2 - Regulations', duration: '05:20', thumbnail: getThumb(2), category: 'beginner', description: 'Important safety regulations and compliance.' },
  { id: 'j100-l3', title: 'Lesson 3 - Activation & Updating', duration: '06:15', thumbnail: getThumb(3), category: 'beginner', description: 'How to activate your drone and update firmware.' },
  { id: 'j100-l4', title: 'Lesson 4 - App Navigation & Settings', duration: '08:30', thumbnail: getThumb(4), category: 'beginner', description: 'Deep dive into the EAVision Flight App.' },
  { id: 'j100-l5', title: 'Lesson 5 - Basic Boundary Creation', duration: '10:00', thumbnail: getThumb(5), category: 'functional', description: 'Mapping your field boundaries accurately.' },
  { id: 'j100-l6', title: 'Lesson 6 - Advanced Plot Editing', duration: '12:45', thumbnail: getThumb(6), category: 'functional', description: 'Modifying plots for complex terrains.' },
  { id: 'j100-l7', title: 'Lesson 7 - Other Plot Creation Methods', duration: '07:20', thumbnail: getThumb(7), category: 'functional', description: 'Using RTK handhelds and other tools.' },
  { id: 'j100-l8', title: 'Lesson 8 - Autonomous Mission', duration: '15:10', thumbnail: getThumb(8), category: 'functional', description: 'Executing fully autonomous flight missions.' },
  { id: 'j100-l9', title: 'Lesson 9 - CRM System & Data', duration: '09:00', thumbnail: getThumb(9), category: 'functional', description: 'Managing flight data and records.' },
  { id: 'j100-l10', title: 'Lesson 10 - Field Operation Considerations', duration: '11:30', thumbnail: getThumb(10), category: 'functional', description: 'Real-world field operation tips.' },
  { id: 'j100-l11', title: 'Lesson 11 - Basic Maintenance', duration: '06:50', thumbnail: getThumb(11), category: 'maintenance', description: 'Routine cleaning and checks.' },
  { id: 'j100-l12', title: 'Lesson 12 - Warranty', duration: '04:00', thumbnail: getThumb(12), category: 'maintenance', description: 'Understanding your warranty coverage.' },
  { id: 'j100-l13', title: 'Lesson 13 - Final Tips & Resources', duration: '03:10', thumbnail: getThumb(13), category: 'beginner', description: 'Additional resources for success.' },
];

const STANDARD_VIDEOS: TrainingVideo[] = [
  { id: 'v1', title: '开箱与组装指南', duration: '05:20', thumbnail: getThumb(14), category: 'beginner', description: '从零开始了解您的设备' },
  { id: 'v2', title: '飞行前安全检查', duration: '03:15', thumbnail: getThumb(15), category: 'beginner', description: '确保每一次起飞都安全' },
  { id: 'v3', title: '遥控器基础操作', duration: '08:45', thumbnail: getThumb(16), category: 'beginner', description: '掌握核心操控技巧' },
  { id: 'v4', title: 'RTK基站架设教程', duration: '06:30', thumbnail: getThumb(17), category: 'functional', description: '高精度定位作业的前提' },
  { id: 'v5', title: '全自主测绘作业流程', duration: '12:10', thumbnail: getThumb(18), category: 'functional', description: '高效地块规划与测绘' },
  { id: 'v6', title: '果树模式喷洒作业', duration: '15:00', thumbnail: getThumb(19), category: 'functional', description: '针对复杂地形的果树作业' },
  { id: 'v7', title: '日常维护与保养', duration: '04:50', thumbnail: getThumb(20), category: 'maintenance', description: '延长设备使用寿命' },
];

export const COURSE_DATA: Record<string, CourseSeries> = {
  'ea-j160': {
    modelId: 'ea-j160',
    beginnerSeries: STANDARD_VIDEOS.filter(v => v.category === 'beginner'),
    functionalSeries: STANDARD_VIDEOS.filter(v => v.category !== 'beginner')
  },
  'ea-j150-70': {
    modelId: 'ea-j150-70',
    beginnerSeries: STANDARD_VIDEOS.filter(v => v.category === 'beginner'),
    functionalSeries: STANDARD_VIDEOS.filter(v => v.category === 'functional').slice(0, 3)
  },
  'ea-j100': {
    modelId: 'ea-j100',
    // For J100, we use the specific lessons. We'll populate beginnerSeries with all of them for the 'Course Overview' view.
    beginnerSeries: J100_LESSONS,
    functionalSeries: [] 
  }
};