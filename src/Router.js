import { StackNavigator } from 'react-navigation';
import { Characters } from './components/Characters/Characters'
import { Character } from './components/Character'
import { Comics } from './components/Comics'

export const Router = StackNavigator({
  Characters: { screen: Characters },
  Character: { screen: Character, path: 'character/:id' },
  Comics: { screen: Comics, path: 'comics/:characterId' }
});
