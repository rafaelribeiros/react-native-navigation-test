import { combineReducers } from 'redux'

import { createReducer } from './functionalReducer'
import { authReducerConfig } from './authentication'
import { profileReducerConfig } from './profile'
import { feedReducerConfig } from './feed'
import { postReducerConfig } from './post'

export const reducers = {
  auth: createReducer(authReducerConfig),
  profile: createReducer(profileReducerConfig),
  feed: createReducer(feedReducerConfig),
  post: createReducer(postReducerConfig),
}

export const rootReducer = combineReducers(reducers)
