import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PolicyDocument } from "@/lib/data";

type PolicyDocumentCardProps = {
  document: PolicyDocument;
};

const PolicyDocumentCard = ({ document }: PolicyDocumentCardProps) => {
  return (
    <Card className="h-full border-border bg-card/90">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="ghost">{document.category}</Badge>
          <Badge variant="secondary">{document.audience}</Badge>
        </div>
        <CardTitle className="text-base leading-snug">{document.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>Updated: {new Date(document.updatedAt).toLocaleDateString()}</p>
        <p>File size: {document.size}</p>
        <Link
          href={document.href}
          className="inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-primary"
        >
          View document
        </Link>
      </CardContent>
    </Card>
  );
};

export default PolicyDocumentCard;
