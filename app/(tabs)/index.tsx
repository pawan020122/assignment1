import { Image } from 'expo-image';
import {StyleSheet, View, ScrollView, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        {/* <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Hello World</Text> */}
        <Image
        style={styles.image}
        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fd52OTdb5jFQJ6ee5YU0G03WSgJPZMHAL0cselBQAWIAgPufFljELq4R32-FJKTmz3g&usqp=CAU"}}
        />
        <View>
          <Image
          style={styles.profileImage}
          source={{uri: "https://www.wikihow.com/images/c/cc/Face-Shapes-Men-Step-12.jpg"}}
          />
        </View>
      </View>

      <View style={styles.heading}>
        <Text style={styles.text}>Followers</Text>
        <Text style={styles.mainText}>Saved</Text>
        <Text style={styles.text}>Following</Text>
      </View>

      <ScrollView>
      <View style={styles.mainImage}> 
        <Image
        style={styles.image1}
        source={{uri: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="}}
        />
        <Image
        style={styles.image1}
        source={{uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"}}
        />
      </View>

      <View>
        <Image
        style={styles.image2}
        source={{uri: "https://st2.depositphotos.com/1718692/7425/i/450/depositphotos_74257459-stock-photo-lake-near-the-mountain-in.jpg"}}
        />
      </View>

      <View style={styles.mainImage}>
        <Image
        style={styles.image3}
        source={{uri: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"}}
        />
        <Image
        style={styles.image3}
        source={{uri: "https://media.istockphoto.com/id/1216726258/photo/mountain-coverd-with-cloud-layers-and-beautiful-sky.jpg?s=612x612&w=0&k=20&c=H-2YPlqvEUflou0aZbPY3_grwqukN3jLiGrBeHVuSbk="}}
        />
        <Image
        style={styles.image3}
        source={{uri: "https://i.pinimg.com/236x/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg"}}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#efe9e9ff',
    padding: 15,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  text: {
    color: '#565555ff',
    fontSize: 20,
  },
  mainText: {
    color: '#0a0606ff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image1: {
    width: '48%',
    height: 200,
    borderRadius: 20,
    marginTop: 30,
  },
  mainImage: { 
    flexDirection: 'row',
    gap: 10,
  },
  image2: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 30,
  },
  image3: {
    width: '30%',
    height: 250,
    borderRadius: 20,
    marginTop: 30,
    marginRight: 5,
  },
});