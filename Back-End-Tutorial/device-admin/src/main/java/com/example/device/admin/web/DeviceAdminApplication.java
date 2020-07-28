package com.example.device.admin.web;

import com.example.device.admin.service.impl.DeviceInfoServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication(scanBasePackages = "com.example.device.admin")
@MapperScan(basePackages = "com.example.device.admin.dao.mapper")
public class DeviceAdminApplication {
	public static void main(String[] args) {
		 SpringApplication.run(DeviceAdminApplication.class, args);

    }
}


