import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CashierInfoCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl space-y-4">
        <CardHeader>
          <CardTitle>Cashier</CardTitle>
          <p className="text-sm text-muted-foreground">
            Petracorta, Romnoel E.
          </p>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Account Information</h3>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Station:</span>
            <span>Main Building Registrar</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Counter:</span>
            <span>2</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashierInfoCard;
