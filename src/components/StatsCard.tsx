import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning";
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  variant = "primary"
}: StatsCardProps) {
  const isPositive = trend === "up";
  
  const gradientClass = {
    primary: "bg-gradient-primary",
    success: "bg-gradient-success",
    warning: "bg-gradient-warning",
  }[variant];

  return (
    <Card className="overflow-hidden transition-all hover:shadow-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <h3 className="text-3xl font-bold tracking-tight text-card-foreground">
                {value}
              </h3>
              <p className={cn(
                "text-sm font-medium flex items-center gap-1",
                isPositive ? "text-success" : "text-destructive"
              )}>
                <span>{isPositive ? "↑" : "↓"}</span>
                {change}
              </p>
            </div>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-xl flex items-center justify-center shadow-soft",
            gradientClass
          )}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
