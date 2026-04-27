import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EmployeeProfile } from "@/lib/data";
import { Building2, Mail, Phone } from "lucide-react";

type DirectoryCardProps = {
  profile: EmployeeProfile;
};

const DirectoryCard = ({ profile }: DirectoryCardProps) => {
  return (
    <Card className="border-border bg-card/90">
      <CardHeader>
        <Badge variant="ghost">{profile.department}</Badge>
        <CardTitle className="text-base">{profile.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{profile.title}</p>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Building2 className="size-4" />
          {profile.location}
        </p>
        <p className="flex items-center gap-2">
          <Mail className="size-4" />
          {profile.email}
        </p>
        <p className="flex items-center gap-2">
          <Phone className="size-4" />
          Ext. {profile.extension}
        </p>
      </CardContent>
    </Card>
  );
};

export default DirectoryCard;
