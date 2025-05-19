import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const StationIcon = () => (
  <svg
    className="h-5 w-5 text-muted-foreground"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12l2-2 4 4 8-8 2 2-10 10-6-6z" />
  </svg>
);

const CounterIcon = () => (
  <svg
    className="h-5 w-5 text-muted-foreground"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const CashierInfoCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <Card className="w-full max-w-3xl space-y-6 rounded-xl shadow-lg border border-border bg-card p-6">
        <CardHeader className="pb-4 flex items-center space-x-6">
          {/* Profile Picture */}
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-primary">
            <img
              src="/profile-placeholder.png" // Replace with actual profile image path
              alt="Cashier Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Title & Status */}
          <div>
            <CardTitle className="text-3xl font-bold">Cashier</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Petracorta, Romnoel E.
            </p>

            {/* Status badge */}
            <div className="mt-2 inline-flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-green-600">Active</span>
            </div>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-6">
          <h3 className="text-lg font-semibold">Account Information</h3>

          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <StationIcon />
              <span>Station:</span>
            </div>
            <span className="text-foreground">Main Building Registrar</span>
          </div>

          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CounterIcon />
              <span>Counter:</span>
            </div>
            <span className="text-foreground">2</span>
          </div>

          {/* Extra info */}
          <div className="flex justify-between text-sm font-medium">
            <span className="text-muted-foreground">Email:</span>
            <span>romnoel.petracorta@example.com</span>
          </div>

          <div className="flex justify-between text-sm font-medium">
            <span className="text-muted-foreground">Shift:</span>
            <span>8:00 AM - 5:00 PM</span>
          </div>
        </CardContent>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-2">
          <Button variant="outline">Edit Profile</Button>
          <Button variant="destructive">Log Out</Button>
        </div>
      </Card>
    </div>
  );
};

export default CashierInfoCard;

