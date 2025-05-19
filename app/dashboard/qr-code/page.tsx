import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const QrCodePage = () => {
  const qrSize = 300;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-foreground space-y-8">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Scan to join the queue
        </h1>
        <Label className="text-lg text-muted-foreground">
          Scan the QR code below to join the queue and get started.
        </Label>
      </div>

      <Card className="p-8 rounded-xl shadow-lg bg-card border border-border max-w-sm w-full">
        <CardContent
          className="flex justify-center items-center rounded-lg border border-muted p-4 bg-background"
          style={{ width: qrSize, height: qrSize }}
        >
          <Image
            src="/google-logo.svg"
            alt="QR Code Placeholder"
            width={qrSize}
            height={qrSize}
            className="object-contain"
          />
        </CardContent>
      </Card>

      <div className="max-w-sm w-full bg-muted/20 border border-muted rounded-md p-4 text-sm text-muted-foreground text-center shadow-sm">
        <strong className="font-semibold text-foreground">Reminder:</strong> This QR code is valid for a single scan only. Failure to proceed to your assigned station within the allotted time will result in removal from the queue, necessitating re-registration.
      </div>
    </div>
  );
};

export default QrCodePage;

