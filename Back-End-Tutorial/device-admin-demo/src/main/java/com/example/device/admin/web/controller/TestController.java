package com.example.device.admin.web.controller;
import com.example.device.admin.dao.entity.po.TestModel;
import com.example.device.admin.dao.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

/**
 * @Controller 标记一个类是Controller 控制器Controller负责处理由DispatcherServlet分发的请求，它把用户请求的数据经过业务
 * 处理层处理之后封装成一个Model，然后再把该Model返回进行展示。
 * @Autowired 按照类型装配依赖对象
 *@RequestMapping 是一个用来处理请求地址映射的注解 value：指定请求的实际地址；method ：指定请求的method类型
 * @ResponseBody  该注解用于将Controller的方法返回的对象为json格式
 */
@Controller
public class TestController {

    @Autowired
    private TestMapper testMapper;



    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public   @ResponseBody Object  hello2() {
        List<TestModel> testModels = testMapper.selectAllData();
        return testModels;
    }


    @RequestMapping(value = "/testTKMybatis",method = RequestMethod.GET)
    public   @ResponseBody Object  hello() {
        List<TestModel> testModels = testMapper.selectAll();
        return testModels;
    }

}
