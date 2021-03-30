
import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import users from '../data/users';


export default props => {

  function getUserItem({ item: user }) {
    return (
      <ListItem
        leftAvatar={{ source: { uri: user.avatarUrl } }}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}