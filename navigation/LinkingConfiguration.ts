import { LinkingOptions, NavigatorScreenParams } from '@react-navigation/native'
import * as Linking from 'expo-linking'

export type RootStackParamList = {
  Root: NavigatorScreenParams<undefined>
}

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Phrases: 'phrases',
          Calendar: 'calendar',
          Diary: 'diary',
          Graph: 'graph',
          Settings: 'settings'
        }
      }
    }
  }
}

export default linking
