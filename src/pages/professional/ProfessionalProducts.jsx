import React from "react";
import ProductInProfessionalsProductCard from "../../components/ProductInProfessionalsProductCard"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function ProfessionalProducts()
{
      return (<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
          <Menu.Item key="Add a new Product">Add a new Product</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div className="container">
          <div className="row">
          <div className="col">
            <ProductInProfessionalsProductCard></ProductInProfessionalsProductCard>
          </div>
          <div className="col">
            <ProductInProfessionalsProductCard></ProductInProfessionalsProductCard>
          </div>
          <div className="col">
            <ProductInProfessionalsProductCard></ProductInProfessionalsProductCard>
          </div>
          <div className="col">
            <ProductInProfessionalsProductCard></ProductInProfessionalsProductCard>
          </div>
          </div>
          </div>
        </Content>
      </Layout>);
}
export default ProfessionalProducts;