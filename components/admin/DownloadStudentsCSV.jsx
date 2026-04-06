"use client";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

export default function DownloadStudentsCSV() {
  const handleDownload = async () => {
    try {
      const { data: students, error } = await supabase
        .from("profiles")
        .select("*");

      if (error) {
        console.error("Supabase Error:", error);
        alert("Failed to fetch student data");
        return;
      }

      const safeStudents = students || [];

      const headers = [
        "id",
        "name",
        "email",
        "college",
        "branch",
        "skills",
        "created_at",
      ];

      const rows = safeStudents.map((student) =>
        headers
          .map((header) => {
            const value = student[header] ?? "";
            return `"${String(value).replace(/"/g, '""')}"`;
          })
          .join(",")
      );

      const csvContent = [headers.join(","), ...rows].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "students.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CSV Download Error:", error);
      alert("Something went wrong while downloading CSV");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
    >
      Download Students CSV
    </button>
  );
}