"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import DetailsMovie from '@/components/details/DetailsMovie';
import DetailsSeries from '@/components/details/DetailsSeries';
import SpoilSerieItem from '@/components/details/SpoilSerieItem';

const DetailsPage = ({ params }) => {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const id = params.slug;
    const [spoils, setSpoils] = useState([]);

    console.log('Details page:', type, id);

    // Simulate fetching spoils based on the series ID
    const getSpoilsFrom = (serieId) => {
        console.log('Fetching spoils for series ID:', serieId);

        // Simulate some fake spoils
        const fakeSpoils = [
            {
                seriesName: "Breaking Bad",
                season: 5,
                episode: 14,
                severity: "High",
                content: "Walter White teams up with Jesse to rob a bank in Albuquerque, setting the stage for a massive showdown.",
                creator: "SpoilerMaster42",
                upvotes: 27,
                id: "spoil_001"
            },
            {
                seriesName: "Breaking Bad",
                season: 5,
                episode: 15,
                severity: "Medium",
                content: "Skyler discovers Walt's secret and confronts him in a dramatic scene.",
                creator: "SpoilerKing23",
                upvotes: 15,
                id: "spoil_002"
            },
            {
                seriesName: "Breaking Bad",
                season: 5,
                episode: 16,
                severity: "Low",
                content: "Jesse finally decides to leave Albuquerque for good, seeking a new life.",
                creator: "SpoilerFan99",
                upvotes: 8,
                id: "spoil_003"
            }
        ];

        setSpoils(fakeSpoils);
    };

    useEffect(() => {
        if (type === 'serie') {
            getSpoilsFrom(id);
        }
    }, [id, type]);

    return (
        <div>
            {type === 'movie' ? (
                <DetailsMovie movieId={id} />
            ) : (
                <DetailsSeries serieId={id} />
            )}

            {type === 'serie' && 
            <div className="mt-6 p-4">
                {spoils.map((spoil) => (
                    <SpoilSerieItem key={spoil.id} spoil={spoil} />
                ))}
            </div>
            }
        </div>
    );
};

export default DetailsPage;
