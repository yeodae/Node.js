"use client"
import { useRouter } from "next/navigation";//성공시 해당페이지로.1

export default function Create(){
    var r = useRouter();//성공시 해당페이지로.2
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                var name = e.target.name.value;
                var addr = e.target.addr.value;
                var phone = e.target.phone.value;
                var jsonMap = JSON.stringify({name, addr, phone});
                //컨버팅해서 넘기기

                var option = {
                    method : 'POST',
                    headers : {'content-type' : 'application/json'},
                    body : jsonMap
                }

                //파라미터값을 두개까지 넘겨줄수있다.
                fetch('http://localhost:3333/userList/', option)
                    .then(res => res.json())
                    .then(map => { //위 json데이터 결과의 map
                        console.log(map);
                        r.refresh();
                        r.push(`/view/${map.id}`);//성공시 해당페이지로.3
                    });

            }}>
                <div><input type="text" name="name" placeholder="이름"></input></div>
                <div><input type="text" name="addr" placeholder="주소"></input></div>
                <div><input type="text" name="phone" placeholder="번호"></input></div>
                <div><input type="submit" value="저장"></input></div>
            </form>
        </div>
    )
}