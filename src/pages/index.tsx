import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import { Globe, Cloud, HardDrive, Lock, BarChart2, Truck, Settings } from 'lucide-react';

const silos = [
  { id: 'telecoms', label: 'Telecoms', icon: Globe },
  { id: 'cloud', label: 'Cloud Services', icon: Cloud },
  { id: 'backup', label: 'BaaS / DRaaS', icon: HardDrive },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: Lock },
  { id: 'averi', label: 'Averi WMS', icon: BarChart2 },
  { id: 'iterra', label: 'Iterra', icon: Truck },
  { id: 'consulting', label: 'IT Consulting', icon: Settings },
];

export default function Home() {
  const [activeSilo, setActiveSilo] = useState('telecoms');

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">KEI Solutions Command Center</h1>

      <div className="grid grid-cols-4 gap-2">
        {silos.map(({ id, label, icon: Icon }) => (
          <button key={id} className="flex items-center gap-2 bg-keiMuted p-2 rounded" onClick={() => setActiveSilo(id)}>
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <DashboardCard title="Leads Acquired" value="156" />
        <DashboardCard title="Email Open Rate" value="36%" />
        <DashboardCard title="Top Channel" value="LinkedIn" description="Last 30 days" />
        <DashboardCard title="Recent Trend Insight" value="Smart city interest up 35%" description="Based on MyBroadband RSS feed" />
        <DashboardCard title="AI Suggestion" value="Bundle Cloud + Iterra" description="Target Logistics SMEs in Gauteng" />
      </div>
    </div>
  );
}
