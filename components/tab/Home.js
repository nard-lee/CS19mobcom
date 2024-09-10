import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const banner = [
    { id: 1, image: require("../../assets/banner.png") },
    { id: 1, image: require("../../assets/banner.jpg") },
  ];

  const dishesData = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      dish: "Pasta",
      shortDescription: "Creamy pasta dish with bacon and cheese",
      src: require("../../assets/carbonara.jpg"),
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      dish: "Curry",
      shortDescription: "Spiced curry with grilled chicken",
      src: require("../../assets/chicken.jpg"),
    },
    {
      id: 3,
      name: "Caprese Salad",
      dish: "Salad",
      shortDescription: "Fresh salad with tomatoes, mozzarella, and basil",
      src: require("../../assets/salad.webp"),
    },
    {
      id: 4,
      name: "Beef Tacos",
      dish: "Mexican",
      shortDescription: "Tortillas filled with seasoned beef and toppings",
      src: require("../../assets/taco.jpg"),
    },
    {
      id: 5,
      name: "Mushroom Risotto",
      dish: "Risotto",
      shortDescription: "Creamy Italian rice dish with mushrooms",
      src: require("../../assets/risoto.jpg"),
    },
    {
      id: 6,
      name: "Vegetable Stir-Fry",
      dish: "Asian",
      shortDescription: "Assorted vegetables stir-fried in a savory sauce",
      src: require("../../assets/vegie.jpg"),
    },
    {
      id: 7,
      name: "Grilled Salmon",
      dish: "Seafood",
      shortDescription: "Fresh salmon fillet grilled to perfection",
      src: require("../../assets/salmon.jpg"),
    },
    {
      id: 8,
      name: "Spinach and Feta Pie",
      dish: "Pie",
      shortDescription: "Savory pie with spinach, feta cheese, and herbs",
      src: require("../../assets/pie.jpeg"),
    },
    {
      id: 9,
      name: "Chicken Caesar Salad",
      dish: "Salad",
      shortDescription: "Classic Caesar salad with grilled chicken",
      src: require("../../assets/csalad.jpg"),
    },
    {
      id: 10,
      name: "Beef Biryani",
      dish: "Rice",
      shortDescription: "Fragrant rice dish with spiced beef and herbs",
      src: require("../../assets/biryani.jpg"),
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        prev == banner.length - 1 ? 0 : prev + 1;
      });
    });
  }, [banner]);

  const images = [
    { id: 1, title: "Meat Dish", image: require("../../assets/lg-meat.jpg") },
    { id: 2, title: "Vegan Dish", image: require("../../assets/lg-vegie.jpg") },
    { id: 3, title: "Dessert", image: require("../../assets/lg-dessert.jpg") },
    { id: 4, title: "Drinks", image: require("../../assets/lg-drink.jpg") },
  ];

  const windowWidth = Dimensions.get("window").width;
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.scene, { backgroundColor: theme.p_bg }]}>
      <View style={styles.search_panel}>
        <TextInput
          style={[
            styles.search_input,
            { backgroundColor: theme.p_bg, color: theme.p_col },
          ]}
          placeholder="search content..."
          placeholderTextColor={theme.p_col}
        />
        <Feather
          style={styles.search_icon}
          name="search"
          size={24}
          color="red"
        />
      </View>
      <ScrollView>
        <View style={[styles.image_card]}>
          <Image
            style={[styles.jumbo]}
            source={require("../../assets/banner1.webp")}
            resizeMode="cover"
          />
        </View>

        <View style={styles.category}>
          {images.map((item) => (
            <View style={styles.c_container} key={item.id}>
              <View style={[styles.sm_card]}>
                <Image
                  style={[styles.sm_jumbo]}
                  source={item.image}
                  resizeMode="cover"
                />
              </View>
              <Text style={[styles.option_title]}>{item.title}</Text>
            </View>
          ))}
        </View>

        <View
          style={[
            styles.divider,
            {
              backgroundColor: theme.s_bg,
            },
          ]}
        ></View>

        <View style={styles.todays_pick}>
          <View style={{ flexDirection: "row", gap: 10, paddingBottom: 10 }}>
            <AntDesign name="star" size={24} color={theme.p_col} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "black",
                color: theme.p_col,
                fontFamily: "Aclonica-Regular",
              }}
            >
              TODAYS TOP 10 RECIPE !!
            </Text>
          </View>
          <View style={styles.pick_list}>
            {dishesData.map((item) => (
              <Pressable
                style={[styles.pick_panel, { backgroundColor: "transparent" }]}
                key={item.id}
              >
                <View>
                  <Image
                    style={[styles.thumbnail]}
                    source={item.src}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={[
                      {
                        fontSize: 15,
                        color: theme.p_col,
                        fontWeight: 'bold',
                        fontFamily: "Open-sans",
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 12, color: theme.p_col }}>
                    {item.shortDescription}
                  </Text>
                  <View style={{ flexDirection: "row", gap: 3 }}>
                    <AntDesign name="star" size={12} color={theme.p_col} />
                    <Text style={{ fontSize: 10, color: theme.p_col }}>89</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    height: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 20,
    gap: 10,
  },
  image_card: {
    width: "100%",
    height: 240,
    // backgroundColor: "red",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 120,
    },
    elevation: 10,
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  jumbo: {
    width: "100%",
    height: 240,
    borderRadius: 5,
  },
  search_panel: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  search_input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 20,
    fontFamily: "Poppins-Regular",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 120,
    },
    elevation: 4,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  search_icon: {
    position: "absolute",
    left: 10,
    color: "#ccc",
  },
  category: {
    // backgroundColor: "red",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  c_container: {
    width: "48.6%",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: 'green'
    position: "relative",
  },
  sm_card: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 90,
  },

  sm_jumbo: {
    width: "100%",
    height: 90,
    borderRadius: 5,
  },
  option_title: {
    position: "absolute",
    fontFamily: "Open-sans",
    fontSize: 13,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    bottom: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "center",
  },
  divider: {
    width: "99%",
    height: 1,

    marginVertical: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  todays_pick: {},
  pick_list: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    gap: 5,
  },
  pick_panel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

export default Home;
