import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Define the dataset and the colorRange of the map
    const dataset = [{
      "id": "NA",
      "value": ".82",
      "showLabel": "1"
      }, {
      "id": "SA",
      "value": "2.04",
      "showLabel": "1"
      }, {
      "id": "AS",
      "value": "1.78",
      "showLabel": "1"
      }, {
      "id": "EU",
      "value": ".40",
      "showLabel": "1"
      }, {
      "id": "AF",
      "value": "2.58",
      "showLabel": "1"
      }, {
      "id": "AU",
      "value": "1.30",
      "showLabel": "1"
    }];

    const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color":
    [{
      "minvalue": "0.5",
      "maxvalue": "1.0",
      "color": "#FFD74D"
      }, {
      "minvalue": "1.0",
      "maxvalue": "2.0",
      "color": "#FB8C00"
      }, {
      "minvalue": "2.0",
      "maxvalue": "3.0",
      "color": "#E65100"
    }]
    };
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "maps/vietnam",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "caption": "Average Annual Population Growth",
          "subcaption": " 1955-2015",
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
      ios: require("./assets/fusioncharts.html")
    });
  }
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
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