"use client";

import { Input } from "@/components/ui/input";

type FilterOption = {
  label: string;
  value: string;
};

type SearchFilterBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
  filterLabel: string;
  filterOptions: FilterOption[];
  placeholder?: string;
};

const SearchFilterBar = ({
  query,
  onQueryChange,
  selectedFilter,
  onFilterChange,
  filterLabel,
  filterOptions,
  placeholder = "Search",
}: SearchFilterBarProps) => {
  return (
    <div className="grid gap-4 rounded-2xl border border-border bg-card/80 p-4 md:grid-cols-[1fr_240px]">
      <Input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <label className="flex items-center justify-between gap-3 text-xs uppercase tracking-widest text-muted-foreground">
        <span>{filterLabel}</span>
        <select
          className="h-10 w-full border border-input bg-transparent px-3 text-xs uppercase tracking-wide text-foreground outline-none focus-visible:border-ring"
          value={selectedFilter}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SearchFilterBar;
