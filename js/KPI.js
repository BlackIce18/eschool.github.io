$(document).ready(function () {
    let colors = {
        'darkyellow': '#fddf3b',
        'green': '#37aa50',
        'blue': '#3f59b7',
        'lightblue': '#1881d2',
        'purple': '#c23dd2',
        'gray': '#c5c5c5',
    }

    let customToolTip = $('.lesson__info-block');

    const getOrCreateTooltip = (chart) => {
        let tooltipEl = customToolTip;
        if (!tooltipEl)  { // Создание tooltip если, он не найден
            /*tooltipEl = document.createElement('div');
            tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
            tooltipEl.style.borderRadius = '3px';
            tooltipEl.style.color = 'white';
            tooltipEl.style.opacity = 1;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.transform = 'translate(-50%, 0)';
            tooltipEl.style.transition = 'all .1s ease';

            const table = document.createElement('table');
            table.style.margin = '0px';

            tooltipEl.appendChild(table);
            chart.canvas.parentNode.appendChild(tooltipEl);*/
        }

        return tooltipEl;
    };

    function clickHandler(evt) {
        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
            const firstPoint = points[0];

            allBluePoints(firstPoint.datasetIndex);

            if(!$(customToolTip).hasClass('hide'))
                $(customToolTip).addClass('hide');
            else {
                $(customToolTip).removeClass('hide');
            }
            //Нажатый point
            myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor[firstPoint.index] = colors['green'];

            myChart.update();
        }

        else {
            let dataSets = myChart.data.datasets;
            for(let i = 0; i < dataSets.length; i++) {
                allBluePoints(i);
            }
        }
    }

    function allBluePoints(index) {
        let borderPointsCount = myChart.data.datasets[index].pointBorderColor.length;
        for(let i = 0; i < borderPointsCount; i++) {
            myChart.data.datasets[index].pointBorderColor[i] = colors['blue'];
        }
    }

    const externalTooltipHandler = (context) => {
        // Tooltip Element
        const {chart, tooltip} = context;
        const tooltipEl = getOrCreateTooltip(chart);

        const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
        //$(tooltipEl).css({top: positionY + tooltip.caretY - $(tooltipEl).height() + 84 + 'px', left: positionX + tooltip.caretX + 'px'}); // + 84 (header + 12px)
        $(tooltipEl).css({top: positionY + tooltip.caretY - $(tooltipEl).height() + 84 + 82 + 'px', left: positionX + tooltip.caretX + 'px'}); // + 84 (header + 12px) + 82 (tabs+margin-bottom)
    };

    var ctx = $('#myChart');

    $(ctx).click(function (evt) {
        $(customToolTip).addClass('hide');

        const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

        if (points.length) {
            const firstPoint = points[0];

            let borderPointsCount = myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor.length;

            for(let i = 0; i < borderPointsCount; i++) {
                myChart.data.datasets[firstPoint.datasetIndex].pointBorderColor[i] = colors['blue'];
            }

            myChart.update();
        }
    });

    const data = [{}];
    let date = Date.parse('2020-01-01');
    for (let day = 1; day <= 20; day++) {

        date = new Date(date);
        date.setDate(day);
        data.push({
            x: date,
            y: Math.floor(Math.random() * (300 - 0 + 1)) + 0
        });
    }

    console.log(data);

    const days = [];

    days.push('jun');
    for (let i = 1; i < data.length; i ++) {
        days.push(data[i].x.getDate());
    }
    days.push('jul');

    var myChart = new Chart(ctx, {
        type: 'line',
        			data: {
                        labels: ['1', '2', '3', '4', '5', '6', 'jul', '7','5','5','5','5','5','5','5','5','5','5','5', '5','5','5','5','5','5','5','5','5','5','5','5'],
                        //labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
                        //labels: days,
                        datasets: [
                            {
                                ///label: '',
                                /*data: [
                                    { x: "1", y: 10 },
                                    { x: "7", y: 20 },
                                    { x: "10", y: 150 },
                                    { x: "11", y: 160 },
                                    { x: "16", y: 60 },
                                    null,
                                    null,
                                    { x: "18", y: 100 },
                                    { x: "20", y: 150 }
                                ],*/
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                ],
                                borderColor: [
                                    colors["darkyellow"],
                                ],
                                pointStyle: ['circle'],
                                borderWidth: 2,
                                pointRadius: 9,
                                pointBackgroundColor: '#ffffff',
                                pointBackgroundColorOpacity: 1,
                                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                                pointBorderWidth: 5,
                                pointHoverBorderWidth: 5,
                                pointHoverRadius: 9,
                                pointHoverBackgroundColor: '#ffffff',
                                fill: false,
                            },
                            {
                                label: '',
                                data: [null, 270, null, null, null, null, null, 140, 200],
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                ],
                                borderColor: [
                                    colors["lightblue"],
                                ],
                                pointStyle: ['circle'],
                                borderWidth: 2,
                                pointRadius: 9,
                                pointBackgroundColor: '#ffffff',
                                pointBackgroundColorOpacity: 1,
                                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                                pointBorderWidth: 5,
                                pointHoverBorderWidth: 5,
                                pointHoverRadius: 9,
                                pointHoverBackgroundColor: '#ffffff',
                                fill: false,
                            },
                            {
                                label: '',
                                data: [null, 150, null, null, null, null, 30, null, 60],
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                ],
                                borderColor: [
                                    colors["purple"],
                                ],
                                pointStyle: ['circle'],
                                borderWidth: 2,
                                pointRadius: 9,
                                pointBackgroundColor: '#ffffff',
                                pointBackgroundColorOpacity: 1,
                                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                                pointBorderWidth: 5,
                                pointHoverBorderWidth: 5,
                                pointHoverRadius: 9,
                                pointHoverBackgroundColor: '#ffffff',
                                fill: false,

                            },
                        ],
                        /*datasets: [{
                            data: [
                                { x: "2020-03-22", y: 300 },
                                { x: "2020-04-01", y: 0 },
                                { x: "2020-04-02", y: 0 },
                                { x: "2020-04-03", y: 0 },
                                { x: "2020-04-08", y: 0 },
                                { x: "2020-04-12", y: 0 },
                                { x: "2020-04-15", y: 0 }
                            ],
                        }],*/
                        xAxes: [{
                            type: 'time',
                            barThickness: 15,
                            time: {
                                unit: 'day',
                               /* unitStepSize: 1,
                                tooltipFormat: 'DD/MM'*/
                            },

                        }],
                        yAxes: [{
                            min: 0,
                            max: 300,
                            beginAtZero: true,
                        }],
                    },
        options: {
            animation: true,
            // Растяжение по x
            responsive: true,
            maintainAspectRatio: false,
            showScale: false,

            spanGaps: true, // разрешает null значения для пропуска

            events: ['click'], // tooltip только по click

            plugins: {
                legend: {
                    display: false, // надпись обозначающая цвет
                },
                tooltip: {
                    enabled: false,
                    position: 'nearest',
                    external: externalTooltipHandler,
                }
            },
            scales: {
                x: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: true,
                    },
                },
                y: {
                    ticks: {
                        fontSize: 12,
                        fontWeight: 300,
                        color: colors['gray'],
                        display: true,
                        stepSize: 30
                    },
                    min: 0,
                    max: 300,
                    beginAtZero: true,
                },

            },
            onClick: clickHandler
        }
    });


    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.push(data);
        chart.update();
    }

    function clearChart(chart) {
        chart.data.datasets.forEach((dataset) => {
            delete dataset.data;
        });
        chart.update();
    }

    (function AddNewDataSet(data, borderColor) {
        // В поступающие данные (data количество элементов, должно быть равно максимальному числу элементов на графике)
        //data = [1,1,1,1,1,50,50,50,50,50];

        //цвет рамки в массиве
        //borderColor = ['#ff0000'];

        addData(myChart, "",
            {
                label: '',
                data: data,
                backgroundColor: [
                    'rgba(255, 255, 255, 1)',
                ],
                borderColor: borderColor,
                pointStyle: ['circle'],
                borderWidth: 2,
                pointRadius: 9,
                pointBackgroundColor: '#ffffff',
                pointBackgroundColorOpacity: 1,
                pointBorderColor: [colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'], colors['blue'],colors['blue'],colors['blue']],
                pointBorderWidth: 5,
                pointHoverBorderWidth: 5,
                pointHoverRadius: 9,
                pointHoverBackgroundColor: '#ffffff',
                fill: false,
            }
        );

        // Добавление табам рамку
        for(let i = 0; i < myChart.data.datasets.length; i++) {
            $($('.tabs-block.users > .tabs > .tabs__item')[i]).css({"border":"1px solid "+myChart.data.datasets[i].borderColor[0]});
        }
    })();

    function AddNewTab(userImage, name, year) {

        let tabs__item = $('<li class="tabs__item"></li>');

        let item_wrapper = $('<div class="item_wrapper"></div>');

        let user_photo = $('<div class="user_photo"></div>');
        let image = $('<img class="clip-svg image" src='+userImage+' alt="">');
        $(user_photo).append(image);

        let user_name = $('<p class="user_name">'+name+' <span class="year">'+year+'</span></p>');

        let crossButton = $('<button class="crossButton"><svg class="icon_cross" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"> <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path></svg></button>');

        $(item_wrapper).append(user_photo);
        $(item_wrapper).append(user_name);
        $(item_wrapper).append(crossButton);

        $(tabs__item).append(item_wrapper);

        $('.tabs-block > .tabs').append(tabs__item);
    }

    function RemoveAllTabs() {
        $('.tabs-block.users > .tabs').empty();
    }
});