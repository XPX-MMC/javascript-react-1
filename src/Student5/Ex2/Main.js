import React from 'react'
import {Header} from './Header' 
import { Post } from './Post'
import{Group} from './Group'
import {Footer} from './Footer'

import './Main.css'

export const Main = () => {
  return (
    <div>
      <Header></Header>
       <Post> </Post> 
       <Group> </Group>
       <Footer> </Footer>
    </div>
  )
}
