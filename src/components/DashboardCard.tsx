import React from 'react';

export default function DashboardCard({ title, value, description }: {
  title: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white">
      <h2 className="font-semibold text-foreground">{title}</h2>
      <p className="text-2xl mt-2 text-keiPrimary">{value}</p>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
}
