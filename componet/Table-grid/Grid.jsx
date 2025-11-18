
import { Datagrid } from "../Data-grid/datagrid"
export function GridingTable()
{
    return(
        <div className="container-fluid">
            <h2>Employee</h2>
            <Datagrid theam='table-dark text-white' caption="upadated on dec 2024"fields={['Firstname', 'Lastname', 'Desingnation']} data={[{Firstname:'sashwat',Lastname:'Mohanty',Desingnation:'CEO'},{Firstname:'bilu',Lastname:'badsha',Desingnation:'manager'},{Firstname:'Dhamu',Lastname:'saheb',Desingnation:'employee'}]} />
            <h2>product</h2>
            <Datagrid theam='table-danger text-white' caption="product update on jan 2025"fields={['name','price','color','rattings']} data={[{name:'iphone',price:'50,000',color:'black',rattings:'2000'},{name:'mi',price:'10,000',color:'black',rattings:'1000'}]}/>

        </div>
    )
}