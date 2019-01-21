gantt.config.scale_unit = "month";
	gantt.config.step = 1;
	gantt.config.date_scale = "%F, %Y";
	gantt.config.min_column_width = 50;

	gantt.config.scale_height = 90;

	var weekScaleTemplate = function (date) {
		var dateToStr = gantt.date.date_to_str("%M %d 日");
		var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
		return dateToStr(date) + " - " + dateToStr(endDate);
	};

	var daysStyle = function(date){
		var dateToStr = gantt.date.date_to_str("%D");
		if (dateToStr(date) == "日"||dateToStr(date) == "六")  return "weekend";
	
		return "";
	};

	gantt.config.subscales = [
		{unit: "week", step: 1, template: weekScaleTemplate},
		{unit:"day", step:1, date:"%d %D", css:daysStyle }
	];