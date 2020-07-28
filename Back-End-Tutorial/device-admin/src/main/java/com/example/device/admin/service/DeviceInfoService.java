package com.example.device.admin.service;

import com.example.device.admin.dao.entity.bo.DeviceLifecyclePost;
import com.example.device.admin.dao.entity.bo.DevicePropertyPost;
import com.example.device.admin.dao.entity.po.DeviceInfo;


import java.util.Set;

public interface DeviceInfoService {
    boolean updateStatus(String deviceName, String status);

    DeviceInfo getDeviceInfoByDeviceName(String deviceName);

    Set<String> listDeviceNames();

    Boolean updateOrInsertDeviceProperty(DevicePropertyPost devicePropertyPost);

    Boolean insertOrDelete(DeviceLifecyclePost deviceLifecycle);

    Boolean updateAlarmStatus(String deviceName,Float currentTemperatureValue, boolean b);

    void updateTempThreshold(String deviceName, Float tempThreshold);
}
