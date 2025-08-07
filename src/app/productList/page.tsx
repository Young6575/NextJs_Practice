import { products } from "@/types/product";
import type { Product } from "@/types/product";
import Link from "next/link";

export default async function ProductList() {
  return (
 <div className='w-full h-screen 
                    flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold p-5'>
                상품목록
            </h1>
            {
                products.map((item : Product) => (            
                <p className='text-blue-600' key={item.id}>
                    <Link href={`/product/${item.id}`}> 
                        ID : {item['id']}  /  상품명 : {item['name']}
                    </Link>
                </p>))
            }
        </div>
  );
}