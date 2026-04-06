"use client";

import { Card, CardContent } from "@/components/ui/card";
import DownloadStudentsCSV from "@/components/admin/DownloadStudentsCSV";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 text-base">
          Manage student data and download records.
        </p>
      </div>

      {/* Static Card */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-slate-200/80 bg-white hover:shadow-lg transition-all duration-200 rounded-xl overflow-hidden group">
          <CardContent className="px-6 py-6 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Student Records
            </p>
            <p className="text-3xl font-bold text-blue-600">
              Available for CSV Export
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CSV Download Section */}
      <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Download Student Data
        </h2>
        <p className="text-gray-600 mb-4">
          Click the button below to download all student profiles in CSV format.
        </p>
        <DownloadStudentsCSV />
      </div>
    </div>
  );
}