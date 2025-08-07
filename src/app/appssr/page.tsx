export const dynamic = 'force-dynamic';

export default async function AppSSR () {
    const ssrTime = new Date().toLocaleString('ko-KR');
  return (
  <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                SSR 예제 : {ssrTime}
            </h1>
            <p className='text-blue-600'>
                요청시 HTML 문서로 생성함으로 새로고침하면 변경된 화면이 보임.
            </p>

        </div>
  );
}