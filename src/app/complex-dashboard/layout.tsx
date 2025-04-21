export default function ComplexDashboard(
    {
        children,
        users,
        revenue,
        notification,
    }: {
        children: React.ReactNode;
        users: any;
        revenue: any;   
        notification: any;
    }
) {
    return (
        <>
            <div>{children}</div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1">{users}</div>
                    <div className="flex-1">{revenue}</div>
                </div>
                <div className="flex-1">{notification}</div>
            </div>
        </>
    );
}       