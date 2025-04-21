import { Card } from "@/app/components/card";
import Link from "next/link";

export default function OldRevenuePage() {
    return (
        <Card>
            <h1>Old Revenue Page</h1>
            <Link href="/complex-dashboard">Go to New Revenue</Link>
        </Card>
    );
}