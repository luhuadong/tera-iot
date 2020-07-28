package com.example.device.admin.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan(basePackages = "com.example.device.admin.dao.mapper")
public class DeviceAdminApplication {
	public static void main(String[] args)
	{
		SpringApplication.run(DeviceAdminApplication.class, args);
	}
}

