const UserStatus = ({logIn, isAdmin})=>{
    if(logIn===true && isAdmin===true){
        return <h1>welcome Admin</h1>
    }else {
        return <h1>Welcome User</h1>
    }
}
export default UserStatus