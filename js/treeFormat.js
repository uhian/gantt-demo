gantt.config.grid_width = 380;
gantt.config.add_column = false;
gantt.templates.grid_row_class = function (start_date, end_date, item) {
    if (item.progress == 0) return "red";
    if (item.progress >= 1) return "green";
};
gantt.templates.task_row_class = function (start_date, end_date, item) {
    if (item.progress == 0) return "red";
    if (item.progress >= 1) return "green";
};
gantt.config.columns = [
    {name: "text", label: "名称", tree: true, width: '*'},
    {
        name: "progress", label: "进度", width: 80, align: "center",
        template: function (item) {
            if (item.progress >= 1)
                return "完成";
            if (item.progress == 0)
                return "未开始";
            return Math.round(item.progress * 100) + "%";
        }
    },
    {
        name: "assigned", label: "负责人", align: "center", width: 100,
        template: function (item) {
            if (!item.users) return "未分配";
            return item.users.join(", ");
        }
    }
];

gantt.templates.link_class = function (link) {
    var types = gantt.config.links;
    switch (link.type) {
        case types.finish_to_start:
            return "finish_to_start";
            break;
        case types.start_to_start:
            return "start_to_start";
            break;
        case types.finish_to_finish:
            return "finish_to_finish";
            break;
    }
};

gantt.templates.task_class = function (start, end, task) {
    switch (task.priority) {
        case "1":
            return "high";
            break;
        case "2":
            return "medium";
            break;
        case "3":
            return "low";
            break;
    }
};

