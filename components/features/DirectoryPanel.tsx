"use client";

import { useMemo, useState } from "react";
import DirectoryCard from "@/components/features/DirectoryCard";
import SearchFilterBar from "@/components/features/SearchFilterBar";
import { employeeProfiles } from "@/lib/data";

const departmentOptions = [
  { label: "All departments", value: "all" },
  { label: "People Ops", value: "People Ops" },
  { label: "Engineering", value: "Engineering" },
  { label: "Finance", value: "Finance" },
  { label: "Operations", value: "Operations" },
  { label: "Marketing", value: "Marketing" },
];

const DirectoryPanel = () => {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("all");

  const filteredProfiles = useMemo(
    () =>
      employeeProfiles.filter((profile) => {
        const queryValue = query.toLowerCase().trim();
        const matchesQuery =
          profile.name.toLowerCase().includes(queryValue) ||
          profile.title.toLowerCase().includes(queryValue) ||
          profile.location.toLowerCase().includes(queryValue);
        const matchesDepartment =
          department === "all" || profile.department === department;

        return matchesQuery && matchesDepartment;
      }),
    [department, query]
  );

  return (
    <div className="space-y-6">
      <SearchFilterBar
        query={query}
        onQueryChange={setQuery}
        selectedFilter={department}
        onFilterChange={setDepartment}
        filterLabel="Department"
        filterOptions={departmentOptions}
        placeholder="Search employees by name, title, or location"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProfiles.map((profile) => (
          <DirectoryCard key={profile.id} profile={profile} />
        ))}
      </div>

      {filteredProfiles.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No teammates matched your search filters.
        </p>
      ) : null}
    </div>
  );
};

export default DirectoryPanel;
