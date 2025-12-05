'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (userData: Omit<User, 'id' | 'isGymVerified' | 'isPremium' | 'hasGeneticData' | 'points' | 'rank' | 'connectedUsers' | 'pendingConnections' | 'metrics' | 'achievements' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // TODO: Verify token with backend
          // const response = await fetch('/api/auth/me', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // if (response.ok) {
          //   const userData = await response.json();
          //   setUser(userData);
          // }
        } catch (error) {
          console.error('Authentication check failed:', error);
          localStorage.removeItem('token');
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || 'Login failed');
      
      // Mock response for now
      const mockUser: User = {
        id: 'user-123',
        username,
        phoneNumber: '+989123456789',
        gender: 'male',
        gymId: 'gym-1',
        isGymVerified: true,
        isPremium: false,
        hasGeneticData: false,
        points: 1250,
        rank: 42,
        connectedUsers: [],
        pendingConnections: [],
        metrics: {
          caloriesBurned: { current: 1250, goal: 2000, history: [], unit: 'kcal' },
          workoutDuration: { current: 45, goal: 60, history: [], unit: 'min' },
          avgHeartRate: { current: 72, goal: 65, history: [], unit: 'bpm' },
          trimp: { current: 85, goal: 100, history: [], unit: 'points' },
          vo2max: { current: 42, goal: 50, history: [], unit: 'ml/kg/min' },
          lastUpdated: new Date().toISOString()
        },
        achievements: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('token', 'mock-jwt-token');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (userData: any) => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || 'Signup failed');
      
      // After successful signup, log the user in
      await login(userData.username, userData.password);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    router.push('/login');
  };

  const checkAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
      // TODO: Verify token with backend
      // const response = await fetch('/api/auth/verify', {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // return response.ok;
      return true; // Mock for now
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, checkAuth }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
