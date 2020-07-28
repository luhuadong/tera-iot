import React from 'react'
import 'antd/dist/antd.css';
import { Button, DatePicker, InputNumber } from 'antd';
import moment from 'moment';
import { Chart, Legend, Geom, Axis, Tooltip, Guide } from "bizcharts";
import { connect } from 'dva';

const { RangePicker } = DatePicker;
const dateFormat = "MM-DD HH:mm:ss"

const { Line } = Guide;

//连接绑定model的state到组件的props
const mapStateToProps = (state) => {
  const chartContent = state.main.chart;
  const threshold = state.main.tempCard.threshold;
  const deviceName = state.main.deviceName;
  return {
    chartContent,
    threshold,
    deviceName
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectChartDataByTime(params) {
      dispatch({
        type: `main/selectChartDataByTime`,
        payload: params
      });
    },
    setAlarmThreshold(params) {
      dispatch({
        type: `main/setAlarmThreshold`,
        payload: params
      });
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class HistoricalChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beginTime: moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      setThreshold: this.props.threshold,
    }
  }

  //组件即将加载时执行
  async componentWillMount() {
    await this.props.selectChartDataByTime({
      startTime: this.state.beginTime,
      endTime: this.state.endTime
    });
  }

  //store的state发生变化触发，在选择deviceName后触发数据的重新请求
  async componentWillReceiveProps(nextProps) {
    if (this.props.deviceName !== nextProps.deviceName) {
      await this.props.selectChartDataByTime({
        startTime: this.state.beginTime,
        endTime: this.state.endTime
      });
    }
  }

  render() {
    //时间段选项点击ok时的回调函数
    const datePickerOnOk = (dates) => {
      this.setState({
        beginTime: dates[0].format('YYYY-MM-DD HH:mm:ss'),
        endTime: dates[1].format('YYYY-MM-DD HH:mm:ss')
      });
    }
    //时间段选择后点击提交的回调函数
    const dateRangerButtonOnClick = () => {
      //查询表格内的历史属性数据
      this.props.selectChartDataByTime({
        startTime: this.state.beginTime,
        endTime: this.state.endTime
      });
    }
    //超限输入框变化时的回调函数
    const thresholdOnChange = (number) => {
      this.setState({
        setThreshold: number
      });
    }
    //超限点击按钮提交后的回调
    const thresholdSetOnClick = () => this.props.setAlarmThreshold({ tempThreshold: this.state.setThreshold });

    let data = this.props.chartContent.dataList;
    let threshold = this.props.threshold;
    const cols = {
      gmtCreate: {
        alias: "时间"
      },
      currentHumidity: {
        alias: "相对湿度(%)"
      },
      currentTemperature: {
        alias: "温度(℃)"
      }
    };
    return (
      <div style={{ padding: [0, "50px", "50px", 0,] }}>
        <div>
          选择查询时间 &nbsp;
          <RangePicker
            defaultValue={[moment().startOf('month'), moment()]}
            ranges={{ '今天': [moment().startOf('day'), moment()], '本周': [moment().startOf('week'), moment()] }}
            onOk={datePickerOnOk}
            format={dateFormat}
            showTime={true}
          />
          &nbsp;
          <Button type="primary" style={{ display: 'abslute', top: 0 }} onClick={dateRangerButtonOnClick}>
            提交
          </Button>
          &nbsp;
          &nbsp;
          修改温度阈值 &nbsp;
          <InputNumber
            defaultValue={threshold}
            precision={1}
            min={0}
            max={100}
            formatter={value => `${value}℃`}
            parser={value => value.replace('℃', '')}
            onChange={thresholdOnChange}
          />
          &nbsp;
          <Button type="primary" style={{ display: 'abslute', top: 0 }} onClick={thresholdSetOnClick}>
            提交
          </Button>
        </div>
        <Chart padding={[60, 100, 100, 'auto']} height={400} data={data} scale={cols} forceFit>
          <Legend />
          <Axis name="gmtCreate" title />
          <Axis
            name="currentTemperature"
            title
            label={{ formatter: val => `${val}°C` }}
          />
          <Axis
            name="currentHumidity"
            title
            label={{ formatter: val => `${val}%` }}
          />
          <Tooltip
            // title={"hh"}
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="gmtCreate*currentTemperature"
            size={4}
            // shape={"smooth"}
            color={"#0099ff"}
          />
          <Geom
            type="line"
            position="gmtCreate*currentHumidity"
            size={4}
            color={"#33cc33"}
          // shape={"smooth"}
          />
          <Guide>
            <Line
              top={true} // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
              start={['min', threshold]} // 辅助线起始位置，值为原始数据值，支持 callback
              end={['max', threshold]} // 辅助线起始位置，值为原始数据值，支持 callback
              lineStyle={{
                stroke: '#FF5C68', // 线的颜色
                lineDash: [0, 2, 2], // 虚线的设置
                lineWidth: 3 // 线的宽度
              }} // 图形样式配置
              text={{
                position: 'start', // 文本的显示位置
                autoRotate: true, // 是否沿线的角度排布，默认为 true
                style: { fill: "red" }, // 文本图形样式配置
                content: "温度报警阈值:" + threshold + "℃", // 文本的内容
                offsetY: -5 // y 方向的偏移量
              }}
            />
          </Guide>
        </Chart>
      </div>
    );
  }
}