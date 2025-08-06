import React from 'react';

export default async function Loading() {
    return (
        <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                페이지 로딩중 ...
            </h1>
            <p className='text-blue-600'>
                잠시만 기다려 주세요.
            </p>

        </div>
    );
}