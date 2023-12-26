


// // // import React, { Component } from 'react';
// // // import { Text, View, TouchableOpacity, StyleSheet, Picker } from 'react-native';
// // // import FeatherIcon from 'react-native-vector-icons/Feather';
// // // import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// // // export class TripHistory extends Component {
// // //   handleCloseProfile = () => {
// // //     // Handle close profile action
// // //     // You can navigate back or perform any other action
// // //   };

// // //   render() {
// // //     return (
// // //       <View style={styles.container}>
// // //         <View style={styles.headerContainer}>
// // //           <TouchableOpacity onPress={this.handleCloseProfile} style={styles.closeButton}>
// // //             <FeatherIcon name="x-circle" size={30} color="#fff" />
// // //           </TouchableOpacity>
// // //           <Text style={styles.headerText}>Trip History</Text>
// // //         </View>

// // //         {/* Additional components for History and This Month */}
// // //         <View style={styles.headerSubContainer}>
// // //           <Text style={styles.headerSubText}>History</Text>
// // //           <View style={[styles.dropdownContainer, { backgroundColor: 'red' }]}>
// // //             {/* Add your dropdown component here, I'm using Picker for example */}
// // //             <Picker>
// // //               <Picker.Item label="This Month" value="thisMonth" />
// // //               {/* Add other options as needed */}
// // //             </Picker>
// // //           </View>
// // //         </View>

// // //         {/* First Trip */}
// // //         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
// // //           {/* Row 1: Starting and Ending Places */}
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailcolumn}>
// // //               <View style={styles.detailRow}>
// // //                 {/* Red round icon for starting location */}
// // //                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
// // //                 <Text style={styles.detailTitle}>ezTruck Office</Text>
// // //                 <Text style={styles.detailText}>7:34 AM</Text>
// // //               </View>
// // //             </View>
// // //           </View>
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailRow}>
// // //               {/* Green location symbol for Esplanade */}
// // //               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
// // //               <Text style={styles.detailTitle}>Esplanade</Text>
// // //               <Text style={styles.detailText}>7:48 AM</Text>
// // //             </View>
// // //           </View>
// // //           {/* Row 2: Driver Information */}
// // //           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
// // //             <View style={styles.detailRow}>
// // //               {/* Blank circular container for profile picture */}
// // //               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
// // //               <View style={styles.detailcolumn}>
// // //                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
// // //                 <Text style={styles.detailTitle}>Star Rating</Text>
// // //               </View>
// // //               <Text style={styles.detailText}>Price: ₹500</Text>
// // //             </View>
// // //           </View>
// // //         </View>

// // //         {/* Second Trip */}
// // //         {/* ... (Repeat the structure for other trips) */}

// // //         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
// // //           {/* Row 1: Starting and Ending Places */}
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailcolumn}>
// // //               <View style={styles.detailRow}>
// // //                 {/* Red round icon for starting location */}
// // //                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
// // //                 <Text style={styles.detailTitle}>ezTruck Office</Text>
// // //                 <Text style={styles.detailText}>7:34 AM</Text>
// // //               </View>
// // //             </View>
// // //           </View>
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailRow}>
// // //               {/* Green location symbol for Esplanade */}
// // //               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
// // //               <Text style={styles.detailTitle}>Esplanade</Text>
// // //               <Text style={styles.detailText}>7:48 AM</Text>
// // //             </View>
// // //           </View>
// // //           {/* Row 2: Driver Information */}
// // //           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
// // //             <View style={styles.detailRow}>
// // //               {/* Blank circular container for profile picture */}
// // //               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
// // //               <View style={styles.detailcolumn}>
// // //                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
// // //                 <Text style={styles.detailTitle}>Star Rating</Text>
// // //               </View>
// // //               <Text style={styles.detailText}>Price: ₹500</Text>
// // //             </View>
// // //           </View>
// // //         </View>

// // //         {/* Repeat this structure for other trips as needed */}

// // //         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
// // //           {/* Row 1: Starting and Ending Places */}
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailcolumn}>
// // //               <View style={styles.detailRow}>
// // //                 {/* Red round icon for starting location */}
// // //                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
// // //                 <Text style={styles.detailTitle}>ezTruck Office</Text>
// // //                 <Text style={styles.detailText}>7:34 AM</Text>
// // //               </View>
// // //             </View>
// // //           </View>
// // //           <View style={styles.detailContainer}>
// // //             <View style={styles.detailRow}>
// // //               {/* Green location symbol for Esplanade */}
// // //               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
// // //               <Text style={styles.detailTitle}>Esplanade</Text>
// // //               <Text style={styles.detailText}>7:48 AM</Text>
// // //             </View>
// // //           </View>
// // //           {/* Row 2: Driver Information */}
// // //           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
// // //             <View style={styles.detailRow}>
// // //               {/* Blank circular container for profile picture */}
// // //               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
// // //               <View style={styles.detailcolumn}>
// // //                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
// // //                 <Text style={styles.detailTitle}>Star Rating</Text>
// // //               </View>
// // //               <Text style={styles.detailText}>Price: ₹500</Text>
// // //             </View>
// // //           </View>
// // //         </View>

// // //       </View>
// // //     );
// // //   }
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: 'white',
// // //   },
// // //   headerContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     padding: 10,
// // //     backgroundColor: '#EE272E',
// // //   },
// // //   closeButton: {
// // //     marginRight: 10,
// // //   },
// // //   headerText: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // //   headerSubContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     paddingHorizontal: 10,
// // //     backgroundColor: 'white',
// // //   },
// // //   headerSubText: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   dropdownContainer: {
// // //     borderRadius: 50,
// // //     backgroundColor: '#EE272E',
// // //     borderColor: 'black',
// // //   },
// // //   middleContainer: {
// // //     flex: 1,
// // //     justifyContent: 'space-between',
// // //     borderColor: '#E8E8E8',
// // //     borderWidth: 2,
// // //     borderRadius: 10,
// // //     backgroundColor: '#F0F0F0',
// // //     paddingHorizontal: 0,
// // //     paddingVertical: 0,
// // //     width: '75%',
// // //     height: 50,
// // //     alignItems: 'space-between',
// // //     paddingTop: 0,
// // //   },
// // //   spaceBetweenContainers: {
// // //     marginBottom: 10,
// // //     marginLeft: 50,
// // //     marginTop: 20,
// // //   },
// // //   detailContainer: {
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#ddd',
// // //   },
// // //   driverInfoContainer: {
// // //     backgroundColor: 'white',
// // //     width: '100%',
// // //     marginBottom: 1,
// // //     radiusBottom: 50,
// // //   },
// // //   detailTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     marginBottom: 5,
// // //   },
// // //   detailRow: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //   },
// // //   detailcolumn: {
// // //     flexDirection: 'column',
// // //   },
// // //   detailText: {
// // //     fontSize: 16,
// // //   },
// // //   locationIcon: {
// // //     marginRight: 5,
// // //   },
// // //   profilePictureContainer: {
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 40 / 2,
// // //     backgroundColor: '#ccc',
// // //     marginRight: 10,
// // //   },
// // // });

// // // export default TripHistory;



// // // /////////////////////////////////////////////////////////////

// // import React from 'react';
// // import { Text, View, TouchableOpacity, StyleSheet, Picker } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import FeatherIcon from 'react-native-vector-icons/Feather';

// // const TripHistory = () => {
// //   const navigation = useNavigation();

// //   const handleCloseProfile = () => {
// //     navigation.navigate('ContactScreen');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <TouchableOpacity onPress={handleCloseProfile} style={styles.profileContainer}>
// //           <FeatherIcon name="user" size={30} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Trip History</Text>
// //       </View>

// //       {/* Additional components for History and This Month */}
      
// //       {/* First Trip */}
// //       <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
// //         {/* Row 1: Starting and Ending Places */}
// //         <View style={styles.detailContainer}>
// //           <View style={styles.detailColumn}>
// //             <View style={styles.detailRow}>
// //               <FeatherIcon name="map-pin" size={15} color="red" style={styles.locationIcon} />
// //               <Text style={styles.detailTitle}>ezTruck Office</Text>
// //             </View>
// //           </View>
// //         </View>
// //         <View style={styles.detailContainer}>
// //           <View style={styles.detailRow}>
// //             <FeatherIcon name="map-pin" size={15} color="green" style={styles.locationIcon} />
// //             <Text style={styles.detailTitle}>Esplanade</Text>
// //           </View>
// //         </View>
// //       </View>

// //       {/* First Trip */}
// //       <View style={[styles.middleContainer2, styles.spaceBetweenContainers2]}>
// //         {/* Row 1: Starting and Ending Places */}
// //         <View style={styles.detailContainer2}>
// //           <View style={styles.detailColumn}>
// //             <View style={styles.detailRow}>
// //               <FeatherIcon name="map-pin" size={15} color="red" style={styles.locationIcon} />
// //               <Text style={styles.detailTitle}>Waiting for Driver Confirmation</Text>
// //             </View>
// //           </View>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //   },
// //   headerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: 10,
// //     backgroundColor: 'grey',
// //   },
// //   profileContainer: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 40 / 2,
// //     backgroundColor: '#EE272E',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   closeButton: {
// //     marginRight: 10,
// //   },
// //   headerText: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   middleContainer: {
// //     flex: 1,
// //     justifyContent: 'space-between',
// //     borderColor: '#E8E8E8',
// //     borderWidth: 2,
// //     borderRadius: 10,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 0,
// //     paddingVertical: 0,
// //     width: '75%',
// //     height: 3,
// //     alignItems: 'space-between',
// //     paddingTop: 0,
// //   },
// //   spaceBetweenContainers: {
// //     marginBottom: 10,
// //     marginLeft: 50,
// //     marginTop: 20,
// //   },
// //   detailContainer: {
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ddd',
// //   },

// //   middleContainer2: {
// //     flex: 1,
// //     justifyContent: 'space-between',
// //     borderColor: '#E8E8E8',
// //     borderWidth: 2,
// //     borderRadius: 10,
// //     backgroundColor: '#F0F0F0',
// //     paddingHorizontal: 0,
// //     paddingVertical: 0,
// //     width: 410,
// //     height: 10,
// //     alignItems: 'space-between',
// //     paddingTop: 0,
// //   },
// //   spaceBetweenContainers2: {
// //     marginBottom: 10,
// //     marginTop: 20,
// //   },
// //   detailContainer2: {
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ddd',
// //   },

// //   driverInfoContainer: {
// //     backgroundColor: 'white',
// //     width: '100%',
// //     marginBottom: 1,
// //     borderRadius: 50,
// //   },
// //   detailTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   detailRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   detailColumn: {
// //     flexDirection: 'column',
// //   },
// //   detailText: {
// //     fontSize: 16,
// //   },
// //   locationIcon: {
// //     marginRight: 5,
// //   },
// //   profilePictureContainer: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 40 / 2,
// //     backgroundColor: '#ccc',
// //     marginRight: 10,
// //   },
// // });

// // export default TripHistory;
// //////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Picker } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// export class TripHistory extends Component {
//   handleCloseProfile = () => {
//     // Navigate to the 'ContactScreen' when the close icon is pressed
//     this.props.navigation.navigate('ContactScreen');
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={this.handleCloseProfile} style={styles.closeButton}>
//             <FeatherIcon name="x-circle" size={30} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Trip History</Text>
//         </View>

//         {/* Additional components for History and This Month */}
//         <View style={styles.headerSubContainer}>
//           <Text style={styles.headerSubText}>History</Text>
//           <View style={[styles.dropdownContainer, { backgroundColor: 'red' }]}>
//             {/* Add your dropdown component here, I'm using Picker for example */}
//             <Picker>
//               <Picker.Item label="This Month" value="thisMonth" />
//               {/* Add other options as needed */}
//             </Picker>
//           </View>
//         </View>

//         {/* First Trip */}
//         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
//           {/* Row 1: Starting and Ending Places */}
//           <View style={styles.detailContainer}>
//             <View style={styles.detailcolumn}>
//               <View style={styles.detailRow}>
//                 {/* Red round icon for starting location */}
//                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
//                 <Text style={styles.detailTitle}>ezTruck Office</Text>
//                 <Text style={styles.detailText}>7:34 AM</Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.detailContainer}>
//             <View style={styles.detailRow}>
//               {/* Green location symbol for Esplanade */}
//               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
//               <Text style={styles.detailTitle}>Esplanade</Text>
//               <Text style={styles.detailText}>7:48 AM</Text>
//             </View>
//           </View>
//           {/* Row 2: Driver Information */}
//           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
//             <View style={styles.detailRow}>
//               {/* Blank circular container for profile picture */}
//               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
//               <View style={styles.detailcolumn}>
//                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
//                 <Text style={styles.detailTitle}>Star Rating</Text>
//               </View>
//               <Text style={styles.detailText}>Price: ₹500</Text>
//             </View>
//           </View>
//         </View>

//         {/* Second Trip */}
//         {/* ... (Repeat the structure for other trips) */}

//         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
//           {/* Row 1: Starting and Ending Places */}
//           <View style={styles.detailContainer}>
//             <View style={styles.detailcolumn}>
//               <View style={styles.detailRow}>
//                 {/* Red round icon for starting location */}
//                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
//                 <Text style={styles.detailTitle}>ezTruck Office</Text>
//                 <Text style={styles.detailText}>7:34 AM</Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.detailContainer}>
//             <View style={styles.detailRow}>
//               {/* Green location symbol for Esplanade */}
//               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
//               <Text style={styles.detailTitle}>Esplanade</Text>
//               <Text style={styles.detailText}>7:48 AM</Text>
//             </View>
//           </View>
//           {/* Row 2: Driver Information */}
//           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
//             <View style={styles.detailRow}>
//               {/* Blank circular container for profile picture */}
//               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
//               <View style={styles.detailcolumn}>
//                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
//                 <Text style={styles.detailTitle}>Star Rating</Text>
//               </View>
//               <Text style={styles.detailText}>Price: ₹500</Text>
//             </View>
//           </View>
//         </View>

//         {/* Repeat this structure for other trips as needed */}

//         <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
//           {/* Row 1: Starting and Ending Places */}
//           <View style={styles.detailContainer}>
//             <View style={styles.detailcolumn}>
//               <View style={styles.detailRow}>
//                 {/* Red round icon for starting location */}
//                 <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
//                 <Text style={styles.detailTitle}>ezTruck Office</Text>
//                 <Text style={styles.detailText}>7:34 AM</Text>
//               </View>
//             </View>
//           </View>
//           <View style={styles.detailContainer}>
//             <View style={styles.detailRow}>
//               {/* Green location symbol for Esplanade */}
//               <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
//               <Text style={styles.detailTitle}>Esplanade</Text>
//               <Text style={styles.detailText}>7:48 AM</Text>
//             </View>
//           </View>
//           {/* Row 2: Driver Information */}
//           <View style={[styles.detailContainer, styles.driverInfoContainer]}>
//             <View style={styles.detailRow}>
//               {/* Blank circular container for profile picture */}
//               <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
//               <View style={styles.detailcolumn}>
//                 <Text style={styles.detailTitle}>Driver: Prince P</Text>
//                 <Text style={styles.detailTitle}>Star Rating</Text>
//               </View>
//               <Text style={styles.detailText}>Price: ₹500</Text>
//             </View>
//           </View>
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#EE272E',
//   },
//   closeButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   headerSubContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   headerSubText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   dropdownContainer: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//   },
//   middleContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   spaceBetweenContainers: {
//     justifyContent: 'space-between',
//   },
//   detailContainer: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   detailcolumn: {
//     flex: 1,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   locationIcon: {
//     marginRight: 5,
//   },
//   detailTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   detailText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   driverInfoContainer: {
//     marginTop: 10,
//   },
//   profilePictureContainer: {
//     marginRight: 10,
//   },
// });

// export default TripHistory;
/////////////////////////////////////////////////////////////////////////////
//imp===================original=======================


import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export class TripHistory extends Component {
  handleCloseProfile = () => {
    // Handle close profile action
    // You can navigate back or perform any other action
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.handleCloseProfile} style={styles.closeButton}>
            <FeatherIcon name="x-circle" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Trip History</Text>
        </View>

        {/* Additional components for History and This Month */}
        <View style={styles.headerSubContainer}>
          <Text style={styles.headerSubText}>History</Text>
          <View style={[styles.dropdownContainer, { backgroundColor: 'red' }]}>
            {/* Add your dropdown component here, I'm using Picker for example */}
            <Picker>
              <Picker.Item label="This Month" value="thisMonth" />
              {/* Add other options as needed */}
            </Picker>
          </View>
        </View>

        {/* First Trip */}
        <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
          {/* Row 1: Starting and Ending Places */}
          <View style={styles.detailContainer}>
            <View style={styles.detailcolumn}>
              <View style={styles.detailRow}>
                {/* Red round icon for starting location */}
                <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
                <Text style={styles.detailTitle}>ezTruck Office</Text>
                <Text style={styles.detailText}>7:34 AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.detailRow}>
              {/* Green location symbol for Esplanade */}
              <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
              <Text style={styles.detailTitle}>Esplanade</Text>
              <Text style={styles.detailText}>7:48 AM</Text>
            </View>
          </View>
          {/* Row 2: Driver Information */}
          <View style={[styles.detailContainer, styles.driverInfoContainer]}>
            <View style={styles.detailRow}>
              {/* Blank circular container for profile picture */}
              <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
              <View style={styles.detailcolumn}>
                <Text style={styles.detailTitle}>Driver: Prince P</Text>
                <Text style={styles.detailTitle}>Star Rating</Text>
              </View>
              <Text style={styles.detailText}>Price: ₹500</Text>
            </View>
          </View>
        </View>

        {/* Second Trip */}
        {/* ... (Repeat the structure for other trips) */}

        <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
          {/* Row 1: Starting and Ending Places */}
          <View style={styles.detailContainer}>
            <View style={styles.detailcolumn}>
              <View style={styles.detailRow}>
                {/* Red round icon for starting location */}
                <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
                <Text style={styles.detailTitle}>ezTruck Office</Text>
                <Text style={styles.detailText}>7:34 AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.detailRow}>
              {/* Green location symbol for Esplanade */}
              <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
              <Text style={styles.detailTitle}>Esplanade</Text>
              <Text style={styles.detailText}>7:48 AM</Text>
            </View>
          </View>
          {/* Row 2: Driver Information */}
          <View style={[styles.detailContainer, styles.driverInfoContainer]}>
            <View style={styles.detailRow}>
              {/* Blank circular container for profile picture */}
              <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
              <View style={styles.detailcolumn}>
                <Text style={styles.detailTitle}>Driver: Prince P</Text>
                <Text style={styles.detailTitle}>Star Rating</Text>
              </View>
              <Text style={styles.detailText}>Price: ₹500</Text>
            </View>
          </View>
        </View>

        {/* Repeat this structure for other trips as needed */}

        <View style={[styles.middleContainer, styles.spaceBetweenContainers]}>
          {/* Row 1: Starting and Ending Places */}
          <View style={styles.detailContainer}>
            <View style={styles.detailcolumn}>
              <View style={styles.detailRow}>
                {/* Red round icon for starting location */}
                <FontAwesomeIcon name="map-marker" size={15} color="red" style={styles.locationIcon} />
                <Text style={styles.detailTitle}>ezTruck Office</Text>
                <Text style={styles.detailText}>7:34 AM</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.detailRow}>
              {/* Green location symbol for Esplanade */}
              <FontAwesomeIcon name="map-marker" size={15} color="green" style={styles.locationIcon} />
              <Text style={styles.detailTitle}>Esplanade</Text>
              <Text style={styles.detailText}>7:48 AM</Text>
            </View>
          </View>
          {/* Row 2: Driver Information */}
          <View style={[styles.detailContainer, styles.driverInfoContainer]}>
            <View style={styles.detailRow}>
              {/* Blank circular container for profile picture */}
              <FeatherIcon name="user" size={30} color="#ccc" style={styles.profilePictureContainer} />
              <View style={styles.detailcolumn}>
                <Text style={styles.detailTitle}>Driver: Prince P</Text>
                <Text style={styles.detailTitle}>Star Rating</Text>
              </View>
              <Text style={styles.detailText}>Price: ₹500</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#EE272E',
  },
  closeButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  headerSubText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    borderRadius: 50,
    backgroundColor: '#EE272E',
    borderColor: 'black',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#E8E8E8',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: '75%',
    height: 50,
    alignItems: 'space-between',
    paddingTop: 0,
  },
  spaceBetweenContainers: {
    marginBottom: 10,
    marginLeft: 50,
    marginTop: 20,
  },
  detailContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  driverInfoContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 1,
    radiusBottom: 50,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailcolumn: {
    flexDirection: 'column',
  },
  detailText: {
    fontSize: 16,
  },
  locationIcon: {
    marginRight: 5,
  },
  profilePictureContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
});

export default TripHistory;
