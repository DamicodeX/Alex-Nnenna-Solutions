"use client";

import { useMemo, useState } from "react";
import PolicyDocumentCard from "@/components/features/PolicyDocumentCard";
import SearchFilterBar from "@/components/features/SearchFilterBar";
import { policyDocuments } from "@/lib/data";

const categoryOptions = [
  { label: "All categories", value: "all" },
  { label: "Leave", value: "Leave" },
  { label: "Benefits", value: "Benefits" },
  { label: "Security", value: "Security" },
  { label: "Workplace", value: "Workplace" },
  { label: "Payroll", value: "Payroll" },
];

const PoliciesBenefitsPanel = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredDocuments = useMemo(
    () =>
      policyDocuments.filter((document) => {
        const queryMatch = document.title
          .toLowerCase()
          .includes(query.toLowerCase().trim());
        const categoryMatch = category === "all" || document.category === category;

        return queryMatch && categoryMatch;
      }),
    [category, query]
  );

  return (
    <div className="space-y-6">
      <SearchFilterBar
        query={query}
        onQueryChange={setQuery}
        selectedFilter={category}
        onFilterChange={setCategory}
        filterLabel="Category"
        filterOptions={categoryOptions}
        placeholder="Search policy documents"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredDocuments.map((document) => (
          <PolicyDocumentCard key={document.id} document={document} />
        ))}
      </div>

      {filteredDocuments.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No policy documents matched your current search and category.
        </p>
      ) : null}
    </div>
  );
};

export default PoliciesBenefitsPanel;
