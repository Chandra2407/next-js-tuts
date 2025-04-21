import { Card } from "@/app/components/card";

export default async function NotificationPage() {
    // await new Promise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve("delayed")
    //     }, 1000)
    // })
    return (
        <Card>
            <h1>Notification Page</h1>
            <p>This is the notification page.</p>
        </Card>
    );
}