"use client"

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function Btn() {
  var r = useRouter();
  var param = useParams();
  console.log("param==>",param);
  var add=null;
   if(param.id == null){
     add = <li><a href="/create">추가하기</a></li>
   }

  return (
    <ul>
       {add} 
   {/* {param.id ? null : <li><a href="/create">추가하기</a></li>} */}
      <li><a href={`/update/${param.id}`}>수정하기</a></li>
      <li><a href="/delete" onClick={(e)=>{
        e.preventDefault();
        if(!confirm("정말 삭제하시겠습니까?")){
          return;
        }
        var option = {
        method : 'DELETE',
        // headers : {'content-type' : 'application/json'},
        // body : jsonMap
        }
        fetch(`http://localhost:3333/userList/${param.id}`, option)
          .then(res => res.json())
          .then(map => { //위 json데이터 결과의 map
          r.refresh();
          r.push(`/`);//성공시 해당페이지로.3
          });

      }}>삭제하기</a></li>
      <li><a href="/">메인으로</a></li>
    </ul>
  );
}
