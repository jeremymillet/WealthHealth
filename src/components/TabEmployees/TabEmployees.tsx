import { /*useContext,*/ useState } from 'react';
import { Table, Select, Input} from 'antd';
/*import { UsersContext } from '../../context/UsersContext';*/
const { Option } = Select;
const { Search } = Input;
import {User} from '../../types/index'
import './TabEmployees.css'
import dayjs, { Dayjs } from 'dayjs';
import data from '../../selectData.json'

const dataSource: User[] = data.dataSource.map(user => ({
  ...user,
  Id: Number(user.Id),
  StartDate: dayjs(user.StartDate), 
  DateOfBirth: dayjs(user.DateOfBirth),
  ZipCode : Number(user.ZipCode),

}));
 const tableColumns = [
    {
        title: 'First Name',
        dataIndex: 'FirstName',
        key: 'FirstName',
        sorter: (a: User, b: User) => a.FirstName.localeCompare(b.FirstName),
    },
    {
        title: 'Last Name',
        dataIndex: 'LastName',
        key: 'LastName',
        sorter: (a: User, b: User) => a.LastName.localeCompare(b.LastName),
    },
    {
        title: 'Start Date',
        dataIndex: 'StartDate',
        key: 'StartDate',
        sorter: (a: User, b: User) => a.StartDate.unix() - b.StartDate.unix(),
        render: (value: Dayjs) => {
            return (<p>{value.format("MM/DD/YYYY")}</p>)
        }
    },
    {
        title: 'Department',
        dataIndex: 'Department',
        key: 'Department',
        sorter: (a: User, b: User) => a.Department.localeCompare(b.Department),
    },
    {
        title: 'Date of Birth',
        dataIndex: 'DateOfBirth',
        key: 'DateOfBirth',
        sorter: (a: User, b: User) => a.DateOfBirth.unix() - b.DateOfBirth.unix(),
        render: (value: Dayjs) => (<p>{value.format("MM/DD/YYYY")}</p>)
    },
    {
        title: 'Street',
        dataIndex: 'Street',
        key: 'Street',
        sorter: (a: User, b: User) => a.Street.localeCompare(b.Street),
    },
    {
        title: 'City',
        dataIndex: 'City',
        key: 'City',
        sorter: (a: User, b: User) => a.City.localeCompare(b.City),
    },
    {
        title: 'State',
        dataIndex: 'State',
        key: 'State',
        sorter: (a: User, b: User) => a.State.localeCompare(b.State),
    },
    {
        title: 'Zip Code',
        dataIndex: 'ZipCode',
        key: 'ZipCode',
        sorter: (a: User, b: User) => a.ZipCode - b.ZipCode,
    },
];

function TabEmployees() {
    /*const usersContext = useContext(UsersContext);*/
   /* const { users } = usersContext;*/
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchText, setSearchText] = useState('');

    const handlePageSizeChange = (value: number) => {
        
        setPageSize(value);
    };

    const handleSearch = (value:string) => {
        setSearchText(value.toLowerCase());
    };

    
    const filteredUsers = dataSource.filter(user =>
        Object.values(user).some(val =>
            typeof val === 'string' && val.toLowerCase().includes(searchText)
        )
    );

    const sortUsers = filteredUsers;
   
    return (
        <div>
            <div className="header-table-container">
                <Select
                defaultValue={10}
                style={{ width: 120 }}
                onChange={handlePageSizeChange}
                >
                    <Option value={10}>10 lignes</Option>
                    <Option value={20}>20 lignes</Option>
                    <Option value={30}>30 lignes</Option>
                    <Option value={40}>40 lignes</Option>
                    <Option value={50}>50 lignes</Option>
                </Select>
                <Search placeholder="Search"  onSearch={handleSearch}/>
            </div>
            <Table
                dataSource={sortUsers}
                columns={tableColumns}
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: filteredUsers.length,
                    onChange: setCurrentPage,
                }}
                bordered
                rowKey="id"
                locale={{ emptyText: 'No data available in table' }}
            />
            <div className='pagination-container'>
                <div>
                    {`Showing ${(currentPage - 1) * pageSize + 1} to ${Math.min(
                        currentPage * pageSize,
                        sortUsers.length
                    )} of ${sortUsers.length} entries`}
                </div>
                
            </div>
        </div>
    )
}

export default TabEmployees