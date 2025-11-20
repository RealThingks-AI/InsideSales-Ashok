import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "Created a new report",
    time: "2 hours ago",
    initials: "JD",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated dashboard settings",
    time: "4 hours ago",
    initials: "JS",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Uploaded analytics data",
    time: "6 hours ago",
    initials: "MJ",
  },
  {
    id: 4,
    user: "Sarah Williams",
    action: "Shared growth metrics",
    time: "8 hours ago",
    initials: "SW",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-9 w-9 border border-border">
                <AvatarFallback className="text-xs bg-primary/10 text-primary">
                  {activity.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-card-foreground">
                  {activity.user}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
