// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, FlatList } from 'react-native'
// import DeckCard from '../atoms/DeckCard'

// class DeckList extends Component {
//   renderItem = ({ deck }) => {
//     return (
//       <TouchableOpacity key={deck} onPress={() => this.props.navigation.navigate(
//         'Deck',
//         { deck: deck }
//       )}>
//         <DeckCard deck={deck} number={decks[deck].questions.length} />
//       </TouchableOpacity>
//     )
//   }
//   render () {
//     const { decks } = this.props
//     return (
//       <View style={{marginTop: '10%'}}>
//         <FlatList
//           data={decks}
//           renderItem={this.renderItem}
//         />
//       </View>
//     )
//   }
// }

// export default DeckList





import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import DeckCard from '../atoms/DeckCard'

class DeckList extends Component {
  render () {
    const { decks } = this.props
    return (
      <ScrollView style={{marginTop: '10%'}}>
        {Object.keys(decks).map(deck => (
          <TouchableOpacity key={deck} onPress={() => this.props.navigation.navigate(
            'Deck',
            { deck: decks[deck] }
          )}>
            <DeckCard deck={deck} number={decks[deck].questions.length} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

export default DeckList
