export interface User {
  id: string;
  username: string;
  phoneNumber: string;
  gender: 'male' | 'female' | 'other';
  gymId: string;
  isGymVerified: boolean;
  isPremium: boolean;
  hasGeneticData: boolean;
  points: number;
  rank: number;
  connectedUsers: string[];
  pendingConnections: string[];
  metrics: UserMetrics;
  achievements: Achievement[];
  createdAt: string;
  updatedAt: string;
}

export interface Gym {
  id: string;
  name: string;
  location: string;
  logo: string;
  pendingVerifications: string[];
}

export interface UserMetrics {
  caloriesBurned: MetricData;
  workoutDuration: MetricData;
  avgHeartRate: MetricData;
  trimp: MetricData;
  vo2max: MetricData;
  lastUpdated: string;
}

export interface MetricData {
  current: number;
  goal: number;
  history: { date: string; value: number }[];
  unit: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  metric: keyof UserMetrics;
  startDate: string;
  endDate: string;
  reward: string;
  participants: string[];
  winner?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  workouts: Workout[];
  nutritionPlan: NutritionPlan;
  isActive: boolean;
}

export interface Workout {
  id: string;
  day: number;
  exercises: Exercise[];
  duration: number;
  focus: string[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: number;
  notes: string;
}

export interface NutritionPlan {
  meals: Meal[];
  dailyCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  waterIntake: number;
  supplements: Supplement[];
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  foods: FoodItem[];
  notes: string;
}

export interface FoodItem {
  id: string;
  name: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface Supplement {
  id: string;
  name: string;
  dosage: string;
  time: string;
  notes: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  createdAt: string;
  isPrivate: boolean;
  tags: string[];
  metrics: {
    similarityScore: number;
    sharedGoals: string[];
    geneticMatches: string[];
  };
}
