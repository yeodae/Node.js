"use client"

import { useParams } from "next/navigation";

export function Btn() {
  var param = useParams();
  console.log(param);
  var add=null;
   if(param.id == null){
     add = <li><a href="/create">추가하기</a></li>
   }

  return (
    <ul>
       {add} 
   {/* {param.id ? null : <li><a href="/create">추가하기</a></li>} */}
      <li><a href={`/update/${param.id}`}>수정하기</a></li>
      <li><a href="/delete">삭제하기</a></li>
      <li><a href="/">메인으로</a></li>
    </ul>
  );
}
