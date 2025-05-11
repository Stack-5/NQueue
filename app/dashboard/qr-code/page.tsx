import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const QrCodePage = () => {
  const qrSize = 300;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Scan to join the queue</h1>
        <Label className="text-lg mt-2 text-muted">
          Scan the QR code below to join the queue and get started.
        </Label>
      </div>

      <Card className="flex justify-center items-center p-6">
        <CardContent
          className="flex justify-center items-center border p-4 rounded-md shadow-md"
          style={{ width: `${qrSize}px`, height: `${qrSize}px` }} // Make the container a square of qrSize
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
    </div>
  );
};

export default QrCodePage;
