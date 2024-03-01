/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

type Props = {};

const HOME_MENUS = {
  DEAL: {key: 'DEAL', text: 'Deal'},
  KHMER: {key: 'KHMER', text: 'Khmer'},
  NEAR_ME: {key: 'NEAR_ME', text: 'Near Me'},
  TOP_BRANDS: {key: 'TOP_RBANDS', text: 'Top Brands'},
  FROM: {key: 'FROM', text: 'From 600or'},
  INTERNATIONAL: {key: 'INTERNATIONAL', text: 'International Cuisine'},
  FREE_DEL: {key: 'FREE_DEL', text: 'Free Delivery'},
  ALL: {key: 'ALL', text: 'All Cuisines'},
};

const HomeScreen = (props: Props) => {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);

  return (
    <View style={styles.container}>
      <View style={[styles.header, {paddingTop: StatusBar.currentHeight}]}>
        <LinearGradient
          colors={['#74D08F', '#5CC5B7']}
          style={StyleSheet.absoluteFill}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        <SafeAreaView />
        <View style={styles.row}>
          <TouchableOpacity>
            <Ionicons style={styles.icon} name={'at'} />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={styles.description}>{'Delivery to '}</Text>
            <Text style={styles.title}>{'PUC TK'}</Text>
          </View>
          <TouchableOpacity style={styles.headerBtn}>
            <Ionicons style={styles.icon} name={'heart-outline'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Ionicons style={styles.icon} name={'newspaper-outline'} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchFake} />
        <View style={styles.searchBar}>
          <Ionicons style={styles.searchIcon} name={'search'} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
      <View style={styles.menu}>
        {Object.values(HOME_MENUS)?.map(i => {
          return (
            <TouchableOpacity
              key={i?.key}
              style={styles.menuItem}
              onPress={() => Alert.alert('Hello')}>
              <Image
                style={styles.menuImg}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1681412205520-49c7f9b8b67f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
                }}
              />
              <Text style={styles.menuText}>{i.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 12,
  },
  headerBtn: {
    padding: 6,
    marginLeft: 12,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, .2)',
  },
  searchFake: {
    height: 25,
  },
  searchBar: {
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 24,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    backgroundColor: 'white',
    transform: [{translateY: 24}],
  },
  searchInput: {
    color: 'black',
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  menu: {
    marginTop: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  menuItem: {
    width: '25%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  menuImg: {
    height: 60,
    marginTop: 24,
    aspectRatio: 1,
    borderRadius: 100,
  },
  menuText: {
    fontSize: 12,
    marginTop: 6,
    color: 'black',
    textAlign: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
  searchIcon: {
    fontSize: 28,
    color: 'black',
  },
});
