function fn() {
// 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
// 引入雷达图
    require('echarts/lib/chart/radar');
// 引入提示框和标题组件
    require('echarts/lib/component/radar');
    require('echarts/lib/component/title');
    var myChart = echarts.init(document.getElementById('skills'));

    // 指定图表的配置项和数据
    var option = {
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#444',
                    borderRadius: 3,
                    fontSize:9,
                    // margin:[-3,9]
                },
            },
            indicator: [
                { name: 'HTML', max: 100},
                { name: 'CSS3', max: 100},
                { name: 'JavaScript', max: 100},
                { name: 'Vue', max: 100},
                { name: 'Canvas', max: 100},
                { name: 'HTTP', max: 100}
            ]
        },
        series: [{
            name: '掌握技能',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [85, 75, 80, 60, 70, 68],
                    name : '能力评估'
                }
            ]
        }],
        grid: {
            left: "10%",
            top: "10%",
            bottom: "10%",
            right: "10%",
            containLabel: true
        },
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
export default fn