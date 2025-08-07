export default async function AppSSG () {

    const ssgTime = new Date().toLocaleString('ko-KR');
  return (
        <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                SSG 예정 : {ssgTime}
            </h1>
            <p className='text-blue-600'>
                Build시 HTML 문서로 생성되고 새로고침변경되지 않습니다.
            </p>

        </div>
  );
}