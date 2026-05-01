import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PortalForm } from "@/lib/data";

type FormCardProps = {
  form: PortalForm;
};

const FormCard = ({ form }: FormCardProps) => {
  return (
    <Card className="h-full border-border bg-card/90">
      <CardHeader>
        <Badge variant="ghost">{form.category}</Badge>
        <CardTitle className="text-base">{form.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>{form.description}</p>
        <p className="text-xs uppercase tracking-widest">Typical turnaround: {form.eta}</p>
        <Link
          href={form.href}
          className="inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-primary"
        >
          Open form
        </Link>
      </CardContent>
    </Card>
  );
};

export default FormCard;
