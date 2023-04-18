// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import APIService from '../Services/API/APIService';


// const NavHeader = () => {


//   const [user, setUser] = useState(null)
//   const navigate = useNavigate()


//   useEffect(() => {

//     // fetchData()

//   }, [])


//   // const fetchData = async () => {
//   //   try {
//   //     let  response = await APIService.fetchUser()
     
//   //     if(response &&  response.group[0] !== 'GUEST'){
    
//   //       setUser(response)
//   //     }
     
//   //   } catch (error) {

//   //   }
//   // }


//   return (<>
//     <Menu inverted secondary stackable >
//       <Menu.Item header style={{ backgroundColor: 'transparent' }}><Image src='https://res.cloudinary.com/duknzdiyw/image/upload/v1670859271/coop/coop-logo_svvrp0.png'
//         width={200} onClick={() => window.location.href = '/'} /></Menu.Item>
//         <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }}  as={'button'} onClick={() => window.location.href = '/'} > 
//             <Label icon={'home'} content={'Home'} style={{ backgroundColor: '#26f09e', color: '#000000' }} /></Menu.Item>
//       <Menu.Menu position='right'>
//         {user ? (
//           <>
//             <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }}  as={'button'} onClick={() => navigate('profile')} > 
//             <Label icon={'user circle'} content={user?.firstname || user?.email} style={{ backgroundColor: '#26f09e', color: '#000000' }} /></Menu.Item>
//             <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }} as={'button'} onClick={() => navigate('past-bookings') }> 
//             <Label icon={'list'} content={'Past Booking'}  style={{ backgroundColor: '#26f09e', color: '#000000' }} /></Menu.Item>
//             <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }} as={'button'} onClick={{}} icon={'sign-out'}>
//               <Label icon={'sign-out'} content={'Sign out'}  style={{ backgroundColor: '#26f09e', color: '#000000' }} />
//               </Menu.Item>
//           </>
//         ) : (

//           <>
//             <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }} as={'a'} href={'/login'}>
//             <Label icon={'lock'} content={'Login'}  style={{ backgroundColor: '#26f09e', color: '#000000' }} />
//             </Menu.Item>
//             <Menu.Item style={{ backgroundColor: '#26f09e', color: '#000000',margin: '2px' }} as={'a'} href={'/register'}>
//             <Label icon={'sign-in'} content={'Register'}  style={{ backgroundColor: '#26f09e', color: '#000000' }} />
//             </Menu.Item>
//           </>
//         )}

//       </Menu.Menu>
//     </Menu>
//     <Divider />

//   </>)
// }

// export default NavHeader;


import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}