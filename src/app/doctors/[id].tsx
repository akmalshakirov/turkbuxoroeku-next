"use client";
import { useRouter } from "next/router";

const DoctorDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Doctor Details</h1>
            <p>Doctor ID: {id}</p>
        </div>
    );
};

export default DoctorDetailPage;
