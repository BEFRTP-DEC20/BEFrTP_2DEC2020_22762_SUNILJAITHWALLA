












require("fs").readFile("filename.ext", function(err, cont) {
    if (err)
        throw err;
    console.log("String"+(cont.indexOf("search string")>-1 ? " " : " not ")+"found");
});