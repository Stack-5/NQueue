import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cashier = () => {
  const recentlyServed = [
    { number: "A016", status: "Completed", color: "text-green-500" },
    { number: "A015", status: "Skipped", color: "text-red-500" },
    { number: "A014", status: "Completed", color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 py-12 bg-background text-foreground gap-12">
      <div className="space-y-6 w-full max-w-md mx-auto">
        <Card className="border border-border shadow-md bg-card text-card-foreground">
          <CardHeader>
            <h2 className="text-xl font-semibold tracking-tight text-center">Now Serving</h2>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-center text-primary">A017</p>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Session started: <span className="font-medium text-foreground">12:42 PM</span>
            </p>
          </CardContent>
        </Card>

        <Card className="border border-border shadow-md bg-card text-card-foreground">
          <CardHeader>
            <h2 className="text-xl font-semibold tracking-tight text-center">Next in Line</h2>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground text-center">
              Main Building Registrar | Counter 2
            </p>
            <p className="text-lg font-medium text-center mt-2">
              Next: <span className="text-primary">A018</span>
            </p>
          </CardContent>
        </Card>

        <div className="mt-4 space-y-3">
          <h3 className="text-base font-semibold text-foreground">Recently Served</h3>
          <ul className="space-y-2">
            {recentlyServed.map((entry, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 rounded-md bg-muted/40 border border-border"
              >
                <span className="font-medium text-primary">{entry.number}</span>
                <span className={`text-sm font-medium ${entry.color}`}>{entry.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-primary tracking-wide">A017</h1>
          <p className="text-muted-foreground mt-2 text-sm">Serving at Counter 2</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" className="w-32 shadow-sm">Notify</Button>
          <Button variant="secondary" className="w-32 shadow-sm">Next</Button>
          <Button variant="default" className="w-32 shadow-md bg-primary text-primary-foreground hover:brightness-110">
            Complete
          </Button>
          <Button variant="destructive" className="w-32 shadow-sm">Skip</Button>
        </div>
      </div>
    </div>
  );
};

export default Cashier;

