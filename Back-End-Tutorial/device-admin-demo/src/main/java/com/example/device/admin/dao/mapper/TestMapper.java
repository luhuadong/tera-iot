package com.example.device.admin.dao.mapper;


import com.example.device.admin.dao.entity.po.TestModel;
import tk.mybatis.mapper.common.BaseMapper;

import java.util.List;


public interface TestMapper extends BaseMapper<TestModel> {

    List<TestModel> selectAllData();

}
