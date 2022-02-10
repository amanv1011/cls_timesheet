import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardTemplate from '../../layouts/template'
import { withRouter} from 'react-router'
import styled from "styled-components";
import { Table, Tag, Space } from 'antd';
import { time, calender, group, bag, arrow } from "../../../assets/images"
import './style.css'

const Wrapper = styled.div``;
const Container = styled.div``;
const TimeContainer = styled.div`
display:flex;
margin-bottom:1em;
gap:10px;
`;
const TimeBoxes = styled.div`
background:#fff;
width:25%;
border-radius:15px;
display:flex;
justify-content:space-between;
padding:1.5em;
align-items: center;

`;
const TableContainer = styled.div`
border-radius:20px;
`
const PageHeader = styled.div`


`

class Dashboard extends React.Component {
  render() {

    const columns = [
  {
    title: 'Projects',
    dataIndex: 'project',
    key: 'project',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Project Owner',
    dataIndex: 'owner',
    key: 'age',
  },
  {
    title: 'Engagement Type',
    dataIndex: 'engagement',
    key: 'address',
  },
  {
    title: 'Project Health',
    key: 'tags',
    dataIndex: 'health',
    // render: tags => (
    //   <>
    //     {tags.map(tag => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
      },
    {
    title: 'Hours Logged',
    dataIndex: 'hours_logged',
      key: 'address',
    render: tags => (
      <div className="hoursLogged">{ tags}</div>
    )
      },
      {
    title: 'Members',
    dataIndex: 'members',
        key: 'address',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: 'Members',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data = [
  {
    key: '1',
    project: 'John Brown',
    owner:'John Brown',
    health: 'good',
    hours_logged:'36h 15m',
    engagement: 'Fixed',
    members: ['nice', 'developer'],
  },
  {
    key: '2',
    project: 'Jim Green',
    owner:'John Brown',
    health: 'average',
    hours_logged:'36h 15m',
    engagement: 'Dedicated',
    members: ['loser'],
  },
  {
    key: '3',
    project: 'Joe Black',
    owner:'John Brown',
    health: 'bad',
    hours_logged:'36h 15m',
    engagement: 'Dedicated',
    
    members: ['cool', 'teacher'],
  },
];


    return (<Wrapper>
      <Container>
        <PageHeader>
          <div className="PageHeader-title">Dashboard</div>
          <div className="calender"></div>
          </PageHeader>
        <TimeContainer>
          <TimeBoxes>
            <div>
              <div className='time'>8h 15m</div>
              <p className = 'description'>Today</p>
            </div>
            <div><img src={ time} alt="" /></div>
          </TimeBoxes>
          <TimeBoxes>
            <div>
            <div className='time'>17h 15m</div>
            <p className = 'description'>This Week</p>
            </div>
            <div><img src={ calender} alt=""/></div>
          </TimeBoxes>
          <TimeBoxes>
            <div>
            <div className='time'>05</div>
            <p className = 'description'>User Worked</p>
            </div>
            <div><img src={ group} alt=""/></div>
          </TimeBoxes>
          <TimeBoxes>
            <div>
            <div className='time'>02 of 15</div>
            <p className = 'description'>Worked Projects</p>
            </div>
            <div><img src={ bag} alt=""/></div>
          </TimeBoxes>
        </TimeContainer>
        <TableContainer style={{borderRadius:'20px'}}>
        <div style={{background:"#fff", width:"100%", padding:"1em 0.5em 1em 1em", borderRadius:'1em 1em 0 0'}}>
          <h5>Active Projects</h5>
            
        </div>

          <Table columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 500 }}
          />
          <div align="center" className="footer" style={{background:"#fff", width:"100%", padding:"1em 0.5em 1em 1em", textAlign:'center', borderRadius:'0 0 1em 1em'}}>
            <a style={{textAlign:  'center'}}>View Projects  <img src={arrow} alt=""/></a>
            
        </div>
      </TableContainer>
      </Container>
    </Wrapper>);
  }
}

const mapStateToProps = (store) => {
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default DashboardTemplate(connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard)));
