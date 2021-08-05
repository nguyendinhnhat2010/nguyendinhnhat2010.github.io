function phanhoi(){
    if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("massage").value == "")
    {
        alert("Bạn chưa nhập đầy đủ thông tin");
    }
    else{
        alert("Cảm ơn bạn đã phản hồi");
    }
}