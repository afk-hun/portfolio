import React from 'react';
import ImageWithSkeleton from '@/components/molecules/Image/ImageWithSkeleton';
import {MasonryGridView} from '@/components/molecules/Masonsry2/MasonryGridView';
import { Media } from '@/payload-types';

const TestPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1>This is a test page</h1>
            <ImageWithSkeleton
                src="https://picsum.photos/id/237/200/300"
                alt="Placeholder Image"
                width={200}
                height={300}
                aspectRatio="3/2"
            />

            <MasonryGridView
                images={[
                    { url: 'https://picsum.photos/id/237/2000/3000', width: 2000, height: 3000 },
                    { url: 'https://picsum.photos/id/238/3000/2000', width: 3000, height: 2000 },

                    { url: 'https://picsum.photos/id/239/3000/2000', width: 3000, height: 2000 },
                    { url: 'https://picsum.photos/id/240/2000/3000', width: 2000, height: 3000 },

                    { url: 'https://picsum.photos/id/241/300/200', width: 300, height: 200 },
                    { url: 'https://picsum.photos/id/242/300/200', width: 300, height: 200 },

                    { url: 'https://picsum.photos/id/241/200/300', width: 200, height: 300 },
                    { url: 'https://picsum.photos/id/242/200/300', width: 200, height: 300 },

                    { url: 'https://picsum.photos/id/245/200/600', width: 200, height: 600 },

                    { url: 'https://picsum.photos/id/243/300/300', width: 300, height: 300 },
                    { url: 'https://picsum.photos/id/244/300/200', width: 300, height: 200 },
                    

                ] as Media[]}
            />
            
        </div>
    );
};

export default TestPage;