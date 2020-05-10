import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import FusionCharts from "react-native-fusioncharts";
import * as Animatable from 'react-native-animatable';

export default class Home extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the dataset and the colorRange of the map
    const dataset = [{
      "id": "VN.MD.VL",
      "value": "10",
      "showLabel": "1"
      }, {
      "id": "VN.MD.AG",
      "value": "15",
      "showLabel": "1"
      }, {
      "id": "VN.MD.KG",
      "value": "50",
      "showLabel": "1"
      }, {
      "id": "VN.MD.TG",
      "value": "20",
      "showLabel": "1"
      }, {
      "id": "VN.MD.CN",
      "value": "23",
      "showLabel": "1"
      }, {
      "id": "VN.MD.BL",
      "value": "30",
      "showLabel": "1"
      }, {
      "id": "VN.MD.BR",
      "value": "45",
      "showLabel": "1"
      }, {
      "id": "VN.MD.CM",
      "value": "27",
      "showLabel": "1"
      }, {
      "id": "VN.MD.ST",
      "value": "16",
      "showLabel": "1"
      }, {
      "id": "VN.MD.HU",
      "value": "25",
      "showLabel": "1"
      }, {
      "id": "VN.MD.LA",
      "value": "22",
      "showLabel": "1"
      }, {
      "id": "VN.MD.DT",
      "value": "34",
      "showLabel": "1"
      }, {
      "id": "VN.MD.TV",
      "value": "28",
      "showLabel": "1"
    }];

    const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color":
    [{
      "minvalue": "0.5",
      "maxvalue": "10",
      "color": "#FFFF99"
      }, {
      "minvalue": "10.1",
      "maxvalue": "20",
      "color": "#FFFF33"
      }, {
      "minvalue": "20.1",
      "maxvalue": "30",
      "color": "#FF9933"
      }, {
      "minvalue": "30.1",
      "maxvalue": "40",
      "color": "#FF6600"
      }, {
      "minvalue": "40.1",
      "maxvalue": "50",
      "color": "#FF0000"
    }]
    };
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "maps/MekongRiverDelta",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Bản đồ phân bố hạn hán Đồng bằng Sông Cửu Long",
          //"subcaption": " 2020",
          "numbersuffix": "%",
          "includevalueinlabels": "1",
          "labelsepchar": ": ",
          "entityFillHoverColor": "#FFF9C4",
          "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset
      }
    };
    this.state = chartConfig;
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html"
      },
      //ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
        <ScrollView>
      <Animatable.View style={styles.container}>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
          <Text style={styles.title}>Bản đồ phân bố hạn hán ĐBSCL</Text>
        </View>
        </Animatable.View>
        <Animatable.View style={styles.container}>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
          <Text style={styles.title}>Bản đồ phân bố hạn hán ĐBSCL</Text>
        </View>
      </Animatable.View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
    paddingBottom: 50
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  },
  title: {
    fontStyle: "italic",
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 10
  },
});