import { TouchableOpacity, View, Text, Image, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Carousel from 'react-native-reanimated-carousel';
import { AntDesign } from '@expo/vector-icons'

const Symptoms = () => {


  const width = Dimensions.get('window').width
  const [currentPage, setCurrentPage] = useState(0);

  const carouselData = [
    { id: "ataxiaPage", title: 'Ataxia', image: require("../../assets/images/ataxia.png")},
    { id: "diarrheaPage", title: 'Diarrhea', image: require("../../assets/images/diarrhea.png")},
    { id: "nasalDischargePage", title: 'Nasal Discharge', image: require("../../assets/images/nasalDischarge.png")},
    { id: "sneezingPage", title: 'Sneezing', image: require("../../assets/images/sneezing.png")},
    { id: "swollenCombPage", title: 'Swollen Comb', image: require("../../assets/images/swollenComb.png")},
    { id: "swollenEyesPage", title: 'Swollen Eyes', image: require("../../assets/images/swollenEyes.png")},
    { id: "swollenFeetPage", title: 'Swollen Feet', image: require("../../assets/images/swollenFeet.png")},
  ];

  const carouselRef = useRef(null);

  const onPageChange = (index) => {
    setCurrentPage(index);
  };

 
  const renderItem = ({ item }) => {
    return (
      <View className="flex-1 justify-center items-center">
        <SafeAreaView className="flex-1 justify-center items-center">
          <TouchableOpacity onPress={() => router.push("/diseases/" + item.id)} className="flex-1 justify-center items-center mt-10">
              <Image 
              source={item.image} 
              resizeMode='contain' className="w-80 h-80"/>
          </TouchableOpacity>
          <View className="items-center justify-center">
            <Text className="font-psemibold text-xl pt-10"> {item.title} </Text>
          </View>
        </SafeAreaView>
      </View>  
    );
  };
  
  return (
    <SafeAreaView className=" bg-cadetblue w-full h-full">
      <View className="flex-1">
        <TouchableOpacity onPress={() => router.back()} className="ml-5 mt-5">
          <AntDesign name="arrowleft" size={24} color="black"/>
        </TouchableOpacity>
        <Text className="text-center mb-4 text-2xl font-pbold pt-20">SYMPTOMS</Text>
        <Carousel
          ref={carouselRef}
          width={width}
          height={350}
          data={carouselData}
          renderItem={renderItem}
          onSnapToItem={onPageChange}
          // onScrollIndexChanged={onScrollIndexChanged}
        />
        <View className="flex-row justify-center mb-40 items-center">
          {carouselData.map((_, index) => (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentPage ? 'gray' : 'white',
                marginHorizontal: 5,
              }}
            />
          ))}
        </View> 
      </View>
    </SafeAreaView>  
    )
}

export default Symptoms;
