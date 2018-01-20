//META { "name": "botInfo" } *//

var funcFilter = function() {
    //var imagelist = document.getElementsByClassName("attachment-image");
    var imagelist = document.querySelectorAll(".modal-image,.attachment-image");
    for (var i=0;i<imagelist.length;i++){

        var image = imagelist[i].getElementsByClassName("image")[0];
        image.removeAttribute("width");
        image.removeAttribute("height");
        var imagebaseurl = image.src.split("?")[0];
        //window.alert(imagebaseurl);
        image.src = imagebaseurl;

    }
};

document.addEventListener("DOMNodeInserted", _.throttle(funcFilter, 100) , false);
funcFilter();
