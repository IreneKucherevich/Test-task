async function getObject() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let users = await response.json(); 
    let object = users.find(item =>item.id == 5);

    return object;
}