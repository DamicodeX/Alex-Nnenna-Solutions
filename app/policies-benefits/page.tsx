import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PoliciesBenefitsPanel from "@/components/features/PoliciesBenefitsPanel";
import { policyDocuments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Policies & Benefits",
  description:
    "Categorized HR policy library with searchable, filterable policy and benefits documents.",
};

export default function PoliciesBenefitsPage() {
  const benefitsCount = policyDocuments.filter(
    (document) => document.category === "Benefits"
  ).length;

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <Badge variant="secondary" className="mb-4">
            HR Policies & Documents
          </Badge>
          <h1 className="font-(family-name:--font-heading) text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Policies and benefits library
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Search categorized policies and quickly review benefits resources,
            payroll schedules, and workplace standards.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        <Card className="border-border bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Benefits resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-(family-name:--font-heading) text-3xl text-primary">
              {benefitsCount}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              live benefits documents
            </p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Audience coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Includes documentation for all staff, managers, and new hires.
            </p>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/90">
          <CardHeader>
            <CardTitle className="text-base">Update cadence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              People Ops reviews policy set every quarter and after legal updates.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 md:pb-20">
        <PoliciesBenefitsPanel />
      </section>
    </main>
  );
}
