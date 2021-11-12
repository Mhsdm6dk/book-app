export function timkiem(u){
    return{
        type:'timkiem',
        ten:u.searchname
    }
}
export function kiemtrauser(u){
    return{
        type:'themuser',
        username:u.username,
        password: u.password,
        id:u.id,
        name: u.name,
        email: u.email,
        address: u.address,
        telephone: u.telephone,
        order: u.oder,
        admin:u.admin
    }
}