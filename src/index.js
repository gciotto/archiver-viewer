/***
* A web viewer application based on Chartjs for the EPICS archiver.
*
* Gustavo Ciotto Pinton
* LNLS - Brazilian Synchrotron Laboratory
***/

import 'jquery-browserify';
import 'chart.js';

import * as chartUtils from './lib/chartUtils';
import * as handlers from './lib/handlers';
import * as control from './lib/control';
import * as archInterface from './lib/archInterface';
import * as ui from './lib/ui';

import './css/archiver.css';

// Future react migration ...

/*
 * Add this to package.json
 * "react": "16.8.3",
 * "react-dom": "16.8.3"
 *
 * */
/*
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById("root")
);

*/

/* Module dependencies */


/* Registers event handler functions */

$(document).click(handlers.refreshScreen);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {delay: 10});
});

$("#window_size table tr td").on("click", handlers.updateTimeWindow);

$("#date").on('change', 'input', handlers.onChangeDateHandler);
$("#date .now").on("click", handlers.updateEndNow);
$("#date .backward").on("click", handlers.backTimeWindow);
$("#date .forward").on("click", handlers.forwTimeWindow);
$("#date .zoom").on("click", handlers.zoomClickHandler);
$("#date .auto").on("click", handlers.autoRefreshingHandler);
$("#date .type").on("change", handlers.updateReferenceTime);

$('#data_table_area .enable_table:checkbox').change(handlers.toogleTable);
$("#undo").on("click", handlers.undoHandler);
$("#redo").on("click", handlers.redoHandler);

$('#PV').keypress(handlers.queryPVs);

$("#archiver_viewer").on('click', handlers.dataClickHandler);
window.addEventListener("wheel", handlers.scrollChart);

$("#plotSelected").on('click', handlers.plotSelectedPVs);
$("#selectAll").on('click', ui.selectedAllPVs);
$("#deselectAll").on('click', ui.deselectedAllPVs);

// Binds handlers to the dragging events
$("#archiver_viewer").mousedown(handlers.startDragging);
$("#archiver_viewer").mousemove(handlers.doDragging);
$("#archiver_viewer").mouseup(handlers.stopDragging);

$("#xlsx").click ({"type" : "xlsx"}, function (event) {
    handlers.exportAs(event.data.type);
});

/******* Initialization function *******/
/**
* Instantiates a new chart and global structures
**/
$(document).ready(function () {
    let options = {
            responsiveAnimationDuration: 0,
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 0 },
            tooltips: {
                mode: 'nearest',
                intersect: false,
                cornerRadius: 5,
                callbacks: { label: chartUtils.labelCallback },
            },
            hover: {
                mode: 'nearest',
                intersect: false,
                animationDuration: 0,
            },
            title: { display: false },
            scales: {
                xAxes: [{
                    // Common x axis
                    id: chartUtils.timeAxisID,
                    type: 'time',
                    distribution: 'series',
                    time: {
                        unit: 'minute',
                        unitStepSize: 5,
                        displayFormats: {
                            minute: 'DD/MM/YYYY HH:mm:ss'
                        },
                        tooltipFormat: 'ddd MMM DD YYYY HH:mm:ss.SSS ZZ',
                    },
                    ticks: {
                        autoSkip : true,
                        autoSkipPadding: 5,
                    }
                }],
                yAxes: [{
                    // Useless YAxis
                    type: "linear",
                    display: false,
                    position: "left",
                    id: "y-axis-0"
                }],
            },
            legend : {
                display: false,
                onClick : chartUtils.legendCallback,
            }
        };

    control.init (new Chart($("#archiver_viewer"), {
        type: 'line',
        data: [],
        options: options
    }));

    $("#home").attr("href", archInterface.url().split(':')[0] + ":" + archInterface.url().split(':')[1]);
    ui.hideWarning();
    ui.hideSearchWarning();

    control.loadFromURL(window.location.search);
});
