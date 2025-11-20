import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { RecentActivity } from "@/components/RecentActivity";
import { DollarSign, Users, TrendingUp, Activity } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$45,231"
            change="12.5% from last month"
            trend="up"
            icon={DollarSign}
            variant="primary"
          />
          <StatsCard
            title="Active Users"
            value="2,350"
            change="8.2% from last month"
            trend="up"
            icon={Users}
            variant="success"
          />
          <StatsCard
            title="Growth Rate"
            value="23.1%"
            change="4.3% from last month"
            trend="up"
            icon={TrendingUp}
            variant="warning"
          />
          <StatsCard
            title="Engagement"
            value="85.2%"
            change="2.1% from last month"
            trend="down"
            icon={Activity}
            variant="primary"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <AnalyticsChart />
          </div>
          <div className="lg:col-span-3">
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
