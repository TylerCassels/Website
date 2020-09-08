$(document).ready(function () {
    $(".icons").hover(
        function () {
            $(this).css("font-size", "25px"), $(this).css("padding", "2px");
        },
        function () {
            $(this).css("font-size", "20px"), $(this).css("padding", "10px");
        }
    );
});
function getRepos() {
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            for (i in myObj) {
                document.getElementById("repos").innerHTML +=
                    "<li>" + myObj[i].name + "</li>";
            }
        }
    };

    newRequest.open(
        "GET",
        "https://api.github.com/users/TylerCassels/repos",
        true
    );
    newRequest.send();
}