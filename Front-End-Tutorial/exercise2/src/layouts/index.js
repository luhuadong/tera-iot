import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Select } from 'antd';
const Option = Select.Option;
const { Header, Footer, Content } = Layout;

class BasicLayout extends React.Component {

  render() {
    //Select组件的选择回调函数
    const onSelect = (value) => {
      console.log("选中：" + value);
    }
    return (
      <div>
        <Layout>
          <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: "white", fontSize: '24px', fontWeight: 'bold', float: 'left' }}>阿里云IoT | ST 智能家居教程</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>请选择设备deviceName:
              &nbsp;
              <Select style={{ width: '200px', float: 'right' }}
                placeholder="当前返回无设备"      //当默认没有Option或者未选中Option(注释defaultValue)时显示
                onChange={onSelect}             //Select组件的选择回调，输出选中Option的value属性，参见Select组件API文档
                defaultValue={"默认设备[待替换]"} //默认选中的选项，应填充设备
              >
                <Option value={"device1"}>device1</Option> 
                <Option value={"device2"}>device2</Option> 
                <Option value={"device3"}>device3</Option> 
              </Select>
            </div>
          </Header>
          <Content>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#001529' }}>
            <div style={{ color: "white" }}>
              Exercise 2
          </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default BasicLayout;
