
export interface UserStats {
  steps: number;
  stepGoal: number;
  calories: number;
  distance: number;
  heartRate: number;
  activeMinutes: number;
}

export interface Workout {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
}

export interface ActivityData {
  day: string;
  steps: number;
  calories: number;
}

export enum Tab {
  Dashboard = 'dashboard',
  Stats = 'stats',
  Workouts = 'workouts',
  Profile = 'profile'
}
