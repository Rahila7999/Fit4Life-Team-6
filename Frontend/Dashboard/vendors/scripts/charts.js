window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: true, // change to true		
	title:{
		text: "Attendance Chart"
	},
	axisY: {
		maximum: 31 // Set the maximum value of the y-axis to 31
	},
	axisX: {
		interval: 1, // Ensure each month is displayed on the x-axis
		labelFormatter: function(e) {
			// Display month name only once per pair of bars
			if (e.value % 2 === 0) {
				return "";
			} else {
				return e.label;
			}
		}
	},
    
	data: [
	{
		// Change type to "bar", "area", "spline", "pie", etc.
		type: "column",
		dataPoints: [
			{ x: 1, y: 10, label: "Jan", color: "green"},
			{ x: 2, y: 15, label: "Jan", color: "red" },
			{ x: 3, y: 25, label: "Feb", color: "green"},
			{ x: 4, y: 30, label: "Feb", color: "red" },
			{ x: 5, y: 28, label: "Mar", color: "green"},
			{ x: 6, y: 10, label: "Mar", color: "red" },
			{ x: 7, y: 15, label: "Apr", color: "green"},
			{ x: 8, y: 25, label: "Apr", color: "red" },
			{ x: 9, y: 31, label: "May", color: "green"},
			{ x: 10, y: 10, label: "May", color: "red" },
			{ x: 11, y: 15, label: "Jun", color: "green"},
			{ x: 12, y: 15, label: "Jun", color: "red" },
			{ x: 13, y: 28, label: "Jul", color: "green"},
			{ x: 14, y: 10, label: "Jul", color: "red" },
			{ x: 15, y: 15, label: "Aug", color: "green"},
			{ x: 16, y: 25, label: "Aug", color: "red" },
			{ x: 17, y: 15, label: "Sep", color: "green"},
			{ x: 18, y: 15, label: "Sep", color: "red" },
			{ x: 19, y: 30, label: "Oct", color: "green"},
			{ x: 20, y: 10, label: "Oct", color: "red" },
			{ x: 21, y: 15, label: "Nov", color: "green"},
			{ x: 22, y: 25, label: "Nov", color: "red" },
			{ x: 23, y: 15, label: "Dec", color: "green"},
			{ x: 24, y: 20, label: "Dec", color: "red" }
		]
	}
	]
});
chart.render();

}
