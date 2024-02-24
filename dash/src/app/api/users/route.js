export async function GET(req, res, next){
    let users = [
        {
            id:1,
            name: "jose",
            email: "jose@gmail.com"
        },
        {
            id:2,
            name: "maria",
            email: "maria@gmail.com"
        },
    ];

    let data = JSON.stringify(users)

    return new Response(data, {status:200});
}