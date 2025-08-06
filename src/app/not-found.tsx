import React from 'react';
import Link from 'next/link';

export default async function NotFound() {
    return (
        <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                파일을 찾을 수 없습니다. (404)
            </h1>
            <p className='text-red-600'>
                요청하신 페이지가 존재하지 않습니다.
            </p>
            <Link href={"/"}>처음으로</Link>
        </div>
    );
}