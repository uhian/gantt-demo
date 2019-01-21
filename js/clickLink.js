gantt.attachEvent("onLinkClick", function (id) {//点击线条，提示任务先后
    var link = this.getLink(id),
        src = this.getTask(link.source),
        trg = this.getTask(link.target),
        types = this.config.links;

    var first = "", second = "";
    switch (link.type) {
        case types.finish_to_start:
            first = "结束";
            second = "开始";
            break;
        case types.start_to_start:
            first = "开始";
            second = "开始";
            break;
        case types.finish_to_finish:
            first = "结束";
            second = "结束";
            break;
    }
    gantt.message("必须" + first + " <b>" + src.text + "</b>再" + second + " <b>" + trg.text + "</b>");
});