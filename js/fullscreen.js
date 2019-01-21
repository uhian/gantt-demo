gantt.attachEvent("onTemplatesReady", function () {
    var toggle = document.createElement("i");
    toggle.className = "icon-resize-full gantt-fullscreen";
    gantt.toggleIcon = toggle;
    gantt.$container.appendChild(toggle);
    toggle.onclick = function () {
        if (!gantt.getState().fullscreen) {
            gantt.expand();
        }
        else {
            gantt.collapse();
        }
    };
});
gantt.attachEvent("onExpand", function () {
    var icon = gantt.toggleIcon;
    if (icon) {
        icon.className = icon.className.replace("fa-expand", "fa-compress");
    }

});
gantt.attachEvent("onCollapse", function () {
    var icon = gantt.toggleIcon;
    if (icon) {
        icon.className = icon.className.replace("fa-compress", "fa-expand");
    }
});
