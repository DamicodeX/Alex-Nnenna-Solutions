import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type LegacyPortalNoticeProps = {
  message: string;
  href: string;
  cta: string;
};

const LegacyPortalNotice = ({ message, href, cta }: LegacyPortalNoticeProps) => {
  return (
    <Card className="mx-auto mt-6 max-w-7xl border-border bg-card/80">
      <CardContent className="flex flex-col gap-3 p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{message}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          {cta}
          <ArrowRight className="size-3" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default LegacyPortalNotice;
