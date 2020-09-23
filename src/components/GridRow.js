import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { spacing } from '../config/spacing'
import GridCell from './GridCell'

export default class GridRow extends Component {
    constructor(props){
        super(props)

        this.renderCells = this.renderCells.bind(this)
    }

    renderCells = ()=>{
        let cells = []
        this.props.cells.map((cellItem)=>{
            cells.push(
                <GridCell
                    key={cellItem.key}
                    title={cellItem.title}
                    subtitle={cellItem.subtitle}
                    icon={cellItem.icon}
                    tomorrow={cellItem.tomorrow}
                    now={cellItem.now}
                    header={cellItem.header}
                    titles={cellItem.titles}
                ></GridCell> 
            )
        })
        return cells
    }

    render() {
        return (
            <View style={spacing.row}>
                {this.renderCells()}
            </View>
        )
    }
}

const styles = StyleSheet.create({})
