import { twMerge } from "tailwind-merge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Presale({ className }: { className?: string }) {
  return (
    <div className={twMerge("h-screen", className)}>
      <p>Presale Active</p>
      <p>102.98 SOL has already been collected.</p>

      <Card>
        <CardHeader>SWAG</CardHeader>
      </Card>
    </div>
  );
}
