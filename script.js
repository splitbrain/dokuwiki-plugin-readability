addInitEvent(function(){
    var prev = getElementsByClass('preview',null,'div');
    if(!prev[0]) return;

    var out = document.createElement('div');
    out.id = 'plugin__readability';
    prev[0].appendChild(out);

    var ajax = new sack(DOKU_BASE + 'lib/plugins/readability/calc.php');
    ajax.AjaxFailedAlert = '';
    ajax.encodeURIString = false;
    if(ajax.failed) return true;

    ajax.setVar('html',encodeURIComponent(prev[0].innerHTML));
    ajax.elementObj = out;

    ajax.runAJAX();
});

