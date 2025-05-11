import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cashier = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-6">
      <div className="space-y-6 w-full max-w-md">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Now Serving</h2>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-medium text-center">
              You are serving No. <span className="text-primary">A017</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Next in Line</h2>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium text-center">
              Main building Registrar | Counter 2
              <br />
              Next in line: <span className="text-primary">A018</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="secondary" className="w-32">Notify</Button>
        <Button variant="secondary" className="w-32">Next</Button>
        <Button variant="" className="w-32">Complete</Button>
        <Button variant="destructive" className="w-32">Skip</Button>
      </div>
    </div>
  );
};

export default Cashier;

