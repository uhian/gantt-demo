var selected_column = null;

gantt.attachEvent("onScaleClick", function (e, date) {
    selected_column = date;
    var pos = gantt.getScrollState();
    gantt.render();
    gantt.scrollTo(pos.x, pos.y);
});

function is_selected_column(column_date) {
    if (selected_column && column_date.valueOf() == selected_column.valueOf()) {
        return true;
    }
    return false;
}

gantt.templates.scale_cell_class = function (date) {
    if (is_selected_column(date))
        return "highlighted-column";
};
gantt.templates.task_cell_class = function (item, date) {
    if (is_selected_column(date))
        return "highlighted-column";
};
