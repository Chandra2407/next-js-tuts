import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
    let cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        margin: '16px',
    };
    return (
        <div className="card" style={cardStyle}>{children}</div>
    );
};