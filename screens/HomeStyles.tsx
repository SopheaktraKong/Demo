import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        paddingBottom: 12,
        backgroundColor: 'green',
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
        transform: [{translateY: 20}],
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
        backgroundColor: 'green',
      },
      menuText: {
        height: 30,
        fontSize: 12,
        marginTop: 6,
        color: 'black',
        textAlign: 'center',
      },
      icon: {
        color: 'white',
        fontSize: 24,
      },
      searchIcon: {
        color: 'black',
        fontSize: 24,
      },
      item: {
        marginLeft: 12,
      },
      card: {
        height: 200,
        width: width - 48,
        borderRadius: 24,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        marginTop: 6,
        overflow: 'hidden',
      },
      list: {
        padding: 6,
        marginTop: 6,
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      sectionTitle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 12,
        // marginHorizontal: 6,

      },

})