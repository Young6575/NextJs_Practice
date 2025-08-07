export const revalidate = 10; // 10초마다 갱신

export default async function AppISR() {
    const Time = new Date().toLocaleString('ko-KR');
  return (
  <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                ISR 예제 : {Time}
            </h1>
            <p className='text-blue-600'>
                빌드시 HTML 문서로 생성되고 주기적으로 백그라운드에서 다시 생성.
            </p>

        </div>
  );
}