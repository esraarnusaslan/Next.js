import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/dashboard/products">Products</Link>
                </li>
                <li>
                    <Link href="/dashboard/profile">Profile</Link>
                </li>
            </ul>

            {children}
        </div>
    );
};

export default DashboardLayout;
