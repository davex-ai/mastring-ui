import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import meditate1 from '../../assets/Frame 33733 (1).png';
import meditate2 from '../../assets/Frame 33733.png';
import meditate3 from '../../assets/Frame 33734 (1).png';
import meditate4 from '../../assets/Frame 33734.png';
import meditate5 from '../../assets/Frame 33735.png';

const PageThree = () => {
  const images = [
    meditate1,
    meditate2,
    meditate3,
    meditate4,
    meditate5,
    meditate5, // duplicate as in your example
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditation</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text</Text>

      {/* Grid of images */}
      <View style={styles.grid}>
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.image} />
        ))}
      </View>
    </View>
  );
};

export default PageThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 20,
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  image: {
    width: '48%', 
    aspectRatio: 1, 
    marginBottom: 12,
    borderRadius: 12,
  },
});