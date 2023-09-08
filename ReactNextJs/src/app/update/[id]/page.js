"use client"

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(){
    
    var r = useRouter(); 
    var param = useParams(); // id값 받아오기 위하여
    var [name,setName] = useState("");
    var [addr,setAddr] = useState("");
    var [phone,setPhone] = useState("");

    console.log("name==> ",name);
    useEffect(()=>{
        fetch(`http://localhost:3333/userList/${param.id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setName(data.name);
            setAddr(data.addr);
            setPhone(data.phone);
        })
    },[]); // 콜백함수/긴리스트 를 받을 수 있다. 
    //클라이언트에서 패치를 사용하기위한 함수이다.

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
                    method : 'PATCH',
                    headers : {'content-type' : 'application/json'},
                    body : jsonMap
                }

                //파라미터값을 두개까지 넘겨줄수있다.
                fetch(`http://localhost:3333/userList/${param.id}`, option)
                    .then(res => res.json())
                    .then(map => { //위 json데이터 결과의 map
                        console.log(map);
                        r.refresh();
                        r.push(`/view/${map.id}`);//성공시 해당페이지로.3
                    });

            }}>
                <div><input type="text" name="name" defaultValue={name}></input></div>
                <div><input type="text" name="addr" defaultValue={addr}></input></div>
                <div><input type="text" name="phone" defaultValue={phone}></input></div>
                <div><input type="submit" value="저장"></input></div>
            </form>
        </div>
    )
}