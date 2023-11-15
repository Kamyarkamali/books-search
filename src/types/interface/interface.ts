interface DATA{
    id:number,
    name:string,
    auther:string,
    motarjem:string,
    image:any,
    price:number,
    rate:number,
    category:string,
    count:number
}


interface MENU{
    id:number,
    name:string,
    url:string
}

interface Teaser{
    id:number,
    image:any,
    title:string
}

export {DATA,MENU,Teaser};