'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Camera, Bell, Award, BookOpen, BarChart3, ChevronRight } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  requiresPhoto: boolean;
}

interface ChecklistSection {
  title: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  tasks: Task[];
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [checklists, setChecklists] = useState<ChecklistSection[]>([
    {
      title: 'Daily Tasks',
      frequency: 'daily',
      tasks: [
        { id: '1', title: 'Grease trap cleaning', completed: true, requiresPhoto: true },
        { id: '2', title: 'Grease trap cleaning', completed: false, requiresPhoto: true },
        { id: '3', title: 'Grease trap above cleaning', completed: false, requiresPhoto: true },
        { id: '4', title: 'Photo temperature logging', completed: false, requiresPhoto: true },
        { id: '5', title: 'Sump verification tracking', completed: false, requiresPhoto: true },
      ],
    },
    {
      title: 'Weekly Tasks',
      frequency: 'weekly',
      tasks: [
        { id: '6', title: 'Grease trap cleaning', completed: false, requiresPhoto: true },
        { id: '7', title: 'Alode trap activity 30 cleaning', completed: false, requiresPhoto: true },
        { id: '8', title: 'Tom pserature 3 logging', completed: false, requiresPhoto: true },
        { id: '9', title: 'Temperature logging', completed: false, requiresPhoto: true },
      ],
    },
    {
      title: 'Monthly Tasks',
      frequency: 'monthly',
      tasks: [
        { id: '10', title: 'Automatic extra Clean and leaky Coolication', completed: false, requiresPhoto: true },
        { id: '11', title: 'Will to colloalize Partitions', completed: false, requiresPhoto: true },
        { id: '12', title: 'Stengrise finctiness and looging', completed: false, requiresPhoto: true },
        { id: '13', title: 'Lesinlicting, animals and gans', completed: false, requiresPhoto: true },
      ],
    },
  ]);

  const [stats, setStats] = useState({
    completedToday: 1,
    totalToday: 5,
    streak: 7,
    badges: 3,
  });

  const toggleTask = (taskId: string) => {
    setChecklists(prev => prev.map(section => ({
      ...section,
      tasks: section.tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })));
  };

  const currentChecklist = checklists.find(c => c.frequency === activeTab);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gradient">DineVerify</h1>
              <p className="text-sm text-gray-400 mt-1">Restaurant Compliance</p>
            </div>
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8" />
                  <Name className="text-sm" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Restaurant Coarking to Your Dleck for Restaurant Groups
          </h2>
          <p className="text-blue-100 mb-6">
            On-chain health & safety compliance verification
          </p>
          
          <div className="flex gap-3 mb-6">
            <button className="btn-secondary flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Asset Photos
            </button>
            <button className="btn-secondary flex items-center gap-2">
              Combitions
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-white">{stats.completedToday}/{stats.totalToday}</div>
              <div className="text-sm text-blue-200">Tasks Today</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-white">{stats.streak}</div>
              <div className="text-sm text-blue-200">Day Streak</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-white">{stats.badges}</div>
              <div className="text-sm text-blue-200">Badges Earned</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold text-success">98%</div>
              <div className="text-sm text-blue-200">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'daily'
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:bg-opacity-80'
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'weekly'
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:bg-opacity-80'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === 'monthly'
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:bg-opacity-80'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Dashboard Card */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Dashboard</h3>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-all duration-200">
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {currentChecklist?.tasks.map((task) => (
              <div
                key={task.id}
                className="task-card flex items-center gap-4 cursor-pointer"
                onClick={() => toggleTask(task.id)}
              >
                <button className="flex-shrink-0">
                  {task.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                    {task.title}
                  </p>
                </div>
                {task.requiresPhoto && (
                  <Camera className="w-5 h-5 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="glass-card p-6 hover:bg-opacity-80 transition-all duration-200 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Training</h4>
                <p className="text-sm text-gray-400">2 modules pending</p>
              </div>
            </div>
          </button>

          <button className="glass-card p-6 hover:bg-opacity-80 transition-all duration-200 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success bg-opacity-20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Reports</h4>
                <p className="text-sm text-gray-400">View compliance</p>
              </div>
            </div>
          </button>

          <button className="glass-card p-6 hover:bg-opacity-80 transition-all duration-200 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-warning bg-opacity-20 flex items-center justify-center">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Badges</h4>
                <p className="text-sm text-gray-400">{stats.badges} earned</p>
              </div>
            </div>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6 mt-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
              <div className="w-10 h-10 rounded-full bg-success bg-opacity-20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Grease trap cleaning completed</p>
                <p className="text-sm text-gray-400">2 hours ago • Verified by AI</p>
              </div>
              <span className="badge-success">Verified</span>
            </div>

            <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Earned "7-Day Streak" badge</p>
                <p className="text-sm text-gray-400">Yesterday</p>
              </div>
              <span className="badge-primary">New</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-warning bg-opacity-20 flex items-center justify-center">
                <Bell className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Weekly checklist due tomorrow</p>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <span className="badge-warning">Reminder</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 text-primary">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-xs">Tasks</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200">
              <BookOpen className="w-6 h-6" />
              <span className="text-xs">Training</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200">
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs">Reports</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200">
              <Award className="w-6 h-6" />
              <span className="text-xs">Badges</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
