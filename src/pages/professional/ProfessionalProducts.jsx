import React, { useEffect, useState } from "react";
import ProductInProfessionalsProductCard from "../../components/ProductInProfessionalsProductCard"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import axios from "axios"

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function ProfessionalProducts()
{
     const [services,updateServices]=useState([]);
     const [loading,updateLoading]=useState(true);
     const {user}=useSelector((state)=>{return state});
     useEffect(()=>
     { 
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/professional/ownedproducts`,{},{
        headers:{
          authtoken:user.idToken
        }
      })
      .then((result)=>
      {
          updateServices(result.data);
          console.log("result data:",result.data);
          console.log("services:",services);
          updateLoading(false);
      })
      .catch((error)=>{console.log(error)});
     },[]);
     function deleteService(serviceId)
     {
      updateServices(services.filter(item => item._id !== serviceId));
     } 
     function getCard(service)
     {
        return <div className="col">
        <ProductInProfessionalsProductCard  service={service} deleteService={deleteService}></ProductInProfessionalsProductCard>
        </div>
     }
      return (<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
          <Menu.Item key="Add a new Product"><Link to="/professional/add-product">Add a product</Link></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div className="container">
          <div className="row">
           {!loading&&services.map(getCard)}
          </div>
          </div>
        </Content>
      </Layout>);
}
export default ProfessionalProducts;