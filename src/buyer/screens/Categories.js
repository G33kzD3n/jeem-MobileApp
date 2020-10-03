import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppScreen from '../../common/components/AppScreen'
import AccordionListItem from '../components/CategoryPageComponents/AccordionListItem'
// import Cards from '../components/CategoryPageComponents/Card'

const Categories = () => {
    return (
        <AppScreen>
           <AccordionListItem/>
        </AppScreen>
    )
}

export default Categories

const styles = StyleSheet.create({})
