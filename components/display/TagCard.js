import React from 'react';
import NumberTag from './NumberTag';
import Image from 'next/image';

const TagCard = ({ number, data, width, height }) => {

    return (
        <div className="tag-card flex flex-row items-end px-6">
            <div className="">
                <NumberTag number={number} width={width} height={height} />
            </div>
            <Image
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.title}
                width={100}
                height={150}
            />
        </div>
    );
    
    
};


export default TagCard;