<template>
  <Pie :id="id" :option="option"></Pie>
</template>
<script>
import Pie from "../components/pie.vue";
export default {
  components: {
    Pie,
  },
  data() {
    return {
      id: "pie1",
      option: {
        chart: {
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0,
          },
        },
        title: {
        //   text: "测试用", //图表的标题文字
           text: null, //图表的标题文字
        },
        subtitle: {
        //   text: "副标题文字", //副标题文字
            text: null, //副标题文字
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        // colors: [
        //   "#FF0000",
        //   "#00FF00",
        //   "#0000FF",
        //   "#FFFF00",
        //   "ff6600",
        //   "3d4f90",
        // ],
        credits: {
          enabled: false, //禁用版权url    此处不设置，  会显示highecharts.com
        },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 35, //饼图的厚度
			slicedOffset: 30,
            dataLabels: {
              distance: 28, //设置引导线的长度
              // color:'red',//全局设置字体颜色
              enabled: true, //是否显示饼图的线形tip
              backgroundColor: "pink", // 数据标签背景颜色
              borderColor: "green", // 数据标签边框颜色
              borderWidth: 1, //数据标签边框宽度
              borderRadius: 5, // 数据标签边框圆角
              color: "#ff6600", // 数据标签字体颜色
              padding: 5, // 数据标签的内边距
              //   format: "{point.name}",
              formatter: function () {
                //设置字体与引导线和饼图颜色一致

                if (
                  this.point.name == "测试1" ||
                  this.point.name == "测试2" ||
                  this.point.name == "测试3"
                ) {
                  return (
                    '<span style="color:#FF0000">[' +
                    this.point.name +
                    this.point.y +
                    "]</span>"
                  );
                  // }else if(this.point.name == '测试2'){
                  //     return '<span style="color:#00FF00">['+ this.point.name +'%]</span>';
                  // }else if(this.point.name == '测试3'){
                  //     return '<span style="color:#0000FF">['+ this.point.name +'%]</span>';
                } else if (this.point.name == "测试4") {
                  return (
                    '<span style="color:#FFFF00">[' +
                    this.point.name +
                    this.point.y +
                    "]</span>"
                  );
                } else if (this.point.name == "测试5") {
                  return (
                    '<span style="color:#ff0000">[' +
                    this.point.name +
                    this.point.y +
                    "]</span>"
                  );
                } else if (this.point.name == "测试6") {
                  return (
                    '<span style="color:#000000">[' +
                    this.point.name +
                    this.point.y +
                    "]</span>"
                  );
                }
              },
            },
          },
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#FF9655', '#FFF263', '#6AF9C4'],// '#24CBE5', '#64E572',
        series: [
          {
            type: "pie",
            name: "测试用1", //统一的前置词,非必须
            startAngle: 180,
            // zIndex: 2,
            data: [
                {name: '测试1',y: 12},
                {name: '测试2',y: 22},
                {name: '测试3',y: 15},
                {name: '测试4',y: 18},
                {name: '测试5',y: 27,sliced: true},
                {name: '测试6',y: 13},
            ],
          },
        ],
      },
    };
  },
};
</script>
<style lang="less" scoped></style>
