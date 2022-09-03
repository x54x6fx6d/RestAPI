module.exports.call = () => {
    let username = document.getElementById("username").value;
    window.location.assign(`http://localhost:3000/api/post/minecraftServer/${username}`);
}