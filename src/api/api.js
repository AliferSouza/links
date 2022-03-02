export default async function Api() {

    let url = 'DB.json';
    try {      
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
