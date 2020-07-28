import {
    getDeviceList,
    queryDeviceProp,
    selectChartDataByTime,
    setDeviceProperty,
    queryAlarmHistoryLogs,
    clearAlarm
} from '../../../axios/index';
import { message } from 'antd';


export default {
    //储存model的state状态
    state: {
        deviceName: "",
        deviceSelectList: [],
        alarmCard: {
            state: true,
            recentAlarmTime: null
        },
        onlineCard: {
            state: "在线",
            recentOnlineTime: null
        },
        tempCard: {
            value: 22,
            threshold: 22
        },
        humiCard: {
            value: 43,
            sensor: "DHT11温湿度传感器"
        },
        updateTime: "待初始化",
        chart: {
            dataList: [],
        },
        table: {
            data: []
        }
    },

    reducers: {
        update(state, { payload }) {
            let newState = payload;
            return {
                ...state,
                ...newState
            };
        },
    },
    //异步操作，通过reducers间接更新state，返回的结果先调用reducer
    effects: {
        *getDeviceList({ payload }, { call, put }) {
            let res = yield call(getDeviceList);
            yield put({
                type: 'update',
                payload: {
                    deviceName: res.data[0] !== null ? res.data[0]:"暂无设备",
                    deviceSelectList: res.data
                },
            });
        },
        //周期性更新数据，封装成newState更新
        *queryDeviceProp({ payload }, { call, put }) {
            let res = yield call(queryDeviceProp, payload);
            yield put({
                type: 'update',
                payload: {
                    alarmCard: {
                        state: res.data.alarmStatus,
                        recentAlarmTime: res.data.lastAlarmDate
                    },
                    onlineCard: {
                        state: res.data.connectStatus,
                        recentOnlineTime: res.data.lastOnlineDate
                    },
                    tempCard: {
                        value: res.data.currentTemperature,
                        threshold: res.data.tempThreshold
                    },
                    humiCard: {
                        value: res.data.currentHumidity,
                        sensor: "DHT11温湿度传感器"
                    },
                    updateTime: res.data.gmtUpdate
                },
            });
        },
        //根据起止时间查询设备温湿度数据
        *selectChartDataByTime({ payload }, { call, put, select }) {
            let deviceName = yield select(state => state.main.deviceName);
            let res = yield call(selectChartDataByTime, { ...payload, deviceName: deviceName });
            yield put({
                type: 'update',
                payload: {
                    chart: {
                        dataList: res.data
                    },
                }
            });
        },
        //设定报警超限值
        * setAlarmThreshold({ payload }, { call, select }) {
            let deviceName = yield select(state => state.main.deviceName);
            let res = yield call(setDeviceProperty, { ...payload, deviceName: deviceName });
            if (res.data.isSuccess === true) {
                message.success('提交成功···');
            }
        },

        //根据起止时间查询报警数据
        * selectTableDataByTime({ payload }, { call, put, select }) {
            let deviceName = yield select(state => state.main.deviceName);
            let res = yield call(queryAlarmHistoryLogs, { ...payload, deviceName: deviceName });
            yield put({
                type: 'update',
                payload: {
                    table: {
                        data: res.data
                    }
                }
            });
        },

        //清除报警
        * clearAlarm({ payload }, { call, select }) {
            console.log("执行了");
            let deviceName = yield select(state => state.main.deviceName);
            let res = yield call(clearAlarm, { deviceName: deviceName });
            if (res.code === 0) {
                message.success('提交成功···');
            }
        },
    }
}