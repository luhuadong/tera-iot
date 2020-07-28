import React from 'react'
import 'antd/dist/antd.css';
import { Table, DatePicker, Button } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = "MM-DD HH:mm:ss"

const data = [{
  "id": 1,
  "deviceName": "test_zhinengjiaju",
  "alarmTemperature": 10.0,
  "tempThreshold": 30.0,
  "gmtCreate": "2019-01-14 18:22"
}, {
  "id": 2,
  "deviceName": "test_zhinengjiaju",
  "alarmTemperature": 10.0,
  "tempThreshold": 15.0,
  "gmtCreate": "2019-01-15 10:32"
}, {
  "id": 3,
  "deviceName": "test_zhinengjiaju",
  "alarmTemperature": 10.0,
  "tempThreshold": 15.0,
  "gmtCreate": "2019-01-15 14:46"
}, {
  "id": 4,
  "deviceName": "test_zhinengjiaju",
  "alarmTemperature": 10.0,
  "tempThreshold": 15.0,
  "gmtCreate": "2019-01-15 14:47"
}];

const columns = [{
  title: '设备名',
  dataIndex: 'deviceName',
}, {
  title: '报警温度值',
  dataIndex: 'alarmTemperature',
}, {
  title: '报警时温度阈值',
  dataIndex: 'tempThreshold',
}, {
  title: '创建时间',
  dataIndex: 'gmtCreate'
}];

export default class HistoricalAlarmTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        beginTime: moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
        endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      }
    }

    render() {
    const datePickerOnOk = (dates) => {
      this.setState({
        beginTime: dates[0].format('YYYY-MM-DD HH:mm:ss'),
        endTime: dates[1].format('YYYY-MM-DD HH:mm:ss'),
      });
    }

    const rangerOnClick = () => console.log("点击起止时间提交");

    return (
      <div>
        <div style={{ paddingBottom: 20 }}>
          选择查询时间 &nbsp;
          <RangePicker
            defaultValue={[moment().startOf('month'), moment()]}
            ranges={{ '今天': [moment().startOf('day'), moment()], '本周': [moment().startOf('week'), moment()] }}
            onOk={datePickerOnOk}
            format={dateFormat}
            showTime={true}
          />
          &nbsp;
          <Button type="primary" style={{ display: 'abslute', top: 0 }} onClick={rangerOnClick}>
            提交
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </div>
    )
  }
}
