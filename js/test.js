for (var i = 0; i < dlList.length; i++) {
        // var ddList = dlList[i].getElementsByTagName('dd');
        // var ddList = dlList[0].getElementsByTagName('dd');
        // var ddList = dlList[1].getElementsByTagName('dd');
        // var ddList = dlList[2].getElementsByTagName('dd');
        var ddList = dlList[3].getElementsByTagName('dd');
        for (var j = 0; j < ddList.length; j++) {
            ddList[j].onclick = function () {
                for (var i = 0; i < ddList.length; i++) {
                    ddList[i].style.color = '#666'
                }
                this.style.color = 'red'
            }
        }
    (function () {
        var ddList = dlList[0].getElementsByTagName('dd');

        function a() {
            console.log(ddList)
        }
    })()
    (function () {
        var ddList = dlList[1].getElementsByTagName('dd');
    })()
    (function () {
        var ddList = dlList[2].getElementsByTagName('dd');
    })()
    (function () {
        var ddList = dlList[3].getElementsByTagName('dd');
    })()
}