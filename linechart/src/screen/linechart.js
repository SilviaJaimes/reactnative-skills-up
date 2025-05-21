import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default function LineChartApp() {

    const data1 = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];
    const data2 = [30, 45, 70, 60, 55, 80, 90, 65, 40, 30];

    return (
        <View style={styles.container}>
            <YAxis
                data={data1}
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                numberOfTicks={6}
                formatLabel={(value) => `${value}`}
            />

            <View style={styles.chart}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data1}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                >
                    <Grid />
                </LineChart>

                <LineChart
                    style={StyleSheet.absoluteFill}
                    data={data2}
                    svg={{ stroke: 'rgb(244, 67, 54)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
    },
    chart: {
        height: 200, 
        width: Dimensions.get('window').width - 100, 
        marginLeft: 10, 
    },
});