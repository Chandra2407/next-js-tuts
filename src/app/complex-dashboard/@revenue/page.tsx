import { Card } from "@/app/components/card";
import Link from "next/link";

export default function RefenuePage() {
    return (
        <Card>
            <h1>Revenue Page</h1>
            <Link href="/complex-dashboard/old-revenue">Go to Old Revenue</Link>
        </Card>
    );
}