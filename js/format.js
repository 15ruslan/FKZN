function formattingNumbers(b) {
    var a = "+ 7 123 456-78-90",
        c = b.value.match(/\d/g);
        if(!c) return b.value = "+ 7 ";
        a = a.replace(/\d/g, function () {
            return c.shift() || "#"
        });
    b.value = a.replace(/#.*/, "")
};