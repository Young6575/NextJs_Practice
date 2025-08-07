
import MyClockTime from "../myclock/MyClockTime";

export default async function AppCSR() { // 하이드레이션 : ServerSideRendering에 ClientsideRendering 주입 시키는 기법
  return (
  <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                CSR 예제
            </h1>
            <p className='text-blue-600'>
               클라이언트에서 실행되며 클라이언트의 시간을 가져옴
            </p>
            <MyClockTime/> {/*CSR 주입*/}
        </div>
  );
}