export default async function View(props){
    var res = await fetch(`http://localhost:3333/userList/${props.params.id}`, {cache: `no-store`});
    //전체검색 =>백팅=> id가 {props.params.id} 인 값을 검색
    
    var user = await res.json(); 
    //return 값이 1개일경우 자동으로 담긴다.
    return (
        <div>
            <div>상세보기 페이지{user.id}</div>
            <div>이름 : {user.name}</div>            
            <div>주소 : {user.addr}</div>            
            <div>번호 : {user.phone}</div>            
        </div>
    )
}